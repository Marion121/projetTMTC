import './contrepartie.css'
import { useState, useEffect } from 'react';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function Contrepartie(props) {
    const [langue, setLangue] = useState(français);
    const utilisateur = JSON.parse(localStorage.getItem("User"));


    useEffect( () => {
        setLangue(anglais);
        console.log("utilisateur : ", utilisateur.id)
        console.log("acheteur : ", props.acheteurID)
    })

    return (
        <div className="contrepartie">
            <h3>{langue.MES_ACHATS_VOYAGES.contrepartie}</h3>
            <div id='pratique'>
                <div className={"div_boutton_text"}>
                    <button className={"bouton_logo_c"} > <i className="logo1 fa-solid fa-bag-shopping"></i>
                    </button><h3 className={`prixContrepartieMesAnnonces ${(utilisateur.id == props.acheteurID) ? 'active' : 'desactive'}`}> {props.prix*0.06+1} {props.devise} </h3>
                </div>
                <div className={"div_boutton_text"}>
                <button className={"bouton_logo_c"} > <i className="logo2 fa-solid fa-plane-departure"></i>
                </button><h3 className={`prixContrepartieMesAnnonces ${(utilisateur.id == props.voyageurID) ? 'active' : 'desactive'}`}> {props.prix*0.1+1} {props.devise} </h3>
                </div>
            </div>
            
        </div>
    )
}

export default Contrepartie;