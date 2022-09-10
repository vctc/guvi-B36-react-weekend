import React, { useEffect, useState } from "react";
import Child1 from "./Child1";

const Child = (props) => {
  const { student, users } = props;

  const [count, setCount] = useState(0);
  // console.log('props',props);

  // did mount initial render / creation
  useEffect(() => {
    console.log("componennt mounts / injected into dom");
  }, []);

  //destroy
  useEffect(() => {
    return () => {
      console.log("component unmount / destry lifecycle");
    };
  }, []);

  //did update count state
  useEffect(() => {
    console.log("count", count);
  }, [count]);

  return (
    <>
      {student && <h1>Child name is {student.name}</h1>}

      {/* <h2>Array from user -  {users[1]}</h2> */}
      <h1>Child Mapping array</h1>
      {users &&
        users.map((user, index) => {
          // console.log('user',user);
          return <p key={index}>user name: {user.name}</p>;
        })}

      {student && <Child1 student={student} />}
    </>
  );
};

export { Child };
