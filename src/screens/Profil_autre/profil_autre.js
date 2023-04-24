import './profil_autre.css';
import '../css_general.css';
import NavBar from '../../Components/navBar/navbar';
import {useEffect, useState} from "react";
import Annonces_vu_voyageur from "../../Components/annonces_vue_voyageur/annonces_vue_voyageur";



function ProfilAutre() {

    const [mesAnnonces, setMesAnnonces] = useState([]);
    const utilisateur = JSON.parse(localStorage.getItem("User"));

    const data = [{ key: 1, titre: "Ordi", lVente: "Paris, France", lAchat: "Lisbone, Portugal", description: "super ordi topito", profil: "Leo Comte", Prix1: "34,00 €", PrixV: "48,00 €", coutTot: "1526,00 €", etat: "manqueVoyageur" },
        { key: 2, titre: "tablette", lVente: "Madrid, Espagne", lAchat: "Londre, Angleterre", description: "super ordi topito", profil: "Leo Comte", Prix1: "44,00 €", PrixV: "38,00 €", coutTot: "1526,00 €", etat: "manquePayement" },
        { key: 3, titre: "telephone", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", Prix1: "14,00 €", PrixV: "68,00 €", coutTot: "1526,00 €", etat: "acheminement" },
        { key: 4, titre: "Cookies Canadiens", lVente: "Chicoutimi, Canada", lAchat: "Paris, France",description: "super ordi topito", profil: "Leo Comte", Prix1: "24,00 €", PrixV: "58,00 €", coutTot: "1526,00 €", etat: "manqueVoyageur" }]

    useEffect(() => {
        async function fetchMesAnnonces() {
            console.log(utilisateur.id);
            const response = await fetch(`http://localhost:8080/api/annonce/user?idUser=${utilisateur.id}`);
            const data = await response.json();
            console.log(data);
            setMesAnnonces(data);
            console.log(mesAnnonces);
        }
        fetchMesAnnonces();
    }, []);

    return(
    <div className='page'>
        <div className='zone_navBar'>
            <NavBar/>
        </div>
        <div className='div_body' >
            <div id={"profil_"}>
                <div id={"profil_photo_nom"}>
                    <img className="photoProfil" src={'/../../images/photo_profil.png'} alt='Schémas' />
                    <div id={'div_nom_'}>
                        <p className={'text_prenom'}>Prenom <br/> Nom </p>
                    </div>
                </div>
                <div>
                    <p className={'text_caracteristique'}> 34 achats | 41 voyages </p>
                    <p className={'text_caracteristique'}>35 annonces postées </p>
                    <button id={'envoyer_msg'} >
                        <div> <i className="logo_message fa-regular fa-envelope"></i> </div>
                        <div id={'div_text_bouton'}> <strong>Envoyer un message</strong> </div>
                    </button>
                </div>
            </div>
            <div id={"annonce_"}>
                <p><strong>Annonces</strong></p>
                {data.map(dataprop => <Annonces_vu_voyageur id={dataprop.key} titre={dataprop.titre} lVente={dataprop.lVente} lAchat={dataprop.lAchat} description={dataprop.description} profil={dataprop.profil} typeContrepartie={dataprop.typeContrepartie} prix1={dataprop.Prix1} prixV={dataprop.PrixV} coutTot={dataprop.coutTot} ></Annonces_vu_voyageur>)}
            </div>
        </div>
    </div>)
}
export default ProfilAutre;