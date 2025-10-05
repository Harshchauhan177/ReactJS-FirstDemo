import React, { useState } from "react";
import mainStyles from "../assets/css/Main.module.css";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [options, setOptions] = useState("Mango");

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Options:", options);
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
              <input
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </label>
            <br />
            <br />
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </label>
            <br />
            <br />
            <label>
              Select Option:
              <select
                value={options}
                onChange={(event) => {
                  setOptions(event.target.value);
                }}
              >
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
