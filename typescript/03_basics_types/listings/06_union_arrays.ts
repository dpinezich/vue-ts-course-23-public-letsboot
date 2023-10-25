function favoriteFood(food: string[] | string) {
    if (Array.isArray(food)) {
        // Here food is an array
        console.log("Wow, I like many dishes - for example " + food.join(" and "))
    } else {
        console.log("I only have one favorite food " + food)
    }
}


favoriteFood(["Steak", "Salad", "Tuna"]);
favoriteFood("Tacos")
