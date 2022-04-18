let userInput = process.argv
userInput.splice(0,2)

if (userInput % 3 === 0 && userInput % 5 === 0) {
    console.log('JavaScript')
} else if (userInput % 5 === 0) {
    console.log('Script')
} else if (userInput % 3 === 0) {
    console.log('Java')
} else {
    console.log(Number(userInput))
}
