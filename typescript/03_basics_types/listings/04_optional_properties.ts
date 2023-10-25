function printName(obj: { firstName: string, lastName: string, secondLastName?: string}): void {
    console.log("Hello " + obj.firstName + " " + obj.lastName + (obj.secondLastName ? " " + obj.secondLastName : "") );
}

printName({firstName : "Peter", lastName: "Peterson"});
printName({firstName : "Peter", lastName: "Peterson", secondLastName: "Wielding"});
