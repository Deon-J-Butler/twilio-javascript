class Ducktypium {
    constructor(crystalColor) {

        switch (crystalColor) {
            case 'blue':
                this.color = crystalColor
                break
            case 'red':
                this.color = crystalColor
                break
            case 'yellow':
                this.color = crystalColor
                break
            default:
                throw new Error('Invalid')
        }
        this.calibrationSequence = []
    }

    refract(color) {
        switch (color) {
            case 'blue':
                switch (this.color) {
                    case 'blue':
                        return 'blue'
                    case 'red':
                        return 'purple'
                    case 'yellow':
                        return 'green'
                    default:
                        throw new Error('Invalid')}
            case 'red':
                switch (this.color) {
                    case 'blue':
                        return 'purple'
                    case 'red':
                        return 'red'
                    case 'yellow':
                        return 'orange'
                    default:
                        throw new Error('Invalid')}
            case 'yellow':
                switch (this.color) {
                    case 'blue':
                        return 'green'
                    case 'red':
                        return 'orange'
                    case 'yellow':
                        return 'yellow'
                    default:
                        throw new Error('Invalid')}
            default:
                throw new Error('Invalid')
        }
    }

    calibrate(array) {
        this.array = array
        this.array.sort()
        this.array.forEach(nums => nums * 3)
        this.calibrationSequence = this.array
    }
}