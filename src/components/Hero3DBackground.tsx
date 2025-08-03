import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Animated 3D sphere component
function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = clock.elapsedTime * 0.1;
      meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={window.innerWidth < 768 ? 1.8 : 2.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#008751"
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

// Floating particles component
function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particlesCount = 100;
  const positions = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#FFD700" size={0.05} transparent opacity={0.6} />
    </points>
  );
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

interface Hero3DBackgroundProps {
  className?: string;
}

const Hero3DBackground: React.FC<Hero3DBackgroundProps> = ({ className = "" }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`} style={{ opacity: 0.8 }}>
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ 
            position: [0, 0, 5], 
            fov: dimensions.width < 768 ? 85 : 75,
            aspect: dimensions.width / dimensions.height
          }}
          style={{ background: 'transparent' }}
          dpr={Math.min(window.devicePixelRatio, 2)}
          performance={{ min: 0.5 }}
          resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <pointLight position={[-10, -10, -5]} color="#FFD700" intensity={0.7} />
          
          <AnimatedSphere />
          <FloatingParticles />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Hero3DBackground;