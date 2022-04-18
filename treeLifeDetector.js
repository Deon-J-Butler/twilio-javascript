let userInput = process.argv
userInput.splice(0,2)

if (userInput == 0) {
    console.log('alive')
} else {
    console.log('other')
}