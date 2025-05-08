
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Box() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const animate = () => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
    requestAnimationFrame(animate);
  };
  
  // Start animation
  requestAnimationFrame(animate);
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
  );
}

function Sphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const animate = () => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
    requestAnimationFrame(animate);
  };
  
  // Start animation
  requestAnimationFrame(animate);
  
  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial color="#0ea5e9" metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

function Torus() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const animate = () => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
    requestAnimationFrame(animate);
  };
  
  // Start animation
  requestAnimationFrame(animate);
  
  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial color="#8b5cf6" metalness={0.3} roughness={0.4} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border/80 shadow-lg">
      <div style={{ width: '100%', height: '100%', background: '#f8f9fa' }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Box />
        <Sphere />
        <Torus />
      </div>
    </div>
  );
}
