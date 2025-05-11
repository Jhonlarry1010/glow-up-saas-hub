
import { useRef, useEffect, useState } from "react";

export default function HeroScene() {
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate canvas loading
    const timer = setTimeout(() => {
      setCanvasLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border/20 shadow-lg">
      {!canvasLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">Cartwheel</div>
            <p className="text-muted-foreground">Loading 3D preview...</p>
          </div>
        </div>
      )}
      
      <div className="w-full h-full bg-transparent relative">
        <style>
          {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes reverse-spin-slow {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .animate-reverse-spin-slow {
            animation: reverse-spin-slow 15s linear infinite;
          }
          `}
        </style>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-spin-slow"></div>
            <div className="absolute inset-0 rounded-full border-4 border-secondary/30 animate-reverse-spin-slow" style={{borderRadius: '40%'}}></div>
            
            {/* Box */}
            <div 
              className="absolute w-12 h-12 bg-primary rounded-lg" 
              style={{
                left: 'calc(50% - 24px)',
                top: 'calc(50% - 70px)',
                transform: 'rotate(45deg)',
                animation: 'spin-slow 15s linear infinite'
              }}
            ></div>
            
            {/* Sphere */}
            <div 
              className="absolute w-12 h-12 bg-blue-500 rounded-full" 
              style={{
                left: 'calc(50% + 30px)',
                top: 'calc(50% - 6px)',
                animation: 'reverse-spin-slow 12s linear infinite'
              }}
            ></div>
            
            {/* Torus (simulated with a circle with border) */}
            <div 
              className="absolute w-14 h-14 rounded-full border-4 border-purple-500" 
              style={{
                left: 'calc(50% - 50px)',
                top: 'calc(50% - 6px)',
                transform: 'rotate(30deg)',
                animation: 'spin-slow 18s linear infinite'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
