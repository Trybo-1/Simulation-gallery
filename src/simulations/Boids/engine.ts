import { Vector2 } from "@/lib/Vector";
import {Boid} from "./types";
import { align } from "./behaviours/alignment";
import { settings } from "./settings";
import { cohesion } from "./behaviours/cohesion";
import { separation } from "./behaviours/seperation";


export const boids: Boid[] = [];

for (let i = 0; i < settings.BOID_COUNT; i++) {
  boids.push({
    Position: new Vector2(Math.random() * settings.WIDTH, Math.random() * settings.HEIGHT),
    Velocity: new Vector2((Math.random() - 0.5) * settings.MAX_SPEED, (Math.random() - 0.5) * settings.MAX_SPEED),
    radius: settings.BOID_RADIUS,
    visionRadius: settings.VISION_RADIUS,
  });
}

export function updateBoids() {
  for (const boid of boids) {

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

    align(boid);
    cohesion(boid);
    separation(boid);
    boid.Position.add(boid.Velocity);
  }
}
