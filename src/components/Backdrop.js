import React, {Component} from 'react';
import './Component.scss'

class Backdrop extends Component {
    render(props) {
        const { close } = this.props;
        return (
            <div className={"Backdrop"} onClick={close}/>
        );
    }
}

export default Backdrop;