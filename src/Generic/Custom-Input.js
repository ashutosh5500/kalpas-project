import React, {Fragment} from 'react';
import './Generic.scss'
import 'bootstrap/dist/css/bootstrap.css'

const CustomInput = (props) => {
    const {labelText, type, placeholder, children, classes} = props;

    return (
        <Fragment>
            <div className={`custom-input ${classes}`}>
                <label className="form-label">{labelText}</label>
                {children}
                {type === "text-area" ?
                    <textarea className={"form-control"} placeholder={placeholder} rows={6} cols={2}/> :
                    <input type={type} className="form-control" placeholder={placeholder}/>
                }
            </div>

        </Fragment>
    );
};

export default CustomInput;