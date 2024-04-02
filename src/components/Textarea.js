import React,{useState} from 'react'

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
    const cleartext=()=>{
        if (!clicked) {
            setText(" ");
            setClicked(true);
        }
    }
    const sentenceCase=()=>{
      const newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(captured) {
        return captured.toUpperCase();
      });
      setText(newText);
    }
  return (
<div className="m-5" style={props.mystyle}>
  <label htmlFor="box" className="form-label"><h4>{props.heading}</h4></label>
  {console.log(props.mystyle)}
  <textarea style={props.mystyle} className={`form-control  mb-3`} id="box" onClick={cleartext} onChange={handelonchange} value={text} rows="8" ></textarea>
  <div>
  <button type="button" className="btn btn-primary"  onClick={upperCase}>toUpperCase</button>
  <button type="button" className="btn btn-primary m-2" onClick={lowerCase}>toLowerCase</button>
  <button type="button" className="btn btn-primary" onClick={sentenceCase}>sentenceCase</button>
  </div>
  <div style={props.mystyle}>
    <h6>Your text summury</h6>
    <p className='mb-1'>{text.split(" ").length} words and {text.length-text.split(" ").length+1} characters</p>
    <p>It takes approx {Math.round(0.48*text.split(" ").length)} seconds to read above paragraph</p>
  </div>
</div>
  )
}

// bg-${props.mystyle==='light'?'black':'white'}