function BMI(weight: number, height: number): number {
    return(weight / (height * height));
}

let bmiResult = BMI(57, 1.73736);
console.log(bmiResult);
