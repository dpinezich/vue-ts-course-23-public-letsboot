function color<Type>(arg: Type): Type {
    return arg;
}

let myColor: <Type>(arg: Type) => Type = color;

console.log(myColor("green"));
console.log(myColor(0xFFFFFF));
