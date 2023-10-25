// Type A "as"
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement // note the "as"

// Type B "angle brackets"
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");
