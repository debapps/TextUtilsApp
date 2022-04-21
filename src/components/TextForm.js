import React, {useState} from 'react'
import ShowDown from 'showdown';
import PropTypes from 'prop-types'
import { setStyleMode, getBootStyle } from './Modules/Themes';
import TextAnalyzer from './TextAnalyzer';


export default function TextForm(props) {

    // Showdown converter configurations.
    const converter = new ShowDown.Converter();
    converter.setOption('noHeaderId', true);

    // TextBox Content hooks.
    const [text, setText] = useState("");

    // This function set the text as user typed on text box.
    const handleChangeText = (event) => {
        setText(event.target.value);
    }

    // This function converts the text in textbox to uppercase when user clicks the button.
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success", "Converted to UpperCase!");
    }

    // This function converts the text in textbox to lowercase when user clicks the button.
    const handleLowCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success", "Converted to LowerCase!");
    }

    // This function clears the textbox.
    const handleClear = () => {
        let newText = "";
        setText(newText);
    }

    // This function removes Extra Spaces.
    const removeSpace = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);  
        props.showAlert("success", "Removed Extra Spaces!");      
    }

    // This function copies the text to clipboad.
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("success", "Copied to clipboard..");
    }

    // This function converts the MarkDown text to html text.
    const handleMarkDownText = () => {
        let newText = converter.makeHtml(text);
        setText(newText);
        props.showAlert("success", "Converted to HTML.");
    }

    // This function converts the html text to markdown text.
    const handleHTMLText = () => {
        let newText = converter.makeMarkdown(text);
        setText(newText); 
        props.showAlert("success", "Converted to MarkDown.");
    }

    return (
        <>
            <div className="container my-3" style={setStyleMode(props.mode)}>
                <h2>
                    {props.textHeading}
                </h2>
                <div className="mb-3 my-3">
                    <textarea className={`form-control bg-${getBootStyle(props.mode)} text-light`}
                            id="myTextBox" 
                            rows="6"
                            value={text}
                            onChange={handleChangeText}/>
                </div>
                <div className="my-3">
                    <button type="button" 
                            disabled={text.length === 0}
                            className={`btn btn-${getBootStyle(props.mode)} mx-1 my-1`} 
                            onClick={handleUpCase}>
                        UPPERCASE
                    </button>
                    <button type="button" 
                            disabled={text.length === 0}
                            className={`btn btn-${getBootStyle(props.mode)} mx-1 my-1`} 
                            onClick={handleLowCase}>
                        lowercase
                    </button>
                    <button type="button" 
                            disabled={text.length === 0}
                            className={`btn btn-${getBootStyle(props.mode)} mx-1 my-1`} 
                            onClick={removeSpace}>
                        Remove Extra Spaces
                    </button>
                    <button type="button" 
                            disabled={text.length === 0}
                            className={`btn btn-${getBootStyle(props.mode)} mx-1 my-1`} 
                            onClick={handleMarkDownText}>
                        MarkDown Text to HTML Text
                    </button>
                    <button type="button" 
                            disabled={text.length === 0}
                            className={`btn btn-${getBootStyle(props.mode)} mx-1 my-1`} 
                            onClick={handleHTMLText}>
                        HTML Text to MarkDown Text
                    </button>
                    <button type="button" 
                            disabled={text.length === 0}
                            className={`btn btn-${getBootStyle(props.mode)} mx-1 my-1`}  
                            onClick={handleCopy}>
                        Copy Text
                    </button>
                    <button type="button" 
                            disabled={text.length === 0}
                            className={`btn btn-${getBootStyle(props.mode)} mx-1 my-1`}  
                            onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </div>
            <TextAnalyzer mode={props.mode} text={text}/>
        </>

    );
}

TextForm.propTypes = {
    mode: PropTypes.string,
    textHeading: PropTypes.string.isRequired,
    showAlert: PropTypes.func
}

TextForm.defaultProps = {
    mode: "light",
    textHeading: "Enter Text"
}
