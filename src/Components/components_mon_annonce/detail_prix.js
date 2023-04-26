import './detail_prix.css'
import { useState, useEffect } from 'react';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function Detail_prix(prop) {

    const [langue, setLangue] = useState(français);

    useEffect( () => {
        setLangue(anglais);
    })

    return (
        <div className="contrepartie">
            <h4 className={"titre_element_annonces"}>{langue.MES_ANNONCES.detailsPrix}</h4>
            <div id={"div_détails_du_prix"}>
                <div id={"div_prix_global"}>
                    <div className={"div_prix_annonces"}>
                        <p className={"text_prix"}> {prop.Prix1} {prop.devise}</p>
                        <button className={"bouton_logo_petit"} id={"bouton_valise_2"}> <i className="fa-solid fa-bag-shopping"></i> </button>
                        <i className="icon_question fa-sharp fa-solid fa-circle-question"></i>
                    </div>
                    <div className={"div_prix_annonces"}>
                        <p className={"text_prix"}> {prop.PrixVol} {prop.devise}</p>
                        <button className={"bouton_logo_petit"}><i className="fa-solid fa-plane-departure"></i></button>
                        <i className="icon_question fa-sharp fa-solid fa-circle-question"></i>
                    </div>
                    <div className={"div_prix_annonces"}>
                        <p className={"text_prix"}> {prop.Prix3} {prop.devise}</p>
                        <i className="icon_question fa-sharp fa-solid fa-circle-question"></i>
                    </div>
                    <div className={"div_prix_annonces"}>
                        <p className={"text_prix"}> {prop.PrixProduit} {prop.devise}</p>
                        <i className="icon_question fa-sharp fa-solid fa-circle-question"></i>
                    </div>
                </div>
                <div id={"div_prix_tot"}>
                    <p id={"titre_prix_tot"}><strong>{langue.MES_ANNONCES.total}</strong></p>
                    <p id={"text_val_prix_tot"}><strong>{prop.coutTot} {prop.devise}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Detail_prix;