import NavBar from "../../Components/navBar/navbar.js";
import './mesAchatsEtVoyages.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import AchatsVoyages from "../../Components/achats_voyages/Achats_Voyages.js";
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function MesAchatsEtVoyages() {
    const [langue, setLangue] = useState(français);

    useEffect( () => {
        if(localStorage.getItem("Langue") == "anglais"){
            setLangue(anglais);
        }else{
            setLangue(français);
        }
    })

    return (
        <div className="page_mes_achats">
            <div className="zone_navBar">
                <NavBar />
            </div>
            <div className="container_mes_achats">
                <h1>{langue.MES_ACHATS_VOYAGES.titre}</h1>
                <AchatsVoyages />
            </div>
        </div>

    );
}

export default MesAchatsEtVoyages;