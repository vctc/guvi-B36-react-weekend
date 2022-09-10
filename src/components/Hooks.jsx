import React, { useEffect, useState } from "react";
import { Child } from "./Child";
import LoaderIcon from "./LoaderIcon";

// useState, useEffect

const Hooks = (props) => {
  const { updateCounter } = props;
  let value = 6;
  //syntax
  const [count, setCount] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [showChild, setShowChild] = useState(true);

  //component didmount
  useEffect(() => {
    //  console.log('component did mount')
    setTimeout(() => {
      setIsLoading(false);
      console.log("empty");
    }, 3000);
  }, []);

  useEffect(() => {
    console.log("useeffect running on count update", count);
    updateCounter(count);
  }, [count]);
  useEffect(() => {
    console.log("useeffect running on count update", count);
  }, [isLoading]);

  const handleClick = () => {
    // value = value +1
    // console.log('value',value)
    setCount((count) => {
      console.log("count before", count + 1);
      return count + 1;
    });

    console.log("handleclick", count);
  };
  const student = {
    name: "vicky",
  };
  const showHide = () => {
    setShowChild(!showChild);
  };
  return (
    <>
      {/* {console.log('component mounts')} */}
      {isLoading ? (
        <LoaderIcon />
      ) : (
        <>
          <div>Count = {count}</div>
          <button onClick={handleClick}>+</button>
          <br />
          <br />
          <button onClick={showHide}>{showChild ? "Hide" : "Show"}</button>

          {showChild && <Child student={student}></Child>}
        </>
      )}
    </>
  );
};

export default Hooks;
