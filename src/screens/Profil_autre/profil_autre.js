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
    const [nbAchat, setNbAchat] = useState();
    const [nbVoyages, setNbVoyages] = useState();

    const data = [{ key: 1, titre: "Ordi", lVente: "Paris, France", lAchat: "Lisbone, Portugal", description: "super ordi topito", profil: "Leo Comte", Prix1: "34,00 €", PrixV: "48,00 €", coutTot: "1526,00 €", etat: "manqueVoyageur" },
        { key: 2, titre: "tablette", lVente: "Madrid, Espagne", lAchat: "Londre, Angleterre", description: "super ordi topito", profil: "Leo Comte", Prix1: "44,00 €", PrixV: "38,00 €", coutTot: "1526,00 €", etat: "manquePayement" },
        { key: 3, titre: "telephone", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", Prix1: "14,00 €", PrixV: "68,00 €", coutTot: "1526,00 €", etat: "acheminement" },
        { key: 4, titre: "Cookies Canadiens", lVente: "Chicoutimi, Canada", lAchat: "Paris, France",description: "super ordi topito", profil: "Leo Comte", Prix1: "24,00 €", PrixV: "58,00 €", coutTot: "1526,00 €", etat: "manqueVoyageur" }]

    useEffect(() => {
        async function getVisitedUser() {
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
        async function getNbAchats() {
            const response = await fetch(`http://localhost:8080/api/offre/acheteur/stat?id=${id}`);
            const nbAchat = await response.json();
            console.log(nbAchat);
            setNbAchat(nbAchat);
        }
        async function getNbVoyages() {
            const response = await fetch(`http://localhost:8080/api/offre/voyageur/stat?id=${id}`);
            const nbVoyages = await response.json();
            console.log(nbVoyages);
            setNbVoyages(nbVoyages);
        }
        fetchAnnoncesProfil();
        getVisitedUser();
        getNbAchats();
        getNbVoyages();
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
                    <p className={'text_caracteristique'}> 1 {langue.POFIL_AUTRE.achat} | {nbVoyages} {langue.POFIL_AUTRE.voyages} </p>
                    <p className={'text_caracteristique'}>{annoncesuser.length} {langue.POFIL_AUTRE.annoncesPostees} </p>
                    <button id={'envoyer_msg'} >
                        <div> <i className="logo_message fa-regular fa-envelope"></i> </div>
                        <div id={'div_text_bouton'}> <strong>{langue.POFIL_AUTRE.envoyerMessage}</strong> </div>
                    </button>
                </div>
            </div>
            <div id={"annonce_"}>
                <p><strong>{langue.POFIL_AUTRE.annonces}</strong></p>
                {annoncesuser.map(dataprop => <Annonces_vu_voyageur id={dataprop.id} titre={dataprop.titre} lVente={dataprop.paysArriver.nom} villeArriver={dataprop.villeArriver} lAchat={dataprop.paysDepart.nom} description={dataprop.description} profil={dataprop.profil} photo={dataprop.image} user={dataprop.user} nom={visitedUser.nom} prenom={visitedUser.prenom} typeContrepartie={dataprop.typeContrepartie} coutTot={dataprop.prix} annonce={dataprop}></Annonces_vu_voyageur>)}

            </div>
        </div>
    </div>)
}
export default ProfilAutre;