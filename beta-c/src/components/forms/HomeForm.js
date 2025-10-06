import React, { useCallback, useMemo, useState } from "react";
import mainStyles from "../../assets/css/Main.module.css";
function HomeForm() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  // const handelClick = useCallback(() => {
  //   setCount(count + 1);
  // }, [count2]);

  const expensiveValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, []);

  const handelClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div style={{ minHight: "80vh" }}>
      <div className={mainStyles.homePage}>
        <h1>Welcome to My website</h1>
        <p>
          This is a simple React application using Vite as the build tool. hi
        </p>

        {/* <form onSubmit={handelSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={contextState.name}
              onChange={(event) => {
                setContextState({ ...contextState, name: event.target.value });
              }}
            />
          </label>
          <br />
          <br />
          <label>
            Email:
            <input
              type="email"
              value={contextState.email}
              onChange={(event) => {
                setContextState({ ...contextState, email: event.target.value });
              }}
            />
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form> */}

        <p>value is: {expensiveValue}</p>

        <h2>{count}</h2>
        <button onClick={handelClick}>Click me</button>
      </div>
    </div>
  );
}

export default HomeForm;
