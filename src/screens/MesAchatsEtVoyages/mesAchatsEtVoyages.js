import NavBar from "../../Components/navBar/navbar.js";
import './mesAchatsEtVoyages.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import AchatsVoyages from "../../Components/achats_voyages/Achats_Voyages.js";
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function MesAchatsEtVoyages() {
    const [langue, setLangue] = useState(français);
    const [achats, setAchats] = useState([]);
    const [voyages, setVoyages] = useState([]);
    const utilisateur = JSON.parse(localStorage.getItem("User"));


    useEffect(() => {
        if (localStorage.getItem("Langue") == "anglais") {
            setLangue(anglais);
        } else {
            setLangue(français);
        }
        async function getAchats() {
            let response = await fetch(`http://localhost:8080/api/offre/acheteur/byUser?id=${utilisateur.id}`)
            const data = await response.json();
            setAchats(data);
        }
        getAchats();
        async function getVoyages() {
            let response = await fetch(`http://localhost:8080/api/offre/voyageur/byUser?id=${utilisateur.id}`)
            const data = await response.json();
            console.log(data)
            setVoyages(data);
        }
        getVoyages();
    }, [])


    return (
        <div className="page_mes_achats">
            <div className="zone_navBar">
                <NavBar />
            </div>
            <div className="container_mes_achats">
                <h1>{langue.MES_ACHATS_VOYAGES.titre1}</h1>
                {achats.map(dataprop => <AchatsVoyages titre={dataprop.annonce.titre} user={dataprop.acheteur.user} annonce={dataprop.annonce} prix={dataprop.prix} devise={dataprop.devise} imageURL={dataprop.annonce.image} etat="manqueVoyageur" ></AchatsVoyages>)}
                <h1>{langue.MES_ACHATS_VOYAGES.titre2}</h1>
                {voyages.map(dataprop => <AchatsVoyages titre={dataprop.annonce.titre} user={dataprop.voyageur.user} annonce={dataprop.annonce} prix={dataprop.prix} devise={dataprop.devise} imageURL={dataprop.annonce.image} etat="manqueVoyageur" ></AchatsVoyages>)}
            </div>
        </div>

    );
}

export default MesAchatsEtVoyages;