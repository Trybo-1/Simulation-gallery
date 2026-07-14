"use client";

import { useEffect, useRef } from "react";
import {drawParticle} from "@/simulations/boids/renderer";
import { particles, updateParticles } from "@/simulations/boids/engine";

export default function SimulationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const animate = () => {
        updateParticles();

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const particle of particles) {
          drawParticle(ctx, particle);
        }

        requestAnimationFrame(animate);
    };

    animate();
}, []);

  return (
    <canvas
      ref={canvasRef}
      width={1000}
      height={700}
      className="bg-black rounded-xl border border-neutral-700"
    />
  );
}