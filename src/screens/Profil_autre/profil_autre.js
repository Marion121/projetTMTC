import './profil_autre.css';
import '../css_general.css';
import NavBar from '../../Components/navBar/navbar';
import {useEffect, useState} from "react";
import Annonces_vu_voyageur from "../../Components/annonces_vue_voyageur/annonces_vue_voyageur";
import { useParams } from 'react-router-dom';
import { français } from '../../langues/français';
import { anglais } from '../../langues/anglais';

function ProfilAutre() {

    const [annoncesuser, setAnnoncesUser] = useState([]);
    const [visitedUser, setVisitedUser] =  useState([]);
    const utilisateur = JSON.parse(localStorage.getItem("User"));
    const { id } = useParams(); 
    const [langue, setLangue] = useState(français);

    const data = [{ key: 1, titre: "Ordi", lVente: "Paris, France", lAchat: "Lisbone, Portugal", description: "super ordi topito", profil: "Leo Comte", Prix1: "34,00 €", PrixV: "48,00 €", coutTot: "1526,00 €", etat: "manqueVoyageur" },
        { key: 2, titre: "tablette", lVente: "Madrid, Espagne", lAchat: "Londre, Angleterre", description: "super ordi topito", profil: "Leo Comte", Prix1: "44,00 €", PrixV: "38,00 €", coutTot: "1526,00 €", etat: "manquePayement" },
        { key: 3, titre: "telephone", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", Prix1: "14,00 €", PrixV: "68,00 €", coutTot: "1526,00 €", etat: "acheminement" },
        { key: 4, titre: "Cookies Canadiens", lVente: "Chicoutimi, Canada", lAchat: "Paris, France",description: "super ordi topito", profil: "Leo Comte", Prix1: "24,00 €", PrixV: "58,00 €", coutTot: "1526,00 €", etat: "manqueVoyageur" }]

    useEffect(() => {
        async function getVisitedUser() {
            console.log(utilisateur.id);
            const response = await fetch(`http://localhost:8080/api/user?id=${id}`);
            const dataUser = await response.json();
            console.log(dataUser);
            setVisitedUser(dataUser);

        }
        async function fetchAnnoncesProfil() {
            const response = await fetch(`http://localhost:8080/api/annonce/user?idUser=${id}`);
            const dataAnnonce = await response.json();
            console.log(dataAnnonce);
            setAnnoncesUser(dataAnnonce);
        }
        fetchAnnoncesProfil();
        getVisitedUser();
        if(localStorage.getItem("Langue") == "anglais"){
            setLangue(anglais);
        }else{
            setLangue(français);
        }
        console.log(visitedUser);
        console.log(annoncesuser);
    }, []);

    return(
    <div className='page'>
        <div className='zone_navBar'>
            <NavBar/>
        </div>
        <div className='div_body' >
            <div id={"profil_"}>
                <div id={"profil_photo_nom"}>
                    <img className="photoProfil2" src={visitedUser.photo} alt='Schémas' />
                    <div id={'div_nom_'}>
                        <p className={'text_prenom'}>{visitedUser.prenom} <br/> {visitedUser.nom} </p>
                    </div>
                </div>
                <div>
                    <p className={'text_caracteristique'}> 34 {langue.POFIL_AUTRE.achat} | 41 {langue.POFIL_AUTRE.voyages} </p>
                    <p className={'text_caracteristique'}>35 {langue.POFIL_AUTRE.annoncesPostees} </p>
                    <button id={'envoyer_msg'} >
                        <div> <i className="logo_message fa-regular fa-envelope"></i> </div>
                        <div id={'div_text_bouton'}> <strong>{langue.POFIL_AUTRE.envoyerMessage}</strong> </div>
                    </button>
                </div>
            </div>
            <div id={"annonce_"}>
                <p><strong>{langue.POFIL_AUTRE.annonces}</strong></p>
                {annoncesuser.map(dataprop => <Annonces_vu_voyageur id={dataprop.id} titre={dataprop.titre} lVente={dataprop.pays.nom} lAchat={dataprop.ville} description={dataprop.description} nom={visitedUser.nom} prenom={visitedUser.prenom} typeContrepartie={dataprop.typeContrepartie} prix1={dataprop.Prix1} prixV={dataprop.PrixV} coutTot={dataprop.coutTot} ></Annonces_vu_voyageur>)}
            </div>
        </div>
    </div>)
}
export default ProfilAutre;