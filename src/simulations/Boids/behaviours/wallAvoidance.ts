import { Boid } from "../types";
import { settings } from "../settings";

export function wallAvoidance(boid: Boid) {

    const margin = settings.WALL_MARGIN;
    const maxTurn = settings.WALL_TURN_FORCE;

    //Left
    if (boid.Position.x < margin && boid.Velocity.x < 0) {

        const strength = Math.pow((margin - boid.Position.x) / margin, 2 );

        const turn = maxTurn * strength;

        if (boid.Velocity.y < 0)
            boid.Velocity.rotate(turn);
        else
            boid.Velocity.rotate(-turn);
    }

    //Right
    if (
        boid.Position.x > settings.WIDTH - margin && boid.Velocity.x > 0
    ) {

        const strength = Math.pow((margin - boid.Position.x) / margin, 2 );

        const turn = maxTurn * strength;

        if (boid.Velocity.y < 0)
            boid.Velocity.rotate(-turn);
        else
            boid.Velocity.rotate(turn);
    }

    //Top
    if (boid.Position.y < margin && boid.Velocity.y < 0) {

        const strength = Math.pow((margin - boid.Position.y) / margin, 2);

        const turn = maxTurn * strength;

        if (boid.Velocity.x < 0)
            boid.Velocity.rotate(-turn);
        else
            boid.Velocity.rotate(turn);
    }
    
    //Bottom
    if (
        boid.Position.y > settings.HEIGHT - margin &&
        boid.Velocity.y > 0
    ) {

         const strength = Math.pow((margin - boid.Position.x) / margin, 2 );

        const turn = maxTurn * strength;

        if (boid.Velocity.x < 0)
            boid.Velocity.rotate(turn);
        else
            boid.Velocity.rotate(-turn);
    }

    boid.Velocity.limit(settings.MAX_SPEED);
}