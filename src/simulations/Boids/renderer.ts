import { Particle } from "./types";

export function drawParticle(ctx: CanvasRenderingContext2D, particle: Particle) {
  ctx.beginPath();

  ctx.arc(
    particle.Position.x,
    particle.Position.y,
    particle.radius,
    0,
    Math.PI * 2
  );

  ctx.fillStyle = "white";
  ctx.fill();
}