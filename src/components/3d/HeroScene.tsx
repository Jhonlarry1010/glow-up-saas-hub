
import { useRef, useEffect, useState } from "react";

function AnimatedBox() {
  const boxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!boxRef.current) return;
    
    let animationFrameId: number;
    let rotation = 0;
    
    const animate = () => {
      rotation += 2;
      if (boxRef.current) {
        boxRef.current.style.transform = `rotateY(${rotation}deg) rotateX(${rotation / 2}deg)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div 
      ref={boxRef} 
      className="w-16 h-16 bg-primary/90 rounded-lg shadow-lg"
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease' }}
    />
  );
}

function AnimatedSphere() {
  const sphereRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sphereRef.current) return;
    
    let animationFrameId: number;
    let rotation = 45;
    
    const animate = () => {
      rotation += 1.5;
      if (sphereRef.current) {
        sphereRef.current.style.transform = `rotateZ(${rotation}deg) rotateX(${rotation / 3}deg)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div 
      ref={sphereRef} 
      className="w-14 h-14 bg-cyan-500/90 rounded-full shadow-lg"
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease' }}
    />
  );
}

function AnimatedTorus() {
  const torusRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!torusRef.current) return;
    
    let animationFrameId: number;
    let rotation = 90;
    
    const animate = () => {
      rotation += 1.8;
      if (torusRef.current) {
        torusRef.current.style.transform = `rotateY(${rotation}deg) rotateZ(${rotation / 4}deg)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div 
        ref={torusRef} 
        className="absolute w-16 h-16 bg-transparent border-4 border-purple-500 rounded-full shadow-lg"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease' }}
      >
        <div className="absolute inset-0 bg-transparent border-4 border-purple-500 rounded-full transform rotate-45"></div>
      </div>
    </div>
  );
}

export default function HeroScene() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border/20 shadow-lg relative">
      {/* Fallback shown until loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">SaaSHub</div>
            <p className="text-muted-foreground">Loading 3D preview...</p>
          </div>
        </div>
      )}
      
      {/* CSS-based 3D scene */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/95 flex items-center justify-center perspective-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ perspective: '1000px', transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Orbit effect */}
          <div className="absolute w-64 h-64 animate-spin-slow flex items-center justify-center">
            <div className="absolute left-0">
              <AnimatedSphere />
            </div>
          </div>
          
          <div className="absolute w-80 h-80 animate-reverse-spin-slow flex items-center justify-center">
            <div className="absolute right-0">
              <AnimatedTorus />
            </div>
          </div>
          
          <AnimatedBox />
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
