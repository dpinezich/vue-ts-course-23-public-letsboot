type Point = {
    x: number;
    y: number;
};
// Exactly the same as the earlier example
function printCoordAliased(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoordAliased({ x: 100, y: 100 });
