// Base class
class Block {
    name = "";
    length = 0;
    breadth = 0;
    height = 0;
    constructor(name: string, length: number, breadth: number, height: number, ) {
        this.name = name;
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }
}

// To be mixed classes
class Moulder {
    moulding = true;
    mould() {
        this.moulding = false;
    }
    unmould() {
        this.moulding = true;
    }
}
class Stacker {
    stacking = true;
    stack() {
        this.stacking = false;
    }
    unstack() {
        this.stacking = true;
    }
}

// interface
interface Block extends Moulder, Stacker {}

// Spot the declaration merging of Block and the Block-interface

// mixin application
function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
}

// Apply it
applyMixins(Block, [Moulder, Stacker]);


// Go!
let cube = new Block("cube", 4, 4, 4);
cube.mould();
console.log(cube.length, cube.breadth, cube.height, cube.name, cube.moulding, cube.stacking);
cube.stack();
console.log(cube.length, cube.breadth, cube.height, cube.name, cube.moulding, cube.stacking);
cube.unstack();
cube.unmould();
console.log(cube.length, cube.breadth, cube.height, cube.name, cube.moulding, cube.stacking);
cube.mould();
console.log(cube.length, cube.breadth, cube.height, cube.name, cube.moulding, cube.stacking);

