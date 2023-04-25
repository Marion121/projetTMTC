import './valide_id.css';
import {useState, useEffect} from "react";
import { français } from '../../langues/français';
import { anglais } from '../../langues/anglais';

function Valide_id(props) {

    const [validation, setvalidation] =  useState(props.valider);
    const [langue, setLangue] = useState(français);

    useEffect( () => {
        console.log(localStorage.getItem("Langue"));
        if(localStorage.getItem("Langue") == "anglais"){
            setLangue(anglais);
        }else{
            setLangue(français);
        }
        //setLangue(anglais);
        console.log("ok");
    })

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
            <p>{langue.ADMIN.dateNaissance} {props.dateN}</p>
            <div className={'div_img'} >
                <img className={'img_id'} src='/../../images/valise_fermé.png' alt='idDos'/>
                <img className={'img_id'} src='/../../images/valise_avion.png' alt='idDos'/>
            </div>
            <div>
                <button className={'boutonOK'} onClick={valider}> {langue.ADMIN.valider} </button>
                <button className={'boutonRefuser'} onClick={refuser}> {langue.ADMIN.refuser} </button>
            </div>
        </div>
    )}
}
export default Valide_id;