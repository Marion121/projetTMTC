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
        console.log(props.devise) 
       })


    return (
        <div className={'div_prix'} >

            <div className={'div_contrepartie'}>
                <p className={"text_contrepartie"}>{langue.COMPONENT_ANNONCE.contrepartie} <i className="fa-solid fa-bag-shopping"></i></p>
                <p className={"text_prix"}>{(props.coutTot*0.06 +1).toFixed(2)} {props.devise}</p>
            </div>
            <div className={'div_contrepartie'}>
                <p className={"text_contrepartie"}>{langue.COMPONENT_ANNONCE.contrepartie} <i className="fa-solid fa-plane-departure"></i></p>
                <p className={"text_prix"}>{(props.coutTot*0.1 +1).toFixed(2)} {props.devise}</p>
            </div>
            <div className={'div_cout_tot'}>
                <p className={"text_contrepartie"}>{langue.COMPONENT_ANNONCE.coutProduit}</p>
                <p className={"text_prix_tot"}><strong>{props.coutTot} {props.devise}</strong></p>
            </div>
        </div>
    );
}

export default Prix_annonces;