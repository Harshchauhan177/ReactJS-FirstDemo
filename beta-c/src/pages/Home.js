import React, { useRef } from "react";
import mainStyles from "../assets/css/Main.module.css";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

function Home() {
  const name = useRef(null);
  const email = useRef(null);
  const options = useRef(null);
  const handelSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name.current.value);
    console.log("Email:", email.current.value);
    console.log("Selected Option:", options.current.value);
  };

  return (
    <>
      <Navbar />
      <div style={{ minHight: "80vh" }}>
        <div className={mainStyles.homePage}>
          <h1>Welcome to My website</h1>
          <p>
            This is a simple React application using Vite as the build tool. hi
          </p>

          <form onSubmit={handelSubmit}>
            <label>
              Name:
              <input ref={name} type="text" />
            </label>
            <br />
            <br />
            <label>
              Email:
              <input ref={email} type="email" />
            </label>
            <br />
            <br />
            <label>
              Select Option:
              <select ref={options}>
                <option value="Mango">Mango</option>
                <option value="Banana">Banana</option>
                <option value="Apple">Apple</option>
              </select>
            </label>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
