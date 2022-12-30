let variables = ["cherry", "bar", "bar2", "bar3", "seven"];
 let x = Math.floor(Math.random() * 5);
 let y = Math.floor(Math.random() * 5);
 let z = Math.floor(Math.random() * 5);



// function display1() {
//     x =  Math.floor(Math.random() * 6)
//     return x
// }

// function display2() {
//     y = Math.floor(Math.random() * 6)
//     return y

// }

// function display3() {
//     z = Math.floor(Math.random() * 6)
//     return z

// }

console.log(z)
console.log(y)
console.log(x)


function winCondition() {
    if(( x === 0 && y === 0 && z ===0) || (x===1 && y === 1 && z ===1) || (x===2 && y === 2 && z ===2) || (x===3 && y ===3 && z=== 3) || (x ===4 && y===4 && z===4) ){
        alert("winner");
    } 
}





winCondition()

