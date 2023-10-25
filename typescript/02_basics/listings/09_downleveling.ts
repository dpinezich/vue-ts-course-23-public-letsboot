/*
 tsc 09_downleveling.ts ==> ES3
 tsc 09_downleveling.ts --target es2015
 alternative: tsc --project tsconfig.json
*/

const greet_8 = (person: string, date: Date) => {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet_8("David", new Date());
