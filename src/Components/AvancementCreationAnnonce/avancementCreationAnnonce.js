import './avancementCreationAnnonce.css'
import { useState, useEffect } from 'react';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function AvancementCreationAnnonce(props) {
    const [langue, setLangue] = useState(français);

    useEffect(() => {
        setLangue(français);
    })

    if (props.etatAvancement == 1) {
        return (
            <div className='wrapperGeneralAvancement'>
                <div id='etape1' className='wrapperAvancement'>
                    <button className='buttonAvancement troisPoints'><strong>...</strong></button><span><h2>{langue.CREER_ANNONCE_G.detailProduit}</h2></span>
                </div>
                <div id='etape2' className='wrapperAvancement'>
                    <button className='buttonAvancement'></button><h2>{langue.CREER_ANNONCE_G.prixProduit}</h2>
                </div>
                <div id='etape3' className='wrapperAvancement'>
                    <button className='buttonAvancement'></button><h2>{langue.CREER_ANNONCE_G.recapitulatif}</h2>
                </div>
            </div>
        );
    }
    else if (props.etatAvancement == 2) {
        return (
            <div className='wrapperGeneralAvancement'>
                <div id='etape1' className='wrapperAvancement'>
                    <h2><i class="logoAvancementGood logoCheck fa-solid fa-circle-check"></i>Detail du Produit</h2>
                </div>
                <div id='etape2' className='wrapperAvancement'>
                    <button className='buttonAvancement troisPoints'><strong>...</strong></button><h2>Prix d'acheminement du Produit</h2>
                </div>
                <div id='etape3' className='wrapperAvancement'>
                    <button className='buttonAvancement'></button><h2>Recapitulatif de votre annonce</h2>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='wrapperGeneralAvancement'>
                <div id='etape1' className='wrapperAvancement'>
                    <h2><i class="logoAvancementGood logoCheck fa-solid fa-circle-check"></i>Detail du Produit</h2>
                </div>
                <div id='etape2' className='wrapperAvancement'>
                <button className='buttonAvancement'><i class="logoAvancementGood logoCheck fa-solid fa-circle-check"></i></button><h2>Prix d'acheminement du Produit</h2>
                </div>
                <div id='etape3' className='wrapperAvancement'>
                    <button className='buttonAvancement'></button><h2>Recapitulatif de votre annonce</h2>
                </div>
            </div>
        );
    }


}

export default AvancementCreationAnnonce;