import { Vector2 } from "@/lib/Vector";
import {Boid} from "./types";

export const boids: Boid[] = [];

for (let i = 0; i < 100; i++) {
  boids.push({
    Position: new Vector2(Math.random() * 1000, Math.random() * 700),
    Velocity: new Vector2((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6),
    radius: 5,
    visionRadius: 80,
  });
}

export function updateBoids() {
  for (const boid of boids) {
    boid.Position.add(boid.Velocity);

    if (
      boid.Position.x <= boid.radius ||
      boid.Position.x >= 1000 - boid.radius
    ) {
      boid.Velocity.x *= -1;
    }

    if (
      boid.Position.y <= boid.radius ||
      boid.Position.y >= 700 - boid.radius
    ) {
      boid.Velocity.y *= -1;
    }
  }
}

export function getNeighbors(current: Boid): Boid[] {
  const neighbors: Boid[] = [];

  for (const other of boids) {
    if (other === current) continue;

    const distance = current.Position.distance(other.Position);

    if (distance <= current.visionRadius) {
      neighbors.push(other);
    }
  }

  return neighbors;
}