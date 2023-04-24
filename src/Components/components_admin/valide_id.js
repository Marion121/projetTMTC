import './valide_id.css';
import {useState} from "react";

function Valide_id(props) {

    const [validation, setvalidation] =  useState(props.valider);

    function valider(event) {
        setvalidation( "valider");
    }

    function refuser(event) {
        setvalidation("refuser");
    }

    if(validation === "en_attente"){
    return (
        <div className={'div_general'}>
            <p id={'titre'}><strong>{props.nom} {props.prenom}</strong>  </p>
            <p>date de naissance : {props.dateN}</p>
            <div className={'div_img'} >
                <img className={'img_id'} src='/../../images/valise_fermé.png' alt='idDos'/>
                <img className={'img_id'} src='/../../images/valise_avion.png' alt='idDos'/>
            </div>
            <div>
                <button className={'boutonOK'} onClick={valider}> Valider </button>
                <button className={'boutonRefuser'} onClick={refuser}> Reffuser </button>
            </div>
        </div>
    )}
}
export default Valide_id;