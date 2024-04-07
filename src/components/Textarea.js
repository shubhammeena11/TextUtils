import React,{useState} from 'react'
import Darkmode from './Darkmode';

export default function Textarea(props) {
    const [text, setText] = useState("Enter text here");
    const [clicked, setClicked] = useState(false);

    const handelonchange =(event)=>{
        setText(event.target.value);
    }
    const upperCase=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        
    }
    const lowerCase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    } 
    const extraSpace=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
    } 
    const cleartext=()=>{
        if (!clicked) {
            setText(" ");
            setClicked(true);
        }
    }
    const sentenceCase=()=>{
      const newText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function(captured) {
        return captured.toUpperCase();
      });
      setText(newText);
    }
  
  return (
<div className="mx-5 mt-5" style={props.mystyle}>
  <label htmlFor="box" className="form-label m-3"><h4>{props.heading}</h4></label>
  <textarea style={props.mystyle} className={`form-control  mb-3`} id="box" onClick={cleartext} onChange={handelonchange} value={text} rows="8" ></textarea>
  <div>
  <button type="button" className= {`btn btn-${(props.mystyle.backgroundColor=== "pink")?"danger":"primary"}`} onClick={upperCase}>UpperCase</button>
  <button type="button" className= {`btn m-2 btn-${(props.mystyle.backgroundColor=== "pink")?"danger":"primary"}`} onClick={lowerCase}>LowerCase</button>
  <button type="button" className= {`btn btn-${(props.mystyle.backgroundColor=== "pink")?"danger":"primary"}`} onClick={sentenceCase}>SentenceCase</button>
  <button type="button" className= {`btn m-2 btn-${(props.mystyle.backgroundColor=== "pink")?"danger":"primary"}`} onClick={extraSpace}>ExtraSpace</button>
  </div>
  <div style={props.mystyle}>
    <h6>YOUR TEXT SUMMARY</h6>
    <p className='mb-1'>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length-text.split(" ").length+1} characters</p>
    <p>It takes approx {Math.round(0.48*text.split(" ").length)} seconds to read above paragraph</p>
  </div>
</div>
  )
}
