type Dish = {
    kcal: number | string;
    name: string;
}


function printMyFavoriteFood(dish: Dish) {
    console.log("The name of my favorite dish is: " + dish.name);
    console.log(dish.name + " has " + dish.kcal + " kcal's");
}

printMyFavoriteFood({name: "Spaghetti", kcal: 400})
printMyFavoriteFood({name: "Burgers", kcal: "Many!"})
