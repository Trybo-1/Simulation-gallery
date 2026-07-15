import { Vector2 } from "@/lib/Vector";
import {Boid} from "./types";
import { align } from "./behaviours/alignment";
import { settings } from "./settings";
import { cohesion } from "./behaviours/cohesion";
import { separation } from "./behaviours/seperation";
import { wallAvoidance } from "./behaviours/wallAvoidance";


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
    align(boid);
    cohesion(boid);
    separation(boid);
    wallAvoidance(boid);
    boid.Position.add(boid.Velocity);
  }
}
