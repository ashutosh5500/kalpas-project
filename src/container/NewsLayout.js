import React, {Component} from 'react';
import SideBar from "../components/SideBar";
import "./NewsLayout.scss"
import NewsFeed from "../components/NewsFeed";
import SideDrawer from "../components/SideDrawer";
import Backdrop from "../components/Backdrop";

class NewsLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: 'HORIZONTAL',
            openDrawer: false
        }
    }

    toggleHandler = (type) => {
        this.setState({toggle: type})
    }
    sideDrawerHandler = () => {
        this.setState({openDrawer: !this.state.openDrawer})
    }

    backdropOnClick = () => {
        this.setState({openDrawer: false})
    }

    render() {
        const {toggle, openDrawer} = this.state
        let backdrop;
        let sideDrawer;
        if (this.state.openDrawer) {
            backdrop = <Backdrop close={this.backdropOnClick}/>;
            sideDrawer = <SideDrawer/>;

        }
        return (
            <div className={"main"}>
                <div className={"container-fluid"}>
                    <div className="row SidebarWrapper">
                        <div className={`${openDrawer ? "col-8" : "col-3"} NewsLayout`}>
                            <div className="row">
                                <div className={'SideBarWidth'}>
                                    <SideBar toggle={toggle}
                                             weAreListeningFlag={openDrawer}
                                             onToggleChange={this.toggleHandler}
                                             show={this.sideDrawerHandler}
                                    />
                                </div>
                                {
                                    openDrawer &&

                                    <div className={'SideDrawerWidth'}>
                                        <SideDrawer/>
                                    </div>

                                }

                            </div>
                        </div>
                    </div>
                    {backdrop}

                    <div className="row h-100">
                        <div className="newsfeed col-9 offset-3">
                            <NewsFeed layoutType={toggle}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsLayout;