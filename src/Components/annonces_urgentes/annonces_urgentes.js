
import './annonces_urgentes.css';
import Photo_annonces from '../components_annonces/photo_annonces.js';
import { useState, useEffect } from 'react';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'
import { useNavigate } from "react-router-dom";


function Annonces_urgentes(props) {
    let navigate = useNavigate();
    const [langue, setLangue] = useState(français);
    const id = props.id;

    useEffect(() => {
        setLangue(anglais);
    })

    function goDetails() {
        navigate(`/detailsAnnonce/${id}`, { state: { id: id } });
    }

    function goProfil() {
        navigate(`/Profil/${props.user.id}`, { state: { idUser: props.user.id } });
    }

    return (
        <div className='annonces_u_div_general'>
            <div id={"colone_droite"}>
                <div id={"autour_photo"}>
                    <Photo_annonces taille={"annonces_urgentes"} imageURL={props.photo} annonce={props.annonce}></Photo_annonces>
                </div>
                <div id={"div_profilUrg"}>
                    <span id='spanImageDetailUrg'><img className="photoProfil photoDetailAnnonce" src={props.user.photo} alt='Schémas' /></span>
                    <span id={'spanProfilUserAnnonceUrg'} onClick={goProfil}><strong>{props.user.prenom} {props.user.nom}</strong></span>
                </div>
            </div>
            <div id={"div_description"}>
                <p id={'titre'} onClick={goDetails}><strong>{props.titre}</strong></p>
                <br />
                <p className={'text_lieu_urgente'}><i className="fa-solid fa-bag-shopping"></i> {props.lVente}</p>
                <p className={'text_lieu_urgente'}><i className="fa-solid fa-plane-departure"></i> {props.lAchat}</p>
                <div id={'div_cout_urgent'}>
                    <p className={"text_contrepartie_urgente"}>{langue.COMPONENT_ANNONCE.contrepartie} <i className="fa-solid fa-plane-departure"></i></p>
                    <p className={"text_prix_urgente"}>{props.prixV}</p>
                </div>
            </div>
        </div>
    );
}

export default Annonces_urgentes;