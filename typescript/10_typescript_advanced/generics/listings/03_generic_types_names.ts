function identity<Type>(arg: Type): Type {
    return arg;
}

let myIdentity: <Input>(arg: Input) => Input = identity;
