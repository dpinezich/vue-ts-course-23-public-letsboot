// tsc 06_improved_greeter_fixed_es6_types.ts

const greet_5 = (person: string, date: Date) => {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet_5("David", "11th November");
