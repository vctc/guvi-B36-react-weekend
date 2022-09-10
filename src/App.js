import logo from "./logo.svg";
import "./App.css";
import { Child } from "./components/Child";
import Hooks from "./components/Hooks";
import React from "react";

// const name = "guvi";
// const student = {
//   name: "vicky",
// };
// // const users = ["vicky", "Raju", "Arjun"];
// const users = [
//   {
//     id: 1,
//     name: "vicky",
//   },
//   {
//     id: 2,
//     name: "Raju",
//   },
// ];
function App() {
  const [counter, setCounter] = React.useState(0);
  const update = (count) => {
    setCounter(count);
  };
  return (
    <>
      <h1>Hooks</h1>

      {<h1>Value of count is : {counter}</h1>}
      <Hooks updateCounter={update} />
    </>
  );
}

export default App;
