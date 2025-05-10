
import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Box(props) {
  const meshRef = useRef();
  
  useEffect(() => {
    if (!meshRef.current) return;
    
    let animationFrameId;
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0]} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
  );
}

function Sphere(props) {
  const meshRef = useRef();
  
  useEffect(() => {
    if (!meshRef.current) return;
    
    let animationFrameId;
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.z += 0.01;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <mesh ref={meshRef} position={[2, 0, 0]} {...props}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial color="#0ea5e9" metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

function Torus(props) {
  const meshRef = useRef();
  
  useEffect(() => {
    if (!meshRef.current) return;
    
    let animationFrameId;
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.z += 0.01;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <mesh ref={meshRef} position={[-2, 0, 0]} {...props}>
      <torusGeometry args={[0.8, 0.3, 16, 100]} />
      <meshStandardMaterial color="#8b5cf6" metalness={0.3} roughness={0.4} />
    </mesh>
  );
}

export default function HeroScene() {
  const [canvasLoaded, setCanvasLoaded] = useState(false);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border/20 shadow-lg">
      {/* Fallback shown until Canvas is loaded */}
      {!canvasLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">SaaSHub</div>
            <p className="text-muted-foreground">Loading 3D preview...</p>
          </div>
        </div>
      )}
      
      <Canvas
        onCreated={() => setCanvasLoaded(true)} 
        camera={{ position: [0, 0, 10], fov: 25 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Box />
        <Sphere />
        <Torus />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
