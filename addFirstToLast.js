function addFirstToLast(array_of_strings) {
    let firstString = array_of_strings[0]
    let lastString = array_of_strings.slice(-1)
    let firstLast = firstString + "" + lastString
    return firstLast
}