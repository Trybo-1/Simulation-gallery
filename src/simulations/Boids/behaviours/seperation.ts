import { Vector2 } from "@/lib/Vector";
import { Boid } from "../types";
import { getNeighbors } from "../neighbors";
import { settings } from "../settings";

export function separation(boid: Boid) {
    const neighbors = getNeighbors(boid);

    if (neighbors.length === 0) return;

    const steer = new Vector2();

    for (const neighbor of neighbors) {
      const distance = boid.Position.distance(neighbor.Position);

        if (distance > settings.SEPARATION_DISTANCE)
            continue;
            
        const push = boid.Position.copy();

        push.subtract(neighbor.Position);

        const strength = Math.pow((settings.SEPARATION_DISTANCE - distance) / settings.SEPARATION_DISTANCE, 2 );

        push.normalize();
        push.multiply(strength);

        steer.add(push);

    }

    steer.normalize();
    steer.multiply(settings.MAX_SPEED);

    boid.Velocity.x += (steer.x - boid.Velocity.x) * settings.SEPARATION_WEIGHT;
    boid.Velocity.y += (steer.y - boid.Velocity.y) * settings.SEPARATION_WEIGHT;
}