/*
    CIT 281 Lab 7
    Name: Zoe Turnbull
*/

/* CUSTOM CLASS */

class CustomError extends Error {
    // td
    constructor(errorMessage) {
        super(errorMessage);
        this.name = "CustomError";
    }
}

function throwGenericError() {
    // Uses throw to create a generic Error error
    throw Error("Generic error");
}

function throwCustomError() {
    //  Uses throw to create a custom CustomError error
    throw new CustomError("Custom error");
}

try {
    console.log("Force generic error");
    console.log("Generic error try block");
    console.log(throwGenericError());
} catch(err) {
    console.log("Generic error catch block");
    console.log(err.name + ": " + err.message);
} finally {
    console.log("Generic error finally block");
}

try {
    console.log("Force custom error");
    console.log("Custom error try block");
    console.log(throwCustomError());
} catch(err) {
    console.log("Custom error catch block");
    console.log(err.name + ": " + err.message);
} finally {
    console.log("Custom error finally block");
}