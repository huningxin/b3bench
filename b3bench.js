function __ZN35btSequentialImpulseConstraintSolver37resolveSingleConstraintRowGenericSIMDER12btSolverBodyS1_RK18btSolverConstraint($body1, $body2, $c) {
 $body1 = $body1 | 0;
 $body2 = $body2 | 0;
 $c = $c | 0;
 var $1 = 0.0, $10 = 0.0, $100 = SIMD.float32x4(0, 0, 0, 0), $101 = SIMD.float32x4(0, 0, 0, 0), $103 = SIMD.float32x4(0, 0, 0, 0), $104 = SIMD.float32x4(0, 0, 0, 0), $108 = SIMD.float32x4(0, 0, 0, 0), $11 = SIMD.float32x4(0, 0, 0, 0), $13 = 0.0, $16 = SIMD.float32x4(0, 0, 0, 0), $18 = SIMD.float32x4(0, 0, 0, 0), $2 = SIMD.float32x4(0, 0, 0, 0), $21 = SIMD.float32x4(0, 0, 0, 0), $22 = SIMD.float32x4(0, 0, 0, 0), $23 = SIMD.float32x4(0, 0, 0, 0), $26 = SIMD.float32x4(0, 0, 0, 0), $27 = SIMD.float32x4(0, 0, 0, 0), $30 = SIMD.float32x4(0, 0, 0, 0), $31 = SIMD.float32x4(0, 0, 0, 0), $32 = SIMD.float32x4(0, 0, 0, 0), $36 = SIMD.float32x4(0, 0, 0, 0), $38 = SIMD.float32x4(0, 0, 0, 0), $4 = 0.0, $41 = SIMD.float32x4(0, 0, 0, 0), $42 = SIMD.float32x4(0, 0, 0, 0), $43 = SIMD.float32x4(0, 0, 0, 0), $46 = SIMD.float32x4(0, 0, 0, 0), $48 = SIMD.float32x4(0, 0, 0, 0), $5 = SIMD.float32x4(0, 0, 0, 0), $51 = SIMD.float32x4(0, 0, 0, 0), $52 = SIMD.float32x4(0, 0, 0, 0), $53 = SIMD.float32x4(0, 0, 0, 0), $57 = SIMD.float32x4(0, 0, 0, 0), $59 = 0.0, $60 = SIMD.float32x4(0, 0, 0, 0), $62 = SIMD.float32x4(0, 0, 0, 0), $64 = SIMD.float32x4(0, 0, 0, 0), $65 = SIMD.float32x4(0, 0, 0, 0), $67 = SIMD.float32x4(0, 0, 0, 0), $69 = SIMD.float32x4(0, 0, 0, 0), $7 = 0.0, $70 = SIMD.float32x4(0, 0, 0, 0), $71 = SIMD.float32x4(0, 0, 0, 0), $72 = SIMD.float32x4(0, 0, 0, 0), $73 = SIMD.float32x4(0, 0, 0, 0), $74 = SIMD.float32x4(0, 0, 0, 0), $75 = SIMD.float32x4(0, 0, 0, 0), $76 = SIMD.float32x4(0, 0, 0, 0), $77 = SIMD.float32x4(0, 0, 0, 0), $79 = SIMD.float32x4(0, 0, 0, 0), $8 = SIMD.float32x4(0, 0, 0, 0), $80 = SIMD.float32x4(0, 0, 0, 0), $81 = SIMD.float32x4(0, 0, 0, 0), $82 = SIMD.float32x4(0, 0, 0, 0), $83 = SIMD.float32x4(0, 0, 0, 0), $84 = SIMD.float32x4(0, 0, 0, 0), $85 = SIMD.float32x4(0, 0, 0, 0), $86 = SIMD.float32x4(0, 0, 0, 0), $89 = SIMD.float32x4(0, 0, 0, 0), $92 = SIMD.float32x4(0, 0, 0, 0), $93 = SIMD.float32x4(0, 0, 0, 0), $95 = SIMD.float32x4(0, 0, 0, 0), $96 = SIMD.float32x4(0, 0, 0, 0), sp = 0;
 sp = STACKTOP;
 $1 = +HEAPF32[$c + 112 >> 2];
 $2 = SIMD.float32x4.splat($1);
 $4 = +HEAPF32[$c + 144 >> 2];
 $5 = SIMD.float32x4.splat($4);
 $7 = +HEAPF32[$c + 148 >> 2];
 $8 = SIMD.float32x4.splat($7);
 $10 = +HEAPF32[$c + 136 >> 2];
 $11 = SIMD.float32x4.splat($10);
 $13 = +HEAPF32[$c + 140 >> 2];
 $16 = SIMD.float32x4.sub($11, SIMD.float32x4.mul($2, SIMD.float32x4.splat($13)));
 $18 = HEAPF32.getFloat32x4($c + 16 >> 2);
 $21 = SIMD.float32x4.mul($18, HEAPF32.getFloat32x4($body1 + 64 >> 2));
 $22 = SIMD.float32x4.shuffle($21, SIMD.XXXX);
 $23 = SIMD.float32x4.shuffle($21, SIMD.YYYY);
 $26 = SIMD.float32x4.add($22, SIMD.float32x4.add($23, SIMD.float32x4.shuffle($21, SIMD.ZZZZ)));
 $27 = HEAPF32.getFloat32x4($c >> 2);
 $30 = SIMD.float32x4.mul($27, HEAPF32.getFloat32x4($body1 + 80 >> 2));
 $31 = SIMD.float32x4.shuffle($30, SIMD.XXXX);
 $32 = SIMD.float32x4.shuffle($30, SIMD.YYYY);
 $36 = SIMD.float32x4.add($26, SIMD.float32x4.add($31, SIMD.float32x4.add($32, SIMD.float32x4.shuffle($30, SIMD.ZZZZ))));
 $38 = HEAPF32.getFloat32x4($c + 48 >> 2);
 $41 = SIMD.float32x4.mul($38, HEAPF32.getFloat32x4($body2 + 64 >> 2));
 $42 = SIMD.float32x4.shuffle($41, SIMD.XXXX);
 $43 = SIMD.float32x4.shuffle($41, SIMD.YYYY);
 $46 = SIMD.float32x4.add($42, SIMD.float32x4.add($43, SIMD.float32x4.shuffle($41, SIMD.ZZZZ)));
 $48 = HEAPF32.getFloat32x4($c + 32 >> 2);
 $51 = SIMD.float32x4.mul($48, HEAPF32.getFloat32x4($body2 + 80 >> 2));
 $52 = SIMD.float32x4.shuffle($51, SIMD.XXXX);
 $53 = SIMD.float32x4.shuffle($51, SIMD.YYYY);
 $57 = SIMD.float32x4.add($46, SIMD.float32x4.add($52, SIMD.float32x4.add($53, SIMD.float32x4.shuffle($51, SIMD.ZZZZ))));
 $59 = +HEAPF32[$c + 132 >> 2];
 $60 = SIMD.float32x4.splat($59);
 $62 = SIMD.float32x4.sub($16, SIMD.float32x4.mul($36, $60));
 $64 = SIMD.float32x4.sub($62, SIMD.float32x4.mul($57, $60));
 $65 = SIMD.float32x4.add($2, $64);
 $67 = SIMD.float32x4.fromInt32x4Bits(SIMD.float32x4.lessThan($65, $5));
 $69 = SIMD.float32x4.fromInt32x4Bits(SIMD.float32x4.lessThan($65, $8));
 $70 = SIMD.float32x4.sub($5, $2);
 $71 = SIMD.float32x4.and($67, $70);
 $72 = SIMD.float32x4.not($67);
 $73 = SIMD.float32x4.and($72, $64);
 $74 = SIMD.float32x4.or($71, $73);
 $75 = SIMD.float32x4.and($67, $5);
 $76 = SIMD.float32x4.and($72, $65);
 $77 = SIMD.float32x4.or($75, $76);
 $79 = SIMD.float32x4.sub($8, $2);
 $80 = SIMD.float32x4.and($69, $74);
 $81 = SIMD.float32x4.not($69);
 $82 = SIMD.float32x4.and($81, $79);
 $83 = SIMD.float32x4.or($80, $82);
 $84 = SIMD.float32x4.and($69, $77);
 $85 = SIMD.float32x4.and($81, $8);
 $86 = SIMD.float32x4.or($84, $85);
 HEAPF32.setFloat32x4($c + 112 >> 2, $86);
 $89 = SIMD.float32x4.mul($18, HEAPF32.getFloat32x4($body1 + 128 >> 2));
 $92 = SIMD.float32x4.mul($38, HEAPF32.getFloat32x4($body2 + 128 >> 2));
 $93 = HEAPF32.getFloat32x4($body1 + 64 >> 2);
 $95 = SIMD.float32x4.add(SIMD.float32x4.mul($83, $89), $93);
 HEAPF32.setFloat32x4($body1 + 64 >> 2, $95);
 $96 = HEAPF32.getFloat32x4($body1 + 80 >> 2);
 $100 = SIMD.float32x4.add($96, SIMD.float32x4.mul($83, HEAPF32.getFloat32x4($c + 64 >> 2)));
 HEAPF32.setFloat32x4($body1 + 80 >> 2, $100);
 $101 = HEAPF32.getFloat32x4($body2 + 64 >> 2);
 $103 = SIMD.float32x4.add(SIMD.float32x4.mul($83, $92), $101);
 HEAPF32.setFloat32x4($body2 + 64 >> 2, $103);
 $104 = HEAPF32.getFloat32x4($body2 + 80 >> 2);
 $108 = SIMD.float32x4.add($104, SIMD.float32x4.mul($83, HEAPF32.getFloat32x4($c + 80 >> 2)));
 HEAPF32.setFloat32x4($body2 + 80 >> 2, $108);
 STACKTOP = sp;
 return;
}

function __ZN35btSequentialImpulseConstraintSolver33resolveSingleConstraintRowGenericER12btSolverBodyS1_RK18btSolverConstraint($body1, $body2, $c) {
 $body1 = $body1 | 0;
 $body2 = $body2 | 0;
 $c = $c | 0;
 var $112 = 0.0, $115 = 0.0, $136 = 0.0, $139 = 0.0, $14 = 0.0, $169 = 0.0, $172 = 0.0, $193 = 0.0, $196 = 0.0, $20 = 0.0, $3 = 0.0, $78 = 0.0, $82 = 0.0, $85 = 0.0, $89 = 0.0, $9 = 0.0, $deltaImpulse$0 = 0.0, sp = 0;
 sp = STACKTOP;
 $3 = +HEAPF32[$c + 100 >> 2];
 $9 = +HEAPF32[$c + 16 >> 2];
 $14 = +HEAPF32[$c + 20 >> 2];
 $20 = +HEAPF32[$c + 24 >> 2];
 $78 = +HEAPF32[$c + 108 >> 2];
 $82 = +HEAPF32[$c + 112 >> 2] - $3 * +HEAPF32[$c + 116 >> 2] - ($9 * +HEAPF32[$body1 + 64 >> 2] + $14 * +HEAPF32[$body1 + 68 >> 2] + $20 * +HEAPF32[$body1 + 72 >> 2] + (+HEAPF32[$c >> 2] * +HEAPF32[$body1 + 80 >> 2] + +HEAPF32[$c + 4 >> 2] * +HEAPF32[$body1 + 84 >> 2] + +HEAPF32[$c + 8 >> 2] * +HEAPF32[$body1 + 88 >> 2])) * $78 - $78 * (+HEAPF32[$c + 48 >> 2] * +HEAPF32[$body2 + 64 >> 2] + +HEAPF32[$c + 52 >> 2] * +HEAPF32[$body2 + 68 >> 2] + +HEAPF32[$c + 56 >> 2] * +HEAPF32[$body2 + 72 >> 2] + (+HEAPF32[$c + 32 >> 2] * +HEAPF32[$body2 + 80 >> 2] + +HEAPF32[$c + 36 >> 2] * +HEAPF32[$body2 + 84 >> 2] + +HEAPF32[$c + 40 >> 2] * +HEAPF32[$body2 + 88 >> 2]));
 $85 = +HEAPF32[$c + 120 >> 2];
 do if ($3 + $82 < $85) {
  HEAPF32[$c + 100 >> 2] = $85;
  $deltaImpulse$0 = $85 - $3;
 } else {
  $89 = +HEAPF32[$c + 124 >> 2];
  if ($3 + $82 > $89) {
   HEAPF32[$c + 100 >> 2] = $89;
   $deltaImpulse$0 = $89 - $3;
   break;
  } else {
   HEAPF32[$c + 100 >> 2] = $3 + $82;
   $deltaImpulse$0 = $82;
   break;
  }
 } while (0);
 if ((HEAP32[$body1 + 240 >> 2] | 0) != 0) {
  $112 = $deltaImpulse$0 * +HEAPF32[$body1 + 132 >> 2] * $14 * +HEAPF32[$body1 + 116 >> 2];
  $115 = $deltaImpulse$0 * +HEAPF32[$body1 + 136 >> 2] * $20 * +HEAPF32[$body1 + 120 >> 2];
  HEAPF32[$body1 + 64 >> 2] = +HEAPF32[$body1 + 112 >> 2] * $deltaImpulse$0 * +HEAPF32[$body1 + 128 >> 2] * $9 + +HEAPF32[$body1 + 64 >> 2];
  HEAPF32[$body1 + 68 >> 2] = $112 + +HEAPF32[$body1 + 68 >> 2];
  HEAPF32[$body1 + 72 >> 2] = $115 + +HEAPF32[$body1 + 72 >> 2];
  $136 = $deltaImpulse$0 * +HEAPF32[$body1 + 100 >> 2] * +HEAPF32[$c + 68 >> 2];
  $139 = $deltaImpulse$0 * +HEAPF32[$body1 + 104 >> 2] * +HEAPF32[$c + 72 >> 2];
  HEAPF32[$body1 + 80 >> 2] = $deltaImpulse$0 * +HEAPF32[$body1 + 96 >> 2] * +HEAPF32[$c + 64 >> 2] + +HEAPF32[$body1 + 80 >> 2];
  HEAPF32[$body1 + 84 >> 2] = $136 + +HEAPF32[$body1 + 84 >> 2];
  HEAPF32[$body1 + 88 >> 2] = $139 + +HEAPF32[$body1 + 88 >> 2];
 }
 if ((HEAP32[$body2 + 240 >> 2] | 0) == 0) {
  STACKTOP = sp;
  return;
 }
 $169 = $deltaImpulse$0 * +HEAPF32[$body2 + 132 >> 2] * +HEAPF32[$c + 52 >> 2] * +HEAPF32[$body2 + 116 >> 2];
 $172 = $deltaImpulse$0 * +HEAPF32[$body2 + 136 >> 2] * +HEAPF32[$c + 56 >> 2] * +HEAPF32[$body2 + 120 >> 2];
 HEAPF32[$body2 + 64 >> 2] = +HEAPF32[$body2 + 112 >> 2] * $deltaImpulse$0 * +HEAPF32[$body2 + 128 >> 2] * +HEAPF32[$c + 48 >> 2] + +HEAPF32[$body2 + 64 >> 2];
 HEAPF32[$body2 + 68 >> 2] = $169 + +HEAPF32[$body2 + 68 >> 2];
 HEAPF32[$body2 + 72 >> 2] = $172 + +HEAPF32[$body2 + 72 >> 2];
 $193 = $deltaImpulse$0 * +HEAPF32[$body2 + 100 >> 2] * +HEAPF32[$c + 84 >> 2];
 $196 = $deltaImpulse$0 * +HEAPF32[$body2 + 104 >> 2] * +HEAPF32[$c + 88 >> 2];
 HEAPF32[$body2 + 80 >> 2] = $deltaImpulse$0 * +HEAPF32[$body2 + 96 >> 2] * +HEAPF32[$c + 80 >> 2] + +HEAPF32[$body2 + 80 >> 2];
 HEAPF32[$body2 + 84 >> 2] = $193 + +HEAPF32[$body2 + 84 >> 2];
 HEAPF32[$body2 + 88 >> 2] = $196 + +HEAPF32[$body2 + 88 >> 2];
 STACKTOP = sp;
 return;
}

