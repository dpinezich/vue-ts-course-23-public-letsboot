function padLeft_v2(padding: number | string, input: string) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input; // needs to be supported to your ES-Version
    }
    return padding + input;
}
