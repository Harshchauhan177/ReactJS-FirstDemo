import React from "react";
// import mainStyles from "../assets/css/Main.module.css";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import HomeForm from "../components/forms/HomeForm";

function Home() {
  return (
    <>
      <Navbar />
      <HomeForm />
      <Footer />
    </>
  );
}

export default Home;
