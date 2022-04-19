function getFirstAmountSorted(userArray, number){
    userArray.sort();
    userArray.splice(number, userArray.length);
    return userArray;
}




