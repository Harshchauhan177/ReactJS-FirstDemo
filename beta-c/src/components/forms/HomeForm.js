import React, { useContext } from "react";
import mainStyles from "../../assets/css/Main.module.css";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
function HomeForm() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const Navigate = useNavigate();
  const { contextState, setContextState } = useContext(MyContext);
  const handelSubmit = (event) => {
    event.preventDefault();
    Navigate("/about");
  };

  return (
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
              value={contextState.name}
              onChange={(event) => {
                setContextState({ ...contextState, name: event.target.value });
              }}
            />
          </label>
          <br />
          <br />
          <label>
            Email:
            <input
              type="email"
              value={contextState.email}
              onChange={(event) => {
                setContextState({ ...contextState, email: event.target.value });
              }}
            />
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default HomeForm;
