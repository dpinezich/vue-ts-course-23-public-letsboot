type Dish = { // type creates the alias for this object
    kcal: number;
    name: string;
}


function printDish(dish: Dish) {
    console.log("The name of the dish is: " + dish.name);
    console.log(dish.name + " has " + dish.kcal + " kcal's");
}

printDish({name: "Spaghetti", kcal: 400})
