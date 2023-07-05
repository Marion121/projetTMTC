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
import moment from "moment/moment";

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
/*
        if(localStorage.getItem("Langue") == "anglais"){
            setLangue(anglais);
        }else{
            setLangue(français);
        }*/
        setLangue(français);
        
    }, []);

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
                    {userNonValide.map(dataprop => <Valide_id id={dataprop.id} nom={dataprop.nom} prenom={dataprop.prenom}  dateN={moment(dataprop.dateNaissance).format('DD/MM/YYYY')} idFace={dataprop.ci} idDos={dataprop.jd} valider={dataprop.valider}></Valide_id>)}
                </div>
                
            </div>
        </div>

    </div>)
}

export default Admin;