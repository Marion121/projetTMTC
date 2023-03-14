import NavBar from '../../Components/navBar/navbar';
import './3creerUneAnnonce.css'
import '../css_general.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../donness';
import AvancementCreationAnnonce from '../../Components/AvancementCreationAnnonce/avancementCreationAnnonce';

function CreerUneAnnonce3() {
    const CreationAnnonce = useAppStore((state) => state.CreationAnnonce);
    const paysDepart = useAppStore((state) => state.CreationAnnonce.paysDepart);
    const villeArrivee = useAppStore((state) => state.CreationAnnonce.villeArrivee);
    const image = useAppStore((state) => state.CreationAnnonce.photo);
    const poids = useAppStore((state) => state.CreationAnnonce.poids);
    const titre = useAppStore((state) => state.CreationAnnonce.titre);
    const description = useAppStore((state) => state.CreationAnnonce.description);
    const prix = useAppStore((state) => state.CreationAnnonce.prixAchats);
    const devise = useAppStore((state) => state.CreationAnnonce.devise);


    return (
        <div className='pageCreeruneAnnonce3'>
            <div className='zone_navBar'>
                <NavBar />
            </div>
            <div id='wrapperPageCreationAnnonce3'>
                <h1>Récapitulatif de votre annonce</h1>

                <div id='divPremierePartieRecapitulatif'>
                    <div id='divTitreDestination'>
                        <div id='divTitreAnnonce'>
                            <h3>Titre de l'annonce</h3>
                            <p>{titre}</p>
                        </div>
                        <div id='divPaysAchat'>
                            <h3>Pays d'achat</h3>
                            <p>{paysDepart}</p>
                        </div>
                        <div id='divVilleLivraison'>
                            <h3>Ville de livraison</h3>
                            <p>{villeArrivee}</p>
                        </div>
                    </div>
                    <div id='divPhotoPrix'>
                        <div id='divPhotoAnnonce' className='contour_bleu'>
                            <img className='imageAnonce' src={image} alt="image" name='imageAnnonce' />
                        </div>
                        <div id='divPrixAnnonce'>
                            <h3>Prix du produit</h3>
                            <p>{prix}{devise}</p>
                        </div>
                    </div>
                </div>
                <div id='divDescription'>
                    <h3>Description</h3>
                    <p>{description}</p>
                </div>
                <div id='divCommission'>
                    <div id='divCommissionAcheteur'>
                        <h3>Commission de l'acheteur</h3>

                    </div>
                    <div id='divCommissionVoyageur'>
                        <h3>Commission du voyageur</h3>

                    </div>
                    <div id='divCommissionBWOB'>
                        <h3>Commission de BWob</h3>

                    </div>
                </div>
                <div id='divPrixTotal'>
                    <h3>Prix total</h3>
                </div>
                <div id='divNote'>
                    Cette somme sera à régler ...
                </div>

                <button className='boutonPrecedent' >Precedent</button>
                <input type="submit" className='boutonSuivant btn_orange' value="Valider" ></input>
            </div>
            <div id='avancement'>
                <AvancementCreationAnnonce etatAvancement={3} />
            </div>
        </div>
    );
}

export default CreerUneAnnonce3;