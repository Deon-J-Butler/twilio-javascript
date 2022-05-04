class TargetingSolution {
    constructor(obj) {
        this.obj = {
            x: obj.x,
            y: obj.y,
            z: obj.z
        }
    }
    target() {
        return `(${this.obj.x}, ${this.obj.y}, ${this.obj.z})`
    }
}