interface Animal {
    name: string
}

interface Pet extends Animal {
    tame: boolean
}

interface Dog extends Animal {
    color: string,
    age: number
}


function printMyDog(dog: Dog) {
    console.log(`My dog is called: '${dog.name}'.`);
}


printMyDog({name: "flipper", age: 5, color: "beige"})

