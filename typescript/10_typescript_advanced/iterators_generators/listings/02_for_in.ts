let pets = new Set(["Cat", "Dog", "Hamster"]); // ES 2015 or later needed
pets["species"] = "mammals";
for (let pet in pets) {
    console.log(pet); // "species"
}
for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}
