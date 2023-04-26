import './prix_annonces.css';
import { useState, useEffect } from 'react';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function Prix_annonces(props) {
    var div_1_cache = "Hidden={\"false\"}";
    var div_2_cache = "Hidden={\"false\"}";

    const [langue, setLangue] = useState(français);

    useEffect( () => {
        setLangue(anglais);
    })

   /* function affichage() {
        if (props.typeContrepartie.equals("div_contrepartie_1")) {
            div_1_cache = "Hidden={\"true\"}";
            div_2_cache = "Hidden={\"false\"}";
        }
        if (props.typeContrepartie.equals("div_contrepartie_2")) {
            div_1_cache = "Hidden={\"false\"}";
            div_2_cache = "Hidden={\"true\"}";
        }
        if (props.typeContrepartie.equals("div_contrepartie")) {
            div_1_cache = "Hidden={\"false\"}";
            div_2_cache = "Hidden={\"false\"}";
        }
    }
    onload(affichage);*/

    return (
        <div className={'div_prix'} >

            <div className={'div_contrepartie'}>
                <p className={"text_contrepartie"}>{langue.COMPONENT_ANNONCE.contrepartie} <i className="fa-solid fa-bag-shopping"></i></p>
                <p className={"text_prix"}>{props.prix1}</p>
            </div>
            <div className={'div_contrepartie'}>
                <p className={"text_contrepartie"}>{langue.COMPONENT_ANNONCE.contrepartie} <i className="fa-solid fa-plane-departure"></i></p>

                <p className={"text_prix"}>{props.prixV}</p>
            </div>
            <div className={'div_cout_tot'}>
                <p className={"text_contrepartie"}>{langue.COMPONENT_ANNONCE.coutProduit}</p>
                <p className={"text_prix_tot"}><strong>{props.coutTot}</strong></p>
            </div>
        </div>
    );
}

export default Prix_annonces;