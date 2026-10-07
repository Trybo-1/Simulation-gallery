import { Vector2 } from "@/lib/Vector";
import { Boid } from "../types";
import { getNeighbors } from "../neighbors";
import { settings } from "../settings";

export function cohesion(boid: Boid) {
    const neighbors = getNeighbors(boid);

    if (neighbors.length === 0) return;

    const center = new Vector2();

    for (const neighbor of neighbors) {
        center.add(neighbor.Position);
    }

    center.divide(neighbors.length);
    center.subtract(boid.Position);
    center.normalize();
    center.multiply(settings.MAX_SPEED);

    boid.Velocity.x += (center.x - boid.Velocity.x) * settings.COHESION_WEIGHT;
    boid.Velocity.y += (center.y - boid.Velocity.y) * settings.COHESION_WEIGHT;
}