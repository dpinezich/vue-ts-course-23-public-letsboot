const myAge: number = 33;
const myFavoriteColor: string = 'green';
const carDriver: boolean = true;

function getMyAge(age: number): number {
    return age;
}

function getMyFavoriteColor(color: string): string {
    return color;
}


function isCarDriver(driver: boolean): boolean {
    return driver;
}

console.log(getMyAge(myAge));
console.log(getMyFavoriteColor(myFavoriteColor));
console.log(isCarDriver(carDriver));
