import './actions.css'
import { useState, useEffect } from 'react';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function Actions() {
    const [langue, setLangue] = useState(français);

    useEffect( () => {
        setLangue(anglais);
    })
    return (
        <div className="actions">
            <h3>{langue.MES_ACHATS_VOYAGES.actionAttente}</h3>
            <div className='div_conteneur_golbal'>
                <div className={"div_ligne"}>
                    <button id={"bouton_valide"}>
                        <i className="fa-solid fa-check"></i>
                    </button><p className='text_option'>{langue.MES_ACHATS_VOYAGES.actionAcheter} </p>
                </div>
                <div className={"div_ligne"}>
                    <button id={"bouton_3pt"}>
                        <strong>...</strong>
                    </button>
                    <p className='text_option'>{langue.MES_ACHATS_VOYAGES.actionLivraison}</p>
                </div>
            </div>
        </div>
    );
}

export default Actions;