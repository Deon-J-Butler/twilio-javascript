let userInput = process.argv

let argument1 = userInput[2].toLowerCase()
let argument2 = userInput[3].toLowerCase()

if (argument1 > argument2) {
    console.log(1)
} else if (argument1 < argument2) {
    console.log(-1)
} else {
    console.log(0)
}

