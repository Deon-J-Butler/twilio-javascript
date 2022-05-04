function scan (_anArray) {
    let count = 0
    const find = 'contraband'
    _anArray.forEach(item => {
        if (item === find) {
            count++
        }
    })
        return count
}