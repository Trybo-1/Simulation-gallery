import { Boid } from "./types";

export function drawBoid(ctx: CanvasRenderingContext2D, boid: Boid) {
  ctx.beginPath();

  ctx.arc(
    boid.Position.x,
    boid.Position.y,
    boid.radius,
    0,
    Math.PI * 2
  );

  ctx.fillStyle = "white";
  ctx.fill();
}