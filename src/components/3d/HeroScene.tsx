
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Box(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.2;
    ref.current.rotation.y += delta * 0.3;
  });
  
  return (
    <mesh {...props} ref={ref} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
  );
}

function Sphere(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta * 0.15;
    ref.current.rotation.z += delta * 0.25;
  });
  
  return (
    <mesh {...props} ref={ref} castShadow>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial color="#0ea5e9" metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

function Torus(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.3;
    ref.current.rotation.z -= delta * 0.2;
  });
  
  return (
    <mesh {...props} ref={ref} castShadow>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial color="#8b5cf6" wireframe={false} metalness={0.3} roughness={0.4} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border/80 shadow-lg">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Torus position={[-2, 0, 0]} />
        <Box position={[0, 0, 0]} />
        <Sphere position={[2, 0, 0]} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
}
