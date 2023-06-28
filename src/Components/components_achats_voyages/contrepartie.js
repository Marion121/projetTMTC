import './contrepartie.css'
import { useState, useEffect } from 'react';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function Contrepartie(props) {
    const [langue, setLangue] = useState(français);

    useEffect( () => {
        setLangue(anglais);
    })

    return (
        <div className="contrepartie">
            <h3>{langue.MES_ACHATS_VOYAGES.contrepartie}</h3>
            <div id='pratique'>
                <div className={"div_boutton_text"}>
                    <button className={"bouton_logo_c"} > <i className="logo1 fa-solid fa-bag-shopping"></i>
                    </button><h1 className='prixContrepartieMesAnnonces desactive'> {props.prix*0.06+1} {props.devise} </h1>
                </div>
                <div className={"div_boutton_text"}>
                <button className={"bouton_logo_c"} > <i className="logo2 fa-solid fa-plane-departure"></i>
                </button><h1 className='prixContrepartieMesAnnonces active'> {props.prix*0.1+1} {props.devise} </h1>
                </div>
            </div>
            
        </div>
    )
}

export default Contrepartie;