#include <time.h>
#include <math.h>
#include <stdlib.h>
#include <stdio.h>
#include <vector>

#include "BulletDynamics/ConstraintSolver/btSequentialImpulseConstraintSolver.h"

#define DEBUG 0

#define WARMUP 2
#define FRAMES 64

#define BOX_COUNT 1000
#define ITERATIONS 100000

typedef struct {
  float mean;
  float pc_5th;
  float pc_95th;
} result_t;

using namespace std;

// Simple nearest-rank %ile (on sorted array). We should have enough samples to make this reasonable.
float percentile(clock_t times[FRAMES], float pc) {
  int rank = (int)((pc * FRAMES) / 100);
  return times[rank];
}

int _cmp(const void *a, const void *b) {
	return *(clock_t*)a - *(clock_t*)b;
}

result_t measure(clock_t times[FRAMES]) {
  float values[FRAMES];
  result_t r;

	float total = 0;
	for (int i = 0; i < FRAMES; ++i) {
		values[i] = (float)times[i] / CLOCKS_PER_SEC * 1000;
	 	total += values[i];
	}
  r.mean = total / FRAMES;

	qsort(times, FRAMES, sizeof(clock_t), _cmp);
  r.pc_5th = percentile(times, 5) / CLOCKS_PER_SEC * 1000;
  r.pc_95th = percentile(times, 95) / CLOCKS_PER_SEC * 1000;
  return r;
}

result_t bench_singleConstraintRowSolver() {
	btSolverBody body_template;
	btSolverConstraint constraint_template;

	body_template.m_worldTransform.setIdentity();
	body_template.m_deltaLinearVelocity.setValue(1.01f,1.01f,1.01f);
	body_template.m_deltaAngularVelocity.setValue(1.01f,1.01f,1.01f);
	body_template.m_angularFactor.setValue(1.01f,1.01f,1.01f);
	body_template.m_linearFactor.setValue(1.01f,1.01f,1.01f);
	body_template.m_invMass.setValue(1.01f,1.01f,1.01f);
	body_template.m_pushVelocity.setValue(1.01f,1.01f,1.01f);
	body_template.m_turnVelocity.setValue(1.01f,1.01f,1.01f);
	body_template.m_linearVelocity.setValue(1.01f,1.01f,1.01f);
	body_template.m_angularVelocity.setValue(1.01f,1.01f,1.01f);
	body_template.m_externalForceImpulse.setValue(1.01f,1.01f,1.01f);
	body_template.m_externalTorqueImpulse.setValue(1.01f,1.01f,1.01f);
	body_template.m_originalBody = 0;

	constraint_template.m_relpos1CrossNormal.setValue(1.01f,1.01f,1.01f);
	constraint_template.m_relpos2CrossNormal.setValue(1.01f,1.01f,1.01f);
	constraint_template.m_angularComponentA.setValue(1.01f,1.01f,1.01f);
	constraint_template.m_angularComponentB.setValue(1.01f,1.01f,1.01f);
	
	constraint_template.m_appliedPushImpulse = 1.01f;
	constraint_template.m_appliedImpulse = 1.01f;
	
	constraint_template.m_friction = 1.01f;
	constraint_template.m_jacDiagABInv = 1.01f;
	constraint_template.m_rhs = 1.01f;
	constraint_template.m_cfm = 1.01f;
	constraint_template.m_lowerLimit = 0.01f;
	constraint_template.m_upperLimit = 1000.01f;
	constraint_template.m_rhsPenetration = 1.01f;

	btSequentialImpulseConstraintSolver solver;

  	float checksum = 0.0f;

  	printf("benching...\n");
	clock_t times[FRAMES]; 
	for (int i = 0; i < FRAMES; ++i) {
		int f = 0;
		clock_t start = clock();
		for (int j = 0; j < ITERATIONS; ++j) {
			btSolverBody body = body_template;
			btSolverConstraint constraint = constraint_template;
			solver.resolveSingleConstraintRowGenericSIMD(body, body, constraint);
			checksum += (body.m_deltaAngularVelocity.x() + body.m_deltaAngularVelocity.y() + body.m_deltaAngularVelocity.z());
	    }
		clock_t end = clock();
		times[i] = end - start;
	}

	printf("Checksum: %f\n", checksum);

  	return measure(times);
}


int main(int argc, char** argv) {
  result_t result = bench_singleConstraintRowSolver();
  printf("Benchmark complete.\n  ms/frame: %f 5th %%ile: %f 95th %%ile: %f\n", result.mean, result.pc_5th, result.pc_95th);
}
