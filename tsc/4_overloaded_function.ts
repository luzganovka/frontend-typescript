type Point = {
    x: number;
    y: number;
};

function distance(x1: number, y1: number, x2: number, y2: number): number
function distance(p1: Point, p2: Point): number

function distance(p1Orx1: number | Point, p2Ory1: number | Point, x2?: number, y2?: number): number {
    if (typeof p1Orx1 === 'number' && typeof p2Ory1 === 'number' && typeof x2 === 'number' && typeof y2 === 'number') {
        return Math.sqrt((x2 - p1Orx1) ** 2 + (y2 - p2Ory1) ** 2);
    } else if (typeof p1Orx1 === 'object' && typeof p2Ory1 === 'object') {
        return Math.sqrt((p2Ory1.x - p1Orx1.x) ** 2 + (p2Ory1.y - p1Orx1.y) ** 2);
    }
    return -1;
}

console.log(distance(1, -1, 4, 3)) // 5
console.log(distance({x:1, y:-1}, {x:4, y:3})) //5