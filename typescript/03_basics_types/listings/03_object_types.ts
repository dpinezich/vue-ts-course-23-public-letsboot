// Remove the "number" from x or y, the type will be any and not inferred

function printCoord(pt: { x: number, y: number}): void {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({x : 10, y: 14})
