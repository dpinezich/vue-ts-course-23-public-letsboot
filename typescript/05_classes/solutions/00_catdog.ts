class Animal {
    move() {
        console.log("Moving along!");
    }
}

class Dog extends Animal {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}

class Cat extends Animal {
    hiss(times: number) {
        for (let i = 0; i < times; i++) {
            if (i % 2 === 0) {
                console.log("hiss!");
            }
        }
    }
}

console.log("Dog: ");
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
console.log("");


console.log("Cat: ");
const c = new Cat();
// Base class method
c.move();
// Derived class method
c.hiss(5);
