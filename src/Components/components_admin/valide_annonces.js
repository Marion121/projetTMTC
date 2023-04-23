import './valide_annonces.css';
import Annonces_vu_voyageur from "../annonces_vue_voyageur/annonces_vue_voyageur";
import {useState} from "react";

function Valide_annonces(props) {

    const [validation, setvalidation] =  useState(props.valider);

    function valider(event) {
        setvalidation( "valider");
        console.log("valider : " + props.valider);
    }

    function refuser(event) {
        setvalidation("refuser");
        console.log("refuser : " + props.valider);
    }

    if(validation === "en_attente"){
    return (
        <div id={'div_general_V_annonces'}>
            <Annonces_vu_voyageur id={props.key} titre={props.titre} lVente={props.lVente} lAchat={props.lAchat} description={props.description} profil={props.profil} typeContrepartie={props.typeContrepartie} prix1={props.Prix1} prixV={props.PrixV} coutTot={props.coutTot}></Annonces_vu_voyageur>
            <div id={'div_bouton_V_annonces'}>
                <br/>
                <button className={'boutonOK'} onClick={valider}> Valider </button>
                <button className={'boutonRefuser'} onClick={refuser}> Reffuser </button>
            </div>
        </div>
    )}
}


export default Valide_annonces;