import { useState } from "react";

const Card = () => {
//   let myName = "Maheen ZUhra";

// function setMyName() {
//   console.log(myName);
//   myName = "Abdul Rehman";
  


// }
const [first, setfirst] = useState("Maheen")
const [salary, setAnother] = useState(1000)

  return (
    <>
      <h1>{first}</h1>
      <h1>{salary}</h1>
      <button onClick={() =>{ setfirst("Hareem") , setAnother(200000)}}>Click</button>
    </>
  );
};

export default Card;
