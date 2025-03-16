import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const ShoppingBag: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);
  const bodyBagTexture = useLoader(TextureLoader, 'src/assets/images/texture.jpg'); // Load the texture
  const handleBagTexture = useLoader(TextureLoader, 'src/assets/images/rope-texture.jpg'); // Load the texture


  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Rotate the shopping bag
    }
  });

  return (
    <group ref={meshRef} scale={[2, 2, 2]}>
      {/* Bag Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.5, 2, 0.5]} />
        <meshStandardMaterial color="#ba9275" /> 
        <meshStandardMaterial map={bodyBagTexture} /> 
      </mesh>

      {/* Bag Handle */}
      <mesh position={[0, 1, 0]} castShadow>
        <torusGeometry args={[0.3, 0.03, 16, 100]} />
        <meshStandardMaterial color="#caae9d" /> 
        <meshStandardMaterial map={handleBagTexture} />
      </mesh>

      {/* Bag Logo */}
      <mesh position={[0, 0, 0.26]} castShadow>
        <planeGeometry args={[0.8, 0.8]} />
        <meshStandardMaterial color="#FFFFFF" transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

const ThreeDComposition: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Canvas shadows className="w-full h-full">
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} />
        <ShoppingBag />
      </Canvas>
    </div>
  );
};

export default ThreeDComposition;