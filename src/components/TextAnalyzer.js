import React from 'react';
import PropTypes from 'prop-types';
import { setStyleMode, getBootStyle } from './Modules/Themes';

export default function TextAnalyzer(props) {
    let text = props.text;
    return (
        <div className="container my-3" style={setStyleMode(props.mode)}>
            <h2>
                Text Summary
            </h2>
            <table className={`table table-${getBootStyle(props.mode)} table-stripped`}>
                <thead>
                    <tr>
                        <th scope="col">Character Count</th>
                        <th scope="col">Word Count</th>
                        <th scope="col">Sentence Count</th>
                        <th scope="col">Paragraph Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {text.length}
                        </td>
                        <td>
                            {text.split(" ").filter((elem) => {return elem.length !== 0}).length}
                        </td>
                        <td>
                            {text.split(/[.!?;]+/).length - 1}
                        </td>
                        <td>
                            {text.slice(-1) === "\n" || text === "" ? text.split(/\n+/).length - 1 : text.split(/\n+/).length}
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                <em>
                    {0.008 * text.split(" ").filter((elem) => {return elem.length !== 0}).length}
                </em> minutes read
            </p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    );
}

TextAnalyzer.protoTypes = {
    mode: PropTypes.string,
    text: PropTypes.string.isRequired
}

TextAnalyzer.defaultProps = {
    mode: "light",
    text: ""
}
