function printId(id: number | string) {
    console.log("Your ID is: " + id)
}

printId(101); // ok
printId("202"); // ok
// printId({myNewId: 232425}); // not ok
