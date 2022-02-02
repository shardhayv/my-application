import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = ()=>{

        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleLowClick = ()=>{

        let newText = text.toLowerCase();
        setText(newText);

    }

    const handleOnChange = (event)=>{

        setText(event.target.value);

    }


  const [text, setText] = useState("");
  return (
      <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div >
      <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary m-2" onClick={handleLowClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Estimated Reading Time</h2>
        <p>Average person will take {0.008*text.split(" ").length} minutes to read the above text.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
