const dishes = ["Steak", "Burger", "Salad"];

// Contextual typing
dishes.forEach(function (s) { // see also the inferred type
    console.log(s.toUppercase)
})

// Contextual typing
dishes.forEach((s) => { // see also the inferred type
    console.log(s.toUppercase)
})
