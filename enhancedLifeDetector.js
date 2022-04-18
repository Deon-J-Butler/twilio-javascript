let userInput = process.argv
userInput = Number(userInput[2])

if (userInput >= 3){
    console.log('other')
} else if (userInput === 2) {
    console.log('shedding')
} else if (userInput === 1) {
    console.log('flowering')
} else {
    console.log('alive')
}