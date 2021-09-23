import React, {Component} from 'react';
import Logo from "../assets/images/demo.jpg";
import SidebarCard from "./SidebarCard";
import {CardHeading, ListUl} from "react-bootstrap-icons";


class SideBar extends Component {


    render() {
        const {toggle, onToggleChange, weAreListeningFlag} = this.props


        return (
            <div className="Sidebar">
                <div className={"SideCard"}>
                    <div className="card">
                        <div className="card-body d-flex align-items-center">
                            <img src={Logo} alt="" height={"50px"} width={"50px"}/>
                            <div>

                                <div className={"text-start "}>
                                    <span className={"fw-bold fs-4"}> Hi Reader,</span>
                                    <br/>
                                    Here's your news!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {weAreListeningFlag ? null :
                    <SidebarCard headerText={"View Toggle"}
                                 iconHorizontal={
                                     <div onClick={() => onToggleChange('HORIZONTAL')}
                                          className={`horizontal-border ${toggle === 'HORIZONTAL' ? 'toggle-active' : 'toggle-inactive'}`}>
                                         <ListUl/>
                                     </div>}
                                 iconVertical={
                                     <div onClick={() => onToggleChange('VERTICAL')}
                                          className={`vertical-border ${toggle === 'VERTICAL' ? 'toggle-active' : 'toggle-inactive'}`}>
                                         <CardHeading/>
                                     </div>
                                 }
                    />
                }
                <SidebarCard headerText={"Have a Feedback?"}
                             feedback={(
                                 <div onClick={this.props.show}
                                      className={`${weAreListeningFlag ? 'feedback-red' : 'feedback-button'}`}>"We're
                                     Listening!"</div>)
                             }
                />


            </div>
        )
    }
}

export default SideBar;