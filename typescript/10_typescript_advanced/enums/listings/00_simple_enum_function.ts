enum UserResponse {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
    console.log("Does: " + `${recipient}` + " has answered: " + `${message}`)
}

respond("Princess Caroline", UserResponse.Yes);
