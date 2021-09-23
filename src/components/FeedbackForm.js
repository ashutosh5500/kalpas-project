import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Search} from "react-bootstrap-icons";
import CustomInput from "../Generic/Custom-Input";
import CustomButton from "../Generic/Custom-Button";

const FeedbackForm = () => {
    return (
        <div style={{marginTop: "70px"}}>
            <div>
                <h3>
                    Thank you so much for taking the time!
                </h3>
                <p> Please provide the below details!</p>
            </div>
            <form className={"needs-validation"}>
                <CustomInput type={"text"}
                             labelText={"First Name:"}
                             placeholder={"John"}

                />

                <CustomInput type={"text"}
                             labelText={"Last Name:"}
                             placeholder={"Doe"}

                />
                <CustomInput type={"text-area"}
                             labelText={"Address:"}
                             placeholder={"Enter your full Postal Address"}

                />
                <CustomInput type={"text"}
                             labelText={"Country:"}
                             placeholder={"India"}
                             classes={"search-country"}>
                    <div className={'search-icon'}><Search/></div>
                </CustomInput>
                <CustomInput type={"text"}
                             labelText={"Email ID:"}
                             placeholder={"example@sample.com"}

                />
                <div className="phone-number">

                    <CustomInput type={"tel"}
                                 labelText={"Phone Number:"}
                                 placeholder={"+91"}
                    />
                    <div className={"phone-number-width"}>
                        <CustomInput type={"tel"}
                                     placeholder={"123456789"}

                        />
                    </div>

                </div>
                <CustomButton
                    type={"submit"}
                />

            </form>
        </div>
    );
};

export default FeedbackForm;