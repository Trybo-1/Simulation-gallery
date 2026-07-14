import { Vector2 } from "@/lib/Vector";
import {Particle} from "./types";

export const particles: Particle[] = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    Position: new Vector2(Math.random() * 1000, Math.random() * 700),
    Velocity: new Vector2((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6),
    radius: 5,
  });
}

export function updateParticles() {
  for (const particle of particles) {
    particle.Position.add(particle.Velocity);

    if (
      particle.Position.x <= particle.radius ||
      particle.Position.x >= 1000 - particle.radius
    ) {
      particle.Velocity.x *= -1;
    }

    if (
      particle.Position.y <= particle.radius ||
      particle.Position.y >= 700 - particle.radius
    ) {
      particle.Velocity.y *= -1;
    }
  }
}