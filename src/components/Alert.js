import React from "react";

export default function Alert(props) {
    const capital =(word)=>{
        const lowerCase=word.toLowerCase();
        return lowerCase.charAt(0).toUpperCase()+lowerCase.slice(1);
    }
  return (
    props.alert && <div
      className={`alert alert-${props.alert.typ} alert-dismissible fade show position-fixed `}
      style={{width: 1279}}
      role="alert"
    >
        <strong>{capital(props.alert.typ)}</strong>: {props.alert.msg}
    </div>
  );
}
