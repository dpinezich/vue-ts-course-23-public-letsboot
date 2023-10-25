function doSomething(x: string | null) {
    if (x === null) {
        // do nothing
    } else {
        console.log("Hello " + x.toLowerCase());
    }
}

doSomething("DaViD")
doSomething(null)
