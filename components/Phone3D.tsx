"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
 RoundedBox,
  Environment,
} from "@react-three/drei";
import { Suspense } from "react";

function CameraLens({ x, y }: { x: number; y: number }) {
  return (
    <group position={[x, y, 0.11]}>
      <mesh>
        <cylinderGeometry args={[0.12, 0.12, 0.03, 32]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={1}
          roughness={0.15}
        />
      </mesh>

      <mesh position={[0, 0, 0.018]}>
        <circleGeometry args={[0.075, 32]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>

      <mesh position={[0, 0, 0.02]}>
        <circleGeometry args={[0.03, 32]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#2563eb"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}

function PhoneButtons() {
  return (
    <>
      {/* Power */}
      <mesh position={[1.13, 0.2, 0]}>
        <boxGeometry args={[0.04, 0.55, 0.08]} />
        <meshStandardMaterial color="#555" metalness={1} roughness={0.2} />
      </mesh>

      {/* Volume */}
      <mesh position={[-1.13, 0.75, 0]}>
        <boxGeometry args={[0.04, 0.35, 0.08]} />
        <meshStandardMaterial color="#555" metalness={1} roughness={0.2} />
      </mesh>

      <mesh position={[-1.13, 0.25, 0]}>
        <boxGeometry args={[0.04, 0.35, 0.08]} />
        <meshStandardMaterial color="#555" metalness={1} roughness={0.2} />
      </mesh>
    </>
  );
}

function PhoneModel() {
  return (
    <Float
      speed={2}
      rotationIntensity={1.3}
      floatIntensity={1.6}
      floatingRange={[-0.35, 0.35]}
    >
      <group rotation={[0.2, -0.45, 0]}>
        {/* Metal Frame */}
        <RoundedBox
          args={[2.24, 4.34, 0.18]}
          radius={0.15}
          smoothness={8}
        >
          <meshStandardMaterial
            color="#444"
            metalness={1}
            roughness={0.15}
          />
        </RoundedBox>

        {/* Phone Body */}
        <RoundedBox
          args={[2.15, 4.25, 0.14]}
          radius={0.14}
          smoothness={8}
        >
          <meshStandardMaterial
            color="#111111"
            metalness={0.8}
            roughness={0.25}
          />
        </RoundedBox>

        {/* Screen */}
        <mesh position={[0, 0, 0.081]}>
          <planeGeometry args={[1.92, 3.95]} />
          <meshStandardMaterial
            color="#080808"
            emissive="#111111"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Top Card */}
        <mesh position={[0, 1.25, 0.082]}>
          <planeGeometry args={[1.6, 0.45]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#7c3aed"
            emissiveIntensity={0.7}
          />
        </mesh>

        {/* Middle */}
        <mesh position={[0, 0.4, 0.082]}>
          <planeGeometry args={[1.55, 0.9]} />
          <meshStandardMaterial
            color="#2563eb"
            emissive="#1d4ed8"
            emissiveIntensity={0.7}
          />
        </mesh>

        {/* Pink Card */}
        <mesh position={[0, -0.65, 0.082]}>
          <planeGeometry args={[1.55, 0.95]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#db2777"
            emissiveIntensity={0.7}
          />
        </mesh>

        {/* Bottom */}
        <mesh position={[0, -1.6, 0.082]}>
          <planeGeometry args={[1.55, 0.42]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Dynamic Island */}
        <mesh position={[0, 1.82, 0.09]}>
          <RoundedBox args={[0.48, 0.12, 0.02]} radius={0.06}>
            <meshStandardMaterial color="black" />
          </RoundedBox>
        </mesh>

        {/* Rear Camera Bump */}
        <RoundedBox
          args={[0.82, 0.82, 0.08]}
          radius={0.12}
          smoothness={6}
          position={[-0.55, 1.45, -0.09]}
        >
          <meshStandardMaterial
            color="#202020"
            metalness={0.9}
            roughness={0.25}
          />
        </RoundedBox>

        {/* Cameras */}
        <CameraLens x={-0.75} y={1.65} />
        <CameraLens x={-0.35} y={1.65} />
        <CameraLens x={-0.55} y={1.28} />

        {/* Flash */}
        <mesh position={[-0.28, 1.28, 0.11]}>
          <sphereGeometry args={[0.05, 24, 24]} />
          <meshStandardMaterial
            color="#fff9c4"
            emissive="#fff9c4"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Microphone */}
        <mesh position={[-0.82, 1.28, 0.11]}>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshStandardMaterial color="#555" />
        </mesh>

        <PhoneButtons />
      </group>
    </Float>
  );
}

export default function Phone3D() {
  return (
    <div className="h-[700px] w-full max-w-[520px]">
      <Canvas
        shadows
        camera={{
          position: [0, 0, 7],
          fov: 32,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.8} />

          <directionalLight
            position={[5, 6, 5]}
            intensity={2.5}
            castShadow
          />

          <pointLight
            position={[-4, -3, 5]}
            intensity={1.4}
          />

          <spotLight
            position={[0, 6, 5]}
            intensity={2}
            angle={0.35}
            penumbra={1}
          />

          <Environment preset="city" />

          <PhoneModel />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.8}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}