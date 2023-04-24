import NavBar from "../../Components/navBar/navbar.js";
import './mesAchatsEtVoyages.css'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import AchatsVoyages from "../../Components/achats_voyages/Achats_Voyages.js";
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function MesAchatsEtVoyages() {

    return (
        <div className="page_mes_achats">
            <div className="zone_navBar">
                <NavBar />
            </div>
            <div className="container_mes_achats">
                <h1>Mes achats et voyages</h1>
                <AchatsVoyages />
            </div>
        </div>

    );
}

export default MesAchatsEtVoyages;