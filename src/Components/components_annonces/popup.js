import React, {useState} from 'react';
import 'reactjs-popup/dist/index.css';

    const Popup1 = props => {
        return (
            <div className="popup-box">
                <div className="box">
                    <i className=" close-icon  fa-solid fa-circle-xmark" onClick={props.handleClose} ></i>

                    {props.content}
                    <button className={"boutonOK"} onClick={props.handleValidate} > <strong> Valider </strong>  </button>
                    <button className={"boutonRefuser"} onClick={props.handleClose} > <strong> Annuler </strong> </button>
                </div>
            </div>
        );
    };

    export default Popup1;

