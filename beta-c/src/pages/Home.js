import React from "react";
import mainStyles from "../assets/css/Main.module.css";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div style={{ minHight: "80vh" }}>
        <div className={mainStyles.homePage}>
          <h1>Welcome to My website</h1>
          <p>
            This is a simple React application using Vite as the build tool.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
