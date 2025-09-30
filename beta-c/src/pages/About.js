import React from "react";
import mainStyles from "../assets/css/Main.module.css";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
function About() {
  return (
    <>
      <Navbar />
      <div
        style={{ minHight: "80vh", padding: "20px", backgroundColor: "red" }}
      >
        <div className={mainStyles.homePage}>
          <h1>Welcome to About page</h1>
          <p>
            This is a simple <b>About page</b>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
