import React from 'react';
import PropTypes from 'prop-types';
import { setStyleMode } from './Modules/Themes';

export default function AboutPage(props) {
    return (
        <div className="accordion container my-3" id="accordionExample">
            <div className="accordion-item" style={setStyleMode(props.mode)}>
                <h2 className="accordion-header" id="headingOne">
                <button style={setStyleMode(props.mode)} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Our Mission
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Creating a text analyzer softwere which can be accessed online. </strong> 
                        This is a demo react project for non-profit purpose.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={setStyleMode(props.mode)}>
                <h2 className="accordion-header" id="headingTwo">
                <button style={setStyleMode(props.mode)} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    Our Vision
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Providing people free easy to use text analyzer. </strong>
                        <q>Where mind is without fear, and the head held high...</q>
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={setStyleMode(props.mode)}>
                <h2 className="accordion-header" id="headingThree">
                <button style={setStyleMode(props.mode)} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                    Our Story
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Text Utils application is build while learning. </strong>
                        Onec upon a time, a softwere engineer lived in a small town wish to learn web devewlopment 
                        by his own. He decide to create a React JS application that analyze any textual data. Then he 
                        learned React JS and Bootstrap and built this application in the hot indian summer weekend of 
                        March, 2022.
                    </div>
                </div>
            </div>
    </div>
    );
}

AboutPage.propsType = {
    mode: PropTypes.string
}

AboutPage.defaultProps = {
    mode: "light"
}