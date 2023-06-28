import './produit_mon_annonce.css'
import Photo_annonces from '../components_annonces/photo_annonces.js'
import { useAppStore } from '../../donness.js'
import { useState, useEffect } from 'react';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function Produit_mon_annonce(prop) {
    const nom = useAppStore((state) => state.User.Nom);
    const prenom = useAppStore((state) => state.User.Prenom);
    const photo = useAppStore((state) => state.User.photo);
    const [langue, setLangue] = useState(français);


    useEffect( () => {
        setLangue(anglais);
    })
    
    if(prop.typeProfil =="mesAnnonces"){
        return (
            <div className="produit_container">
                <div id='div_autour_photo'>
                    <Photo_annonces annonce={prop.annonce} imageURL={prop.imageURL} taille="boutons_photo" style="border : solid;" />
                </div>
                <div id='description_achatsVoyages'>
                    <h3 id={"titre_profil"}>{prop.titre} </h3>
                    <div className='informationProduits'>
                        < br />
                        <p className={'text_lieu'}><i className="logo_lieu_vente fa-solid fa-bag-shopping"></i> {prop.annonce.paysDepart.nom} </p>
                        <p className={'text_lieu'}><i className="logo_achat fa-solid fa-plane-departure"></i> {prop.annonce.paysArriver.nom}, {prop.annonce.villeArriver} </p>
                    </div>
                    <div className='div_nomsActeur'>
                        <button id={"bouton_valise"} className={"bouton_logo"}>
                            <i className="fa-solid fa-bag-shopping"></i>
                        </button>
                        <h4 className='titre_nom'>
                            <u>{prop.acheteur} </u>
                        </h4>
                        <button className={"bouton_logo"}>
                            <i className="fa-solid fa-plane-departure"></i>
                        </button>
                        <h4 className='titre_nom'>
                            <u> {prop.transporteur} </u>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }else{
        return (
            <div className="produit_container">
                <div id='div_autour_photo'>
                    <Photo_annonces annonce={prop.annonce} imageURL={prop.imageURL} taille="boutons_photo" style="border : solid;" />
                </div>
                <div id='description_achatsVoyages'>
                    <h3 id={"titre_profil"}>Produit</h3>
                    <div className='informationProduits'>
                        <div id={"div_profil"}>
                            <img className="PhotoProfilComponentProduit" src={prop.annonce.user.photo} alt='Schémas' />
                            <p className='nomPrenom'>
                                <strong>{prop.annonce.user.prenom} {prop.annonce.user.nom} </strong> 
                            </p>
                        </div>
                        <p className={'text_lieu'}><i className="logo_lieu_vente fa-solid fa-bag-shopping"></i> {prop.annonce.paysDepart.nom}</p>
                        <p className={'text_lieu'}><i className="logo_achat fa-solid fa-plane-departure"></i> {prop.annonce.paysArriver.nom}, {prop.annonce.villeArriver}</p>
                    </div>
                    <div className='div_nomsActeur'>
                        <button id={"bouton_valise"} className={"bouton_logo"}> <i className="fa-solid fa-bag-shopping"></i> </button><h4 className='titre_nom'> <u> {prop.acheteur}  </u> </h4>
                        <button className={"bouton_logo"}><i className="fa-solid fa-plane-departure"></i></button><h4 className='titre_nom'> <u> {prop.voyageur} </u> </h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Produit_mon_annonce;