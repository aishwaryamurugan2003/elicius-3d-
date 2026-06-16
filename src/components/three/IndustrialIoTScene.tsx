import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function ConnectionLines({ count = 20 }) {
  const lines = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      temp.push({ start, end });
    }
    return temp;
  }, [count]);

  return (
    <group>
      {lines.map((line, i) => (
        <Line key={i} start={line.start} end={line.end} />
      ))}
    </group>
  );
}

function Line({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) {
  const ref = useRef<THREE.Line>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  const lineObject = useMemo(() => {
    const points = [start, end];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: "#3B82F6", transparent: true, opacity: 0.2 });
    return new THREE.Line(geometry, material);
  }, [start, end]);

  return <primitive ref={ref} object={lineObject} />;
}

function FloatingNode({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
}

export default function IndustrialIoTScene() {
  const nodes = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ] as [number, number, number],
      color: Math.random() > 0.5 ? "#F59E0B" : "#3B82F6"
    }));
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={["#050510"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <group>
          {nodes.map((node, i) => (
            <FloatingNode key={i} position={node.position} color={node.color} />
          ))}
          <ConnectionLines count={30} />
        </group>

        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
            <MeshDistortMaterial
              color="#6E24FF"
              speed={2}
              distort={0.4}
              radius={1}
            />
          </Sphere>
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}