import { Boid } from "./types";
import { boids } from "./engine";

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