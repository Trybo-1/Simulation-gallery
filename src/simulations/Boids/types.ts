import { Vector2 } from "@/lib/Vector";

export interface Boid {
  Position: Vector2;
  Velocity: Vector2;

  radius: number;

  visionRadius: number;
}