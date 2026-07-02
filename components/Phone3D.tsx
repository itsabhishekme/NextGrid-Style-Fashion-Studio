"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, RoundedBox } from "@react-three/drei";
import { Suspense } from "react";

function PhoneModel() {
  return (
    <Float
      speed={2}
      rotationIntensity={1.2}
      floatIntensity={1.5}
      floatingRange={[-0.3, 0.3]}
    >
      <group rotation={[0.2, -0.4, 0]}>
        {/* Phone Body */}
        <RoundedBox
          args={[2.2, 4.3, 0.15]}
          radius={0.12}
          smoothness={8}
        >
          <meshStandardMaterial
            color="#111111"
            metalness={0.9}
            roughness={0.2}
          />
        </RoundedBox>

        {/* Screen */}
        <mesh position={[0, 0, 0.081]}>
          <planeGeometry args={[1.95, 4]} />
          <meshStandardMaterial color="#0b0b0b" />
        </mesh>

        {/* Gradient UI */}
        <mesh position={[0, 1.2, 0.082]}>
          <planeGeometry args={[1.6, 0.45]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>

        <mesh position={[0, 0.45, 0.082]}>
          <planeGeometry args={[1.55, 0.8]} />
          <meshStandardMaterial color="#2563eb" />
        </mesh>

        <mesh position={[0, -0.55, 0.082]}>
          <planeGeometry args={[1.55, 0.9]} />
          <meshStandardMaterial color="#ec4899" />
        </mesh>

        <mesh position={[0, -1.55, 0.082]}>
          <planeGeometry args={[1.55, 0.45]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Camera */}
        <mesh position={[0, 1.88, 0.09]}>
          <circleGeometry args={[0.06, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* Speaker */}
        <mesh position={[0, 1.73, 0.09]}>
          <boxGeometry args={[0.35, 0.04, 0.02]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      </group>
    </Float>
  );
}

export default function Phone3D() {
  return (
    <div className="h-[650px] w-full max-w-[500px]">
      <Canvas camera={{ position: [0, 0, 7], fov: 35 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={2} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={2}
          />

          <pointLight
            position={[-5, -5, 5]}
            intensity={1.5}
          />

          <PhoneModel />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}