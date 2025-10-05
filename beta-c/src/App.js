import { createContext, useState } from "react";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const MyContext = createContext();
function App() {
  const [contextState, setContextState] = useState({ name: "", email: "" });
  return (
    <MyContext.Provider value={{ contextState, setContextState }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
