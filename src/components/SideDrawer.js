import React, {Fragment} from 'react';
import FeedbackForm from "./FeedbackForm";
import './Component.scss';


const SideDrawer = (props) => {
    const {show} = props;


    return (
        <div>
            <FeedbackForm/>
        </div>
    );
};

export default SideDrawer;