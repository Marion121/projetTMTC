import './avancementCreationAnnonce.css'

function AvancementCreationAnnonce(props){

    if(props.etatAvancement==1){
        return(
            <div className='wrapperGeneralAvancement'>
                <div id='etape1' className='wrapperAvancement'>
                    <button className='buttonAvancement troisPoints'><strong>...</strong></button><h2>Detail du Produit</h2>
                </div>
                <div id='etape2' className='wrapperAvancement'>
                    <button className='buttonAvancement'></button><h2>Prix d'acheminement du Produit</h2>
                </div>
                <div id='etape3' className='wrapperAvancement'>
                    <button className='buttonAvancement'></button><h2>Recapitulatif de votre annonce</h2>
                </div>
            </div>
        );
    }
    else if(props.etatAvancement==2){
        return(
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
    else{
        return(
            <div className='wrapperGeneralAvancement'>
                <div id='etape1' className='wrapperAvancement'>
                    <h2><i class="logoAvancementGood logoCheck fa-solid fa-circle-check"></i>Detail du Produit</h2>
                </div>
                <div id='etape2' className='wrapperAvancement'>
                <h2><i class="logoAvancementGood logoCheck fa-solid fa-circle-check"></i>Prix d'acheminement du Produit</h2>
                </div>
                <div id='etape3' className='wrapperAvancement'>
                    <button className='buttonAvancement'></button><h2>Recapitulatif de votre annonce</h2>
                </div>
            </div>
        );
    }
    
    
}

export default AvancementCreationAnnonce;