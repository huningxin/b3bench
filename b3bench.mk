CC = g++
CFLAGS = -O2 -I./ -I${BT_SRC_PATH} -DNDEBUG=1
LFLAGS = -lstdc++
BTLIBS = ${BT_SRC_PATH}/BulletDynamics/libBulletDynamics.a ${BT_SRC_PATH}/BulletCollision/libBulletCollision.a ${BT_SRC_PATH}/LinearMath/libLinearMath.a

OBJECTS = \
b3bench.o

all: b3bench

%.o: %.cc
	$(CC) $(CFLAGS) -o $@ -c $<

b3bench: $(OBJECTS)
	$(CC) $(LFLAGS) -o $@ $(OBJECTS) $(BTLIBS)

clean:
	rm $(OBJECTS) b3bench