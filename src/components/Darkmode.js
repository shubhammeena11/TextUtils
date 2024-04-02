import React,{useState} from "react";
import Navbar from "./Navbar";
import Textarea from "./Textarea";

export default function Darkmode() {
  const [mystyle, setMystyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const dark = () => {
    setMystyle({
      backgroundColor: "black",
      color: "white",
    });
  };
  const light = () => {
    setMystyle({
      backgroundColor: "white",
      color: "black",
    });
  };

  return (
    <div style={mystyle} className="pb-1">
      <Navbar  mystyle={mystyle} dark={dark} light={light} />
      <Textarea mystyle={mystyle}  heading="Enter the text for analyze" />
    </div>
  );
}
