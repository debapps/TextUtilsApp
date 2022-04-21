import React from 'react';
import PropTypes from 'prop-types'

export default function Alert(props) {
    
    // This function capitalizes the first letter of the word.
    function capitalize(word) {
        let firstLetter = word.slice(0, 1).toUpperCase();
        let newWord = firstLetter + word.slice(1);
        return newWord;
    }

    return (
        props.alert && 
        <div role="alert"
            className={`alert alert-${props.alert.type} alert-dismissible fade show fixed-top`}>
            <strong>{capitalize(props.alert.type)}</strong> - {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    );
}

Alert.propTypes = {
    alert: PropTypes.object
}


