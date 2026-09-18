// Solution: Design Parking System
// Runtime: 17 ms | Memory: 66 MB

class ParkingSystem {
    private slots: number[];

    constructor(big: number, medium: number, small: number) {
        this.slots = [0, big, medium, small]
    }

    addCar(carType: number): boolean {
        if(this.slots[carType] > 0){
            this.slots[carType]--
            return true
        }
        return false
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */