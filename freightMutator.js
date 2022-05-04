function mutate(array) {
    let newArray = []
    for (const element of array) {
        let mutatedElement = element.toUpperCase()
        newArray.push(mutatedElement)
    }
    return newArray
}