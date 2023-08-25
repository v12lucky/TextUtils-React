import React, { useState } from 'react' // * useSate concept


export default function TextForm(props) {
    const handleUpClick = () => {       // * handle toUpperCase
        // console.log("handleUpClick is clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Cleared all text!", "success");
    }

    const handleCapClick = () => {
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const newText = arr.join(" ");
        setText(newText)
        props.showAlert("Converted to capitalized!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed all extra spaces!", "success");
    }

    const handleOnChange = (event) => {  // * handle onChange
        // console.log("OnChange")
        setText(event.target.value)   // ***
    }
    const [text, setText] = useState('')
    // text = newText // wrong way
    // setText(newText) // correct way

    return (
        <>
            <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'#212529':'#6c757d', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10" ></textarea>
                <button className={`btn btn-${props.btnColor} my-2 mx-1`} onClick={handleUpClick}>CONVERT TO UPPERCASEE</button>
                <button className={`btn btn-${props.btnColor} my-2 mx-1`} onClick={handleLoClick}>convert to lowercase</button>
                <button className={`btn btn-${props.btnColor} my-2 mx-1`} onClick={handleCapClick}>Convert To Capitalized Case</button>
                <button className={`btn btn-${props.btnColor} my-2 mx-1`} onClick={handleClearClick}>Clear text</button>
                <button className={`btn btn-${props.btnColor} my-2 mx-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{(text.match(/\S+/g) || []).length} words and {text.length} characters</p>
                <p>{0.008 * (text.match(/\S+/g) || []).length} Minutes read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview it here"}</p>
            </div>
        </>
    )
}


