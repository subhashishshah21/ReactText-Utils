import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    var color = props.mode;
    console.log(color)
    const uppercase = () => {
        setText(text.toUpperCase());
    }
    const change = (e) => {
        setText(e.target.value);
    }
    const cleartext = () => {
        let newText = "";
        setText(newText);
    }
    const lowcase = () => {
        setText(text.toLowerCase());
    }
    const colorhandle = (color) => {
        switch (color) {
            case 'light':
                return 'white';
                break;
            case 'dark':
                return 'grey';
                break;
            case 'success':
                return 'green';
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className="container mb-3"  >
                <div className="form-group">
                    <h1>Text To be Analyzed</h1>
                    <textarea className="form-control" style={{ backgroundColor: colorhandle(props.mode), color: (props.mode === 'dark' ? 'white' : 'black') }} value={text} onChange={change} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <div className="my-5">
                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : props.mode} mx-2`} onClick={uppercase}>To Uppercase</button>
                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : props.mode} mx-2`} onClick={lowcase}>To LowerCase</button>
                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : props.mode} mx-2`} onClick={cleartext}>Clear Text</button></div>

            </div>
            <div className="container" style={{ color: (props.mode === "dark" ? 'white' : 'black') }}>
                <h3>Text Analyzed</h3>
                <p>{(text.replace(/ /g,"")).length} words</p>
                <p>{(text.replace(/ /g,"")).length * 0.08} minutes</p>
                <h2>Preview</h2>
                <p>{(text.replace(/ /g,""))}</p>


            </div>
        </>
    )
}
