/**
 * Let's make a game 🕹
 */
type Direction = "up" | "down" | "left" | "right";
const position = {x:0, y:0};
// type Coordinate = {
// 	x: number,
// 	y: number
// }
function move(direction: Direction){
    switch(direction){
        case "up" :
            position.y += 1;
            break;
        case "down" :
            position.y -= 1;
            break;
        case "left" :
            position.x -= 1;
            break;
        case "right" :
            position.x += 1;
            break;
        default:
            // compile 단계에서 알아차릴 수 있게 never를 사용.
            const invalid: never = direction;
            console.log(invalid);
            throw new Error(`unknown direction ${direction}`)
    }
}
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
