"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type NeuralFieldProps = {
  count?: number;
};

function NeuralField({ count = 900 }: NeuralFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 1.6 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      array[i * 3 + 2] = radius * Math.cos(phi);
    }
    return array;
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#7dd3fc"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export function NeuralScene() {
  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/60">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <NeuralField />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.2),transparent_60%)]" />
    </div>
  );
}
