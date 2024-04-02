import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Navbar(props) {
  const [hoveredm, setHoveredm] = useState(false);
  const [hovereds, setHovereds] = useState(false);
  const handleMouseEnterm = () => {
    setHoveredm(true);
  };
  const handleMouseLeavem = () => {
    setHoveredm(false);
  };
  const handleMouseEnters = () => {
    setHovereds(true);
  };
  const handleMouseLeaves = () => {
    setHovereds(false);
  };
  let moon = {
    // color: "blue",
    cursor: hoveredm ? 'pointer' : 'default',
    color: hoveredm ? 'darkblue' : 'lightblue'
  };
  let sun = {
    // color: "yellow",
    cursor: hovereds ? 'pointer' : 'default',
    color: hovereds ? 'yellow' : 'lightyellow'
  };
  // const [mystle, setMystyle]=useState({
  //   backgroundColor: "white",
  //   color: "black"
  // });
  // const dark = () => {
  //   setMystyle({
  //     backgroundColor: "black",
  //     color: "white"
  //   });
  // };
  // const light = () => {setMystyle({
  //   backgroundColor: "white",
  //   color: "black"
  // });};
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={props.mystyle}>
      <div className="container-fluid" style={props.mystyle}>
        <a className="navbar-brand" style={props.mystyle} href="/">
          TextEditor
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" style={props.mystyle}>
                Home
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <div>
              <i
                className="fas fa-moon p-2"
                style={moon}
                onMouseEnter={handleMouseEnterm}
                onMouseLeave={handleMouseLeavem}
                onClick={props.dark}
                ></i>
              <i
                className="fas fa-sun mx-3 p-2"
                style={sun}
                onMouseEnter={handleMouseEnters}
                onMouseLeave={handleMouseLeaves}
                onClick={props.light}
              ></i>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
