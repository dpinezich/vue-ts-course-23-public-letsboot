const greet_6 = (person: string, date: Date) => {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// Careful, Date() would return a string
greet_6("David", new Date());
