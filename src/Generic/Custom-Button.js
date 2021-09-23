import React from 'react';
import './Generic.scss'

const CustomButton = (props) => {
    const {type} = props
    return (
        <div>
            <button className={"Submit-button"} type={type}>
                Submit Feedback
            </button>
        </div>
    );
};

export default CustomButton;