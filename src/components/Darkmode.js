import React,{useState} from "react";
import Navbar from "./Navbar";
import Textarea from "./Textarea";
import Alert from "./Alert";

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
    showalert("DARK mode is Enabel","success");
  };
  const light = () => {
    setMystyle({
      backgroundColor: "white",
      color: "black",
    });
    showalert("LIGHT mode is Enabel","success");
  };
  const red = () => {
    setMystyle({
      backgroundColor: "pink",
      color: "black",
    });
    showalert("RED mode is Enabel","success");
    return "laal";
  };
  const [alert,setAlert]=useState(null);
  const showalert= (message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  return (
    <div style={mystyle} className="pb-1">
      <Navbar  mystyle={mystyle} dark={dark} light={light} red={red}/>
      <Alert alert={alert}/>
      <Textarea mystyle={mystyle}  heading="Enter the text for analyze" />
    </div>
  );
}
