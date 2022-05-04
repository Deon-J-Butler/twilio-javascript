let calculatePower = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] *=  2
    }
    return array.reduce((total, current) => total + current, 0)
}