function dangerZone(x?: number | null) { // x can be given or not
    console.log(x!.toFixed()); // the ! is special => x needs to be not null and not undefined
}

dangerZone(200.242);
dangerZone();
dangerZone(null);
