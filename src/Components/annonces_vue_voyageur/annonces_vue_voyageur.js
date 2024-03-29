
import './annonces_vue_voyageur.css';
import Photo_annonces from '../components_annonces/photo_annonces.js';
import Description_annonces from "../components_annonces/description_annonces";
import Prix_annonces from "../components_annonces/prix_annonces";
import DetailAnnonce from "../../screens/DetailAnnonce/detailAnnonce";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Annonces_vu_voyageur(props) {

    let navigate = useNavigate();

    useEffect(() => {
        console.log(props.devise) 
    }, [])
    
    return (
        <div className='annonces_div_general' >
            <div id={"div_autour_photo_1"}>
                <Photo_annonces taille={"boutons_photo"} imageURL={props.photo} titre={props.titre} lVente={props.lVente} lAchat={props.lAchat}  coutTot={props.coutTot} annonce={props.annonce} />
            </div>
            <Description_annonces id={props.id} titre={props.titre} lVente={props.lVente} lAchat={props.lAchat} villeArriver={props.villeArriver} description={props.description} photo={props.user.photo} idUser={props.user.id} nom={props.user.nom} prenom={props.user.prenom} ></Description_annonces>
            <Prix_annonces typeContrepartie={props.typeContrepartie}  coutTot={props.coutTot}  devise={props.annonce.devise}></Prix_annonces>
        </div>
    );

}

export default Annonces_vu_voyageur;