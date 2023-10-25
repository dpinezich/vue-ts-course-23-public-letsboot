let x: "hello" = "hello" // Literal assignment, x needs to be hello
// x = "test" // nok


function printDish(name: string, type: "healthy" | "unhealthy") {
    console.log(name + " is a " + type + " dish!");
}

printDish("Chicken Nuggets", "unhealthy") // ok
printDish("Salad", "healthy") // ok
// printDish("Steak", "good") // nok


function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

console.log(compare("test", "TeSt"));
console.log(compare("holidays", "work"));
