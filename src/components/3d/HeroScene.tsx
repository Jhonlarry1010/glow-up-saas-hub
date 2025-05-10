
import { useState, useEffect } from 'react';

export default function HeroScene() {
  const [canvasLoaded, setCanvasLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setCanvasLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border/20 shadow-lg relative">
      {!canvasLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">Cartwheel</div>
            <p className="text-muted-foreground">Loading 3D preview...</p>
          </div>
        </div>
      )}
      
      <div className={`w-full h-full flex items-center justify-center perspective-1000 ${canvasLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <div className="relative">
          {/* Box */}
          <div className="absolute left-0 top-0 w-32 h-32 animate-spin-slow">
            <div className="w-full h-full transform-style-3d">
              <div className="absolute inset-0 bg-primary/80 transform translate-z-16"></div>
              <div className="absolute inset-0 bg-primary/90 transform -translate-z-16"></div>
              <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-primary/70 transform rotate-y-90 translate-z-16"></div>
              <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-primary/70 transform -rotate-y-90 -translate-z-16"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-primary/80 transform rotate-x-90 translate-z-16"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-primary/80 transform -rotate-x-90 -translate-z-16"></div>
            </div>
          </div>
          
          {/* Sphere */}
          <div className="absolute -right-16 top-8 w-24 h-24 animate-reverse-spin-slow">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary/80 to-secondary/40 shadow-lg"></div>
          </div>
          
          {/* Torus */}
          <div className="absolute -left-20 bottom-0 w-32 h-32 animate-spin-slow">
            <div className="w-full h-full rounded-full border-8 border-secondary/80 transform rotate-45"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .transform {
          transform: translateZ(0);
        }
        
        .translate-z-16 {
          transform: translateZ(16px);
        }
        
        .-translate-z-16 {
          transform: translateZ(-16px);
        }
        
        .rotate-y-90 {
          transform: rotateY(90deg);
        }
        
        .-rotate-y-90 {
          transform: rotateY(-90deg);
        }
        
        .rotate-x-90 {
          transform: rotateX(90deg);
        }
        
        .-rotate-x-90 {
          transform: rotateX(-90deg);
        }
      `}</style>
    </div>
  );
}
