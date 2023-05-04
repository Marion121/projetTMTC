import '../css_general.css'
import './admin.css'
import NavBar from '../../Components/navBar/navbar'
import Valide_id from "../../Components/components_admin/valide_id";
import Annonces_vu_voyageur from "../../Components/annonces_vue_voyageur/annonces_vue_voyageur";
import Valide_annonces from "../../Components/components_admin/valide_annonces";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'
import Admin_gestion_profil from "../Admin_gestion_profil/admin_gestion_profil";

function Admin() {
    const [userNonValide, setUserNonValide]= useState([]);
    const [dataAnnonceRecup, setDataAnnonces] = useState([]);
    const [langue, setLangue] = useState(français);

    let navigate = useNavigate();

    function goAdmin_gestion_profil() {
        navigate('/Admin_gestion_profil');
    }

    useEffect( () => {
        async function getNonValideUser() {
            const response = await fetch(`http://localhost:8080/api/user/invalide?limit=10&offset=0`);
            const dataUser = await response.json();
            console.log(dataUser);
            setUserNonValide(dataUser);
        }
        getNonValideUser();
        if(localStorage.getItem("Langue") == "anglais"){
            setLangue(anglais);
        }else{
            setLangue(français);
        }
        
    }, []);

    const data = [{key:1 , nom:"Comte", prenom : "Leo",dateN :"01/05/2001", idFace : "valise_avion.pnf", idDos : "valise_ouverte.png", valider : "en_attente"},
        {key:2 , nom:"Flamain", prenom : "Vincent",dateN :"01/05/2001", idFace : "valise_avion.pnf", idDos : "valise_ouverte.png", valider : "en_attente"},
        {key:3 , nom:"Lansade", prenom : "Jeanne",dateN :"01/05/2001", idFace : "valise_avion.pnf", idDos : "valise_ouverte.png", valider : "en_attente"},
        {key:4 , nom:"Balzo", prenom : "Tom",dateN :"01/05/2001", idFace : "valise_avion.pnf", idDos : "valise_ouverte.png", valider : "en_attente"}]

    const dataAnnonce = [{ key: 1, titre: "annonces1", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", typeContrepartie: "div_contrepartie", Prix1: "40,00 €", PrixV: "60,00 €", coutTot: "3670,00 €", valider : "en_attente" },
        { key: 2, titre: "annonces2", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", typeContrepartie: "div_contrepartie_1", Prix1: "40,00 €", PrixV: "60,00 €", coutTot: "3670,00 €", valider : "en_attente" },
        { key: 3, titre: "annonces3", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", typeContrepartie: "div_contrepartie_2", Prix1: "40,00 €", PrixV: "60,00 €", coutTot: "3670,00 €", valider : "en_attente" },
        { key: 4, titre: "annonces4", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", typeContrepartie: "div_contrepartie", Prix1: "40,00 €", PrixV: "60,00 €", coutTot: "3670,00 €", valider : "en_attente" }]

    /*useEffect(() =>{
        async function fetchRecherche() {
            let res = (`http://localhost:8080/api/annonce/all?limit=5&offset=0`);
            const dataAnnonce = await res.json();
            console.log(dataAnnonce);
            setDataAnnonces(dataAnnonceRecup);
            console.log(dataAnnonceRecup);
        }
        fetchRecherche();
    }, []);*/


    return(<div className='page'>
        <div className='zone_navBar'>
            <NavBar/>
        </div>
        <div id="div_body_admin" >
            <div className='div_menu'>
                <button className={'boutonOK boutonMenu'} > {langue.ADMIN.menuValidation} </button>
                <button className={'boutonRefuser boutonMenu '} onClick={goAdmin_gestion_profil}> {langue.ADMIN.menuGestionCompte} </button>
            </div>
            <div id = "validation">
                <div className='div_validationCarte' >
                    <p>{langue.ADMIN.ciValider}</p>
                    {data.map(dataprop => <Valide_id  nom={dataprop.nom} prenom={dataprop.prenom}  dateN={dataprop.dateN} idFace={dataprop.idFace} idDos={dataprop.idDos} valider={dataprop.valider}></Valide_id>)}
                </div>
                <div  className='div_validationAnnonce'  >
                    <p>{langue.ADMIN.annoncesValider} </p>
                    <div id={"vue_annonce"}>
                    {dataAnnonce.map(dataAnnonceprop => <Valide_annonces id={dataAnnonceprop.key} titre={dataAnnonceprop.titre} lVente={dataAnnonceprop.lVente} lAchat={dataAnnonceprop.lAchat} description={dataAnnonceprop.description} profil={dataAnnonceprop.profil} typeContrepartie={dataAnnonceprop.typeContrepartie} prix1={dataAnnonceprop.Prix1} prixV={dataAnnonceprop.PrixV} coutTot={dataAnnonceprop.coutTot} valider={dataAnnonceprop.valider}></Valide_annonces>)}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Admin;