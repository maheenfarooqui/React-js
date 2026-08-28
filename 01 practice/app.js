import {add} from "./math.js"


const user ={
    name : "Sara",
    city: "Karachi",
    age:20

}
// destructre

const {name , age} = user;
console.log(name);

// aerrow funtion
function greeet(){
    return "hi"
}

const greet = () => "hiiii"

console.log(greeet(), greet());


// object

// worker={
//     name: "Ali",
//     role: "devops"
// }

// module

console.log(add(2,4));






