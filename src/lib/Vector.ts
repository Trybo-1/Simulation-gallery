export class Vector2 {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    add(v: Vector2) {
        this.x += v.x;
        this.y += v.y;
    }

    multiply(value: number) {
        this.x *= value;
        this.y *= value;
    }

    divide(value: number) {
        if (value === 0) return;   

        this.x /= value;
        this.y /= value;
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        const mag = this.magnitude();

        if (mag === 0) return;

        this.x /= mag;
        this.y /= mag;
    }

    limit(max: number) {
        const mag = this.magnitude();

        if (mag > max) {
            this.normalize();
            this.multiply(max);
        }
    }

    copy() {
        return new Vector2(this.x, this.y);
    }

    distance(other: Vector2): number {
        const dx = this.x - other.x;
        const dy = this.y - other.y;

        return Math.sqrt(dx * dx + dy * dy);
    }
}