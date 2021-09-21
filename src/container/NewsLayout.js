import React, {Component} from 'react';
import SideBar from "../components/SideBar";
import "./NewsLayout.scss"
import NewsFeed from "../components/NewsFeed";

class NewsLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: 'HORIZONTAL'
        }
    }

    toggleHandler = (type) => {
        this.setState({toggle:type})
    }

    render() {
        const {toggle} = this.state

        return (
            <div className={"main"}>
                <div className={"container-fluid"}>
                    <div className="row h-100">
                        <div className="col-sm-3 NewsLayout">
                            <SideBar toggle={toggle}
                                     onToggleChange={this.toggleHandler}
                            />
                        </div>
                        <div className="newsfeed col-9">
                            <NewsFeed layoutType={toggle}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsLayout;