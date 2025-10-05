import React, { useReducer } from "react";
import mainStyles from "../assets/css/Main.module.css";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
// import HomeForm from "../components/forms/HomeForm";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

function Home() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <Navbar />
      {/* <HomeForm /> */}
      <div style={{ minHight: "80vh" }}>
        <div className={mainStyles.homePage}>
          <p
            style={{
              border: "1.8px solid gray",
              padding: "10px 15px",
              borderRadius: "5px",
            }}
          >
            {count}
          </p>
          <button
            onClick={() => {
              dispatch({ type: "increment" });
            }}
          >
            Increment
          </button>
          <br />
          <button
            onClick={() => {
              dispatch({ type: "decrement" });
            }}
          >
            Decrement
          </button>
          <br />
          <button
            onClick={() => {
              dispatch({ type: "reset" });
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
