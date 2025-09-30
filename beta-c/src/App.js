import { useState } from "react";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const [routes, setRoutes] = useState("/");
  return (
    <>
      {routes === "/" ? (
        <Home routes={routes} setRoutes={setRoutes} />
      ) : (
        <About routes={routes} setRoutes={setRoutes} />
      )}
    </>
  );
}

export default App;
