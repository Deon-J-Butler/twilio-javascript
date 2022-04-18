let userInput = process.argv
userInput.splice(0,2)

if (userInput[0] == 0 && userInput[1] > 10) {
    console.log('WATER')
}