class Moulder {
    moulding = true;
    mould() {
        this.moulding = false;
    }
}
class Stacker {
    stacking = true;
    stack() {
        this.stacking = false;
    }
}
class Block extends Moulder, Stacker{
    constructor() {
        super()
    }
}
