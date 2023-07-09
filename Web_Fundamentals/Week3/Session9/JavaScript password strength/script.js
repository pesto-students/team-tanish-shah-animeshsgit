// Your solution goes here 

function isStrongPassword(password) {
    if (eightChar(password) && notContain(password) && hasUppercase(password)) {
        console.log("True");
        return true;
    }
    else
        return false;
}

//To check eight characters
function eightChar(password) {
    let statement;

    if (password.length >= 8) {
        statement = true;
    }
    else {
        statement = false;
        console.log("Too short")
    }
    return statement;
}

//To check it does not contain keyword password
function notContain(password) {
    let statement;

    if (!password.includes("password")) {
        statement = true;
    }
    else {
        statement = false;
        console.log("Contains password")
    }
    return statement;
}

//To check it has atleast 1 uppercase
function hasUppercase(password) {
    var i = 0;
    var character = '';
    while (i < password.length) {
        character = password.charAt(i);
        if (!parseInt(character)) {
            if (character == character.toUpperCase()) {
                return true;
            }
        }
        i++;
    }
    console.log("No uppercase characters")
    return false
}


//DEMO USECASE
isStrongPassword("Qwerty"); // false - Too short
isStrongPassword("passwordQwerty") // false - Contains "password"
isStrongPassword("qwerty123") // false - No uppercase characters
isStrongPassword("Qwerty123") // true