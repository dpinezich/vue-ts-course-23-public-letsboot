function myIdentity<Type>(arg: Type): Type {
    return arg;
}

let output = myIdentity("myString");
