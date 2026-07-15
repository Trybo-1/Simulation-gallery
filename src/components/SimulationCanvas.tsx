"use client";

import { useEffect, useRef } from "react";
import {drawBoid} from "@/simulations/boids/renderer";
import { boids, updateBoids } from "@/simulations/boids/engine";

export default function SimulationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const animate = () => {
        updateBoids();

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const boid of boids) {
          drawBoid(ctx, boid);
        }

        requestAnimationFrame(animate);
    };

    animate();
}, []);

  return (
    <canvas
      ref={canvasRef}
      width={1800}
      height={950}
      className="bg-black rounded-xl border border-neutral-700"
    />
  );
}