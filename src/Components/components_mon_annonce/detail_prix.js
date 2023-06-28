import './detail_prix.css'
import { useState, useEffect } from 'react';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function Detail_prix(prop) {

    const [langue, setLangue] = useState(français);

    const prixTOT = prop.PrixProduit + parseFloat((prop.PrixProduit*0.1 +1).toFixed(2)) + parseFloat((prop.PrixProduit*0.06 +1).toFixed(2)) + parseFloat((prop.PrixProduit*0.08 +1).toFixed(2))

    useEffect( () => {
        setLangue(anglais);
        console.log(typeof (prop.PrixProduit*0.1 +1).toFixed(2))
    })

    return (
        <div className="contrepartie">
            <h4 className={"titre_element_annonces"}>{langue.MES_ANNONCES.detailsPrix}</h4>
            <div id={"div_détails_du_prix"}>
                <div id={"div_prix_global"}>
                    <div className={"div_prix_annonces"}>
                        <p className={"text_prix"}> {(prop.PrixProduit*0.06 +1).toFixed(2)} {prop.devise}</p>
                        <button className={"bouton_logo_petit"} id={"bouton_valise_2"}> <i className="fa-solid fa-bag-shopping"></i> </button>
                        <i className="icon_question fa-sharp fa-solid fa-circle-question"></i>
                    </div>
                    <div className={"div_prix_annonces"}>
                        <p className={"text_prix"}> {(prop.PrixProduit*0.1 +1).toFixed(2)} {prop.devise}</p>
                        <button className={"bouton_logo_petit"}><i className="fa-solid fa-plane-departure"></i></button>
                        <i className="icon_question fa-sharp fa-solid fa-circle-question"></i>
                    </div>
                    <div className={"div_prix_annonces"}>
                        <p className={"text_prix"}> {(prop.PrixProduit*0.08 +1).toFixed(2)} {prop.devise}</p>
                        <i className="icon_question fa-sharp fa-solid fa-circle-question"></i>
                    </div>
                    <div className={"div_prix_annonces"}>
                        <p className={"text_prix"}> {prop.PrixProduit} {prop.devise}</p>
                        <i className="icon_question fa-sharp fa-solid fa-circle-question"></i>
                    </div>
                </div>
                <div id={"div_prix_tot"}>
                    <p id={"titre_prix_tot"}><strong>{langue.MES_ANNONCES.total}</strong></p>
                    <p id={"text_val_prix_tot"}><strong>{prixTOT.toFixed(2)} {prop.devise}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Detail_prix;