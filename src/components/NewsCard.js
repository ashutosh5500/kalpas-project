import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import './Component.scss'
import Logo from '../assets/images/demo.jpg'


const NewsCard = (props) => {
    const {title, body, dateAndTime} = props
    return (
        <div className={"NewsCard"}>
            <div className="card ">

                <div className="card-body d-flex align-items-center">
                    <div>
                        <img src={Logo} alt="image" height={"90"} width={"90"}/>
                    </div>
                    <div className={"p-lg-2"}>
                        <div className={"Title"}>{title}</div>
                        <div>{body}</div>
                        <div className={"Date-Time"}>{dateAndTime}</div>
                    </div>
                </div>
            </div>
            <div className={"newsfeed-close"}>
                <button type="button" className="btn-close  btn-close-yellow" aria-label="Close"></button>
            </div>
        </div>
    );
};

export default NewsCard;