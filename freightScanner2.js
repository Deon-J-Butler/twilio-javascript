function scan (_anArray) {
    let outputArray = []
    _anArray.forEach((item, index) => {
      if (item === 'contraband') {
          outputArray.push(index)
      }
    })
    return outputArray
}