var FRAME = 64;
var N = 100000;
var HEAPF32 = new Float32Array(N + 300);
var HEAP32 = new Int32Array(HEAPF32.buffer);
var STACKTOP;
var sp;

function init() {
  for (var i = 0; i < HEAPF32.length; ++i) {
    HEAPF32[i] = 0.000001;
  }
}

function checksum(i) {
  return HEAPF32[i];
}

function bench_scalar() {
  init();
  var duration = 0.0;
  var sum = 0.0;
  for (var f = 0; f < FRAME; ++f) {
    for (var i = 0; i < N; ++i) {
      var start = Date.now();
      __ZN35btSequentialImpulseConstraintSolver33resolveSingleConstraintRowGenericER12btSolverBodyS1_RK18btSolverConstraint(i,  i + 100, i + 200);
      duration += (Date.now() - start);
      sum += checksum(i);
    }
  }
  print("scalar version checksum: " + sum + " ms/frame: " + duration / FRAME);
  return duration;
}

function bench_simd() {
  init();
  var duration = 0.0;
  var sum = 0.0;
  for (var f = 0; f < FRAME; ++f) {
    for (var i = 0; i < N; ++i) {
      var start = Date.now();
      __ZN35btSequentialImpulseConstraintSolver37resolveSingleConstraintRowGenericSIMDER12btSolverBodyS1_RK18btSolverConstraint(i, i + 100, i + 200);
      duration += (Date.now() - start);
      sum += checksum(i);
    }
  }
  print("simd version checksum:   " + sum + " ms/frame: " + duration / FRAME);
  return duration;
}

var scalar = bench_scalar();
var simd = bench_simd();
print("speedup: " + scalar/simd);