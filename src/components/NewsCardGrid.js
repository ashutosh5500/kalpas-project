import React, {Component} from 'react';
import Logo from "../assets/images/demo.jpg";
import './Component.scss'

class NewsCardGrid extends Component {

    render() {
        const {title, body, id, dateAndTime} = this.props
        return (
            <div className="col">
                <div className="card h-100">
                    <div className={"newsfeed-close"}>
                        <button type="button" className="btn-close btn-close-yellow" aria-label="Close"></button>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{body}.</p>
                        <div className={"Date"}>
                            <div className="Date-Time">{dateAndTime}</div>
                            <img src={Logo} alt="" height={"150px"} width={"100%"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsCardGrid;