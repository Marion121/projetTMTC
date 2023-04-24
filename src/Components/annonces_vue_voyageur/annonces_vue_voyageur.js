
import './annonces_vue_voyageur.css';
import Photo_annonces from '../components_annonces/photo_annonces.js';
import Description_annonces from "../components_annonces/description_annonces";
import Prix_annonces from "../components_annonces/prix_annonces";
import DetailAnnonce from "../../screens/DetailAnnonce/detailAnnonce";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Annonces_vu_voyageur(props) {

    let navigate = useNavigate();



    return (
        <div className='annonces_div_general' >
            <div id={"div_autour_photo_1"}>
                <Photo_annonces taille={"boutons_photo"} titre={props.titre} lVente={props.lVente} lAchat={props.lAchat} prix1={props.prix1} prixV={props.prixV} coutTot={props.coutTot} />
            </div>
            <Description_annonces id={props.id} titre={props.titre} lVente={props.lVente} lAchat={props.lAchat} description={props.description} profil={props.profil}  ></Description_annonces>
            <Prix_annonces typeContrepartie={props.typeContrepartie} prix1={props.prix1} prixV={props.prixV} coutTot={props.coutTot}  ></Prix_annonces>
        </div>
    );

}

export default Annonces_vu_voyageur;