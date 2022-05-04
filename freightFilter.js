function scanAndFilter(array, string) {
    array.forEach((item, index) => {
        if (item === string) {
            array.splice(index, 1)
        }
    })
    return array
}