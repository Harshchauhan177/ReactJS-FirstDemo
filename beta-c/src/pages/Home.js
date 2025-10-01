import React, { useEffect, useState } from "react";
import mainStyles from "../assets/css/Main.module.css";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

function Home() {
  // const url = "https://randomuser.me/api/";
  // const apiRequest = async () => {
  //   const fetchData = await fetch(url, { method: "GET" });
  //   const data = await fetchData.json();
  //   console.log(data);
  // };
  // apiRequest();

  const url = process.env.REACT_APP_API_URL;
  const [data, setData] = useState("");
  const apiRequest = async () => {
    await fetch(url, { method: "GET" }).then(async (response) => {
      response = await response.json();
      return setData(response.results[0]);
    });
    // console.log(data);
  };
  console.log(data);
  useEffect(() => {
    apiRequest();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ minHight: "80vh" }}>
        <div className={mainStyles.homePage}>
          <p>
            hi my name is {data.name?.title} {data.name?.first}{" "}
            {data.name?.last}
          </p>
          <img src={data.picture?.large} alt="hi" />
          <h1>Welcome to My website</h1>
          <p>This is Home page of my website💕.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
