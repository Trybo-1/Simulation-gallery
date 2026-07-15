import { Vector2 } from "@/lib/Vector";
import { Boid } from "../types";
import { getNeighbors } from "../neighbors";
import { settings } from "../settings";

export function align(boid: Boid) {
    const neighbors = getNeighbors(boid);

    if (neighbors.length === 0) return;

    const average = new Vector2();

    for (const neighbor of neighbors) {
        average.add(neighbor.Velocity);
    }

    average.divide(neighbors.length);
    average.normalize();
    average.multiply(settings.MAX_SPEED);

    boid.Velocity.x += (average.x - boid.Velocity.x) * 0.05;
    boid.Velocity.y += (average.y - boid.Velocity.y) * 0.05;
}