function calculateMass(array) {
    let totalMass = 0

    if (array.length === 0) {
        return totalMass
    } else {
        return array.reduce((total, current) => total + current).length
    }
}

const mass = calculateMass([]);
console.log('Total mass of items is ' + mass);