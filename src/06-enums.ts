// enums
// group of named constants

// typescript special features
// not in javascipt

const enum Direction {
    UP = 10, 
    DOWN = 20,
    LEFT = 30, 
    RIGHT,
}

// enum Direction {
//     UP = 10, 
//     DOWN = 20,
//     LEFT = 30, 
//     RIGHT,
// }

console.log(Direction.UP)

function getDirection(direction: Direction): void {
    if(direction === Direction.UP) {
        console.log("user is going up")
    } else if (direction === Direction.DOWN) {
        console.log("user is going down")
    } else if (direction === Direction.LEFT) {      
        console.log("user is going left")
    } else if (direction === Direction.RIGHT) {
        console.log("user is going right")
    } 
}

// getDirection(Direction.UP)

enum OrderStatus {
    DELIVERED= "DELIVERED",
    CANCELLED= "CANCELLED",
    RETURNED= "RETURNED",
    PENDING= "PENDING"
}

function generateMessageForUser(status: OrderStatus): void {
    if(status === OrderStatus.DELIVERED) {
        console.log("successfully Delivered")
    }
}

// generateMessageForUser(OrderStatus.DELIVERED);

console.log(Direction.UP)
console.log(Direction.DOWN)
console.dir(OrderStatus.DELIVERED)
console.log(OrderStatus.CANCELLED)
console.log(OrderStatus.RETURNED)