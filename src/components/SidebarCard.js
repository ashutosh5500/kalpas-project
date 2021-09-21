import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class SidebarCard extends Component {
    render() {
        const {headerText, text, iconHorizontal, iconVertical, feedback} = this.props
        return (
            <div className={"SideCard"}>
                <div className="card">
                    <div className="card-body">
                        <h3>{headerText}</h3>
                        <div>{text}</div>
                        <div className={"toggle-button"}>
                            {iconVertical}
                            {iconHorizontal}
                        </div>
                        {feedback}
                    </div>
                </div>
            </div>
        );
    }
}

export default SidebarCard;