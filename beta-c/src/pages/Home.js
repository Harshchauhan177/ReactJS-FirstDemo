import React, { useContext } from "react";
import mainStyles from "../assets/css/Main.module.css";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import { MyContext } from "../components/layouts/ContextReducer";
// import HomeForm from "../components/forms/HomeForm";

function Home() {
  const [count, dispatch] = useContext(MyContext);

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
