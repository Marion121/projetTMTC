import React, {useState} from 'react';
import './popup.css';
import 'reactjs-popup/dist/index.css';

    const Popup1 = props => {
        return (
            <div className="popup-box">
                <div className="box">
                    <i className=" close-icon  fa-solid fa-circle-xmark" onClick={props.handleClose} ></i>

                    {props.content}
                    <button className={"boutonValider"} onClick={props.handleValidate} > <strong> Valider </strong>  </button>
                    <button className={"boutonAnnuler"} onClick={props.handleClose} > <strong> Annuler </strong> </button>
                </div>
            </div>
        );
    };

    export default Popup1;

