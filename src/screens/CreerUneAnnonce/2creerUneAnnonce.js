import NavBar from '../../Components/navBar/navbar';
import './2creerUneAnnonce.css'
import '../css_general.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../donness';
import AvancementCreationAnnonce from '../../Components/AvancementCreationAnnonce/avancementCreationAnnonce';

function CreerUneAnnonce2() {
    const paysDepart = useAppStore((state) => state.CreationAnnonce.paysDepart);
    const villeArrivee = useAppStore((state) => state.CreationAnnonce.villeArrivee);
    const image = useAppStore((state) => state.CreationAnnonce.photo);
    const poids = useAppStore((state) => state.CreationAnnonce.poids);
    const titre = useAppStore((state) => state.CreationAnnonce.titre);
    const description = useAppStore((state) => state.CreationAnnonce.description);
    const setCreationAnnonce = useAppStore((state) => state.setCreationAnnonce);

    const navigate = useNavigate();

    const [prix, setPrix] = useState("");
    const [devise, setDevise] = useState("€");
    const [clickedAcheteur, setClickedAcheteur] = useState(false);
    const [clickedVoyageur, setClickedVoyageur] = useState(false);


    function goCreerAnnonce3() {
        navigate('/creerUneAnnonce3');
    }

    function handleClickAcheteur(){
        setClickedAcheteur(!clickedAcheteur);
    }

    function handleClickVoyageur(){
        setClickedVoyageur(!clickedVoyageur);
    }

    function handleChangePrix(e) {
        setPrix(e.target.value);
    }

    function handleChangeDevise(e){
        setDevise(e.target.value);
    }

    function saveDataCreationAnnonce() {
        setCreationAnnonce({
            paysDepart: paysDepart,
            villeArrivee: villeArrivee,
            photo: image,
            poids: poids,
            titre: titre,
            description: description,
            prixAchats: prix,
            devise: devise,
            besoinAcheteur: false,
            besoinVoyageur: false,
        });
        goCreerAnnonce3();
    }



    return (
        <div className='pageCreeruneAnnonce2'>
            <div className='zone_navBar'>
                <NavBar />
            </div>

            <div id='wrapperPageCreationAnnonce2'>
                <h1>Prix et acheminement du produit</h1>
                <div id='sousWrapperPageCreationAnnonce2'>
                    <div id='divPrixDevise'>
                        <div id='divPrix'>
                            <label>Prix d'achat du produit</label><br />
                            <input className="Input" type="text" placeholder="8888.88" name="prixAchats" onChange={handleChangePrix} required></input>
                        </div>
                        <div id='divDevise'>
                            <label>Devise</label><br />
                            <select className='contour_bleu' onChange={handleChangeDevise}>
                                <option>€</option>
                                <option>$</option>
                                <option>£</option>
                            </select>
                        </div>

                    </div>
                    <div id='acheminementProduit'>
                        <label>Acheminement du produit <span>(cliquez ici pour selectionner)</span></label>

                        <div id='divAcheteur' className={`${clickedAcheteur ? 'divClicked' : ''} contour_bleu`} onClick={handleClickAcheteur}>
                            <div className='divImageGauche'>
                                <i class="logoImageGauche1 fa-solid fa-bag-shopping"></i>
                            </div>
                            <div className='divDetail'>
                                <div className='divTextDetail'>
                                    J'ai besoin d'un acheteur :
                                </div>
                                <div className='divPaysDetail'>
                                    Allemagne, Europe
                                </div>
                            </div>
                            <div className='divContrepartie'>
                                <div className='divTextContrepartie'>
                                    Contrepartie à votre charge :
                                </div>
                                <div className='divPrixContrepartie'>
                                    45€
                                </div>
                            </div>
                        </div>
                        <div id='divVoyageur' className={`${clickedVoyageur ? 'divClicked' : ''} contour_bleu`} onClick={handleClickVoyageur}>
                            <div className='divImageGauche'>
                                <i class="logoImageGauche2 fa-solid fa-plane-up"></i>
                            </div>
                            <div className='divDetail'>
                                <div className='divTextDetail'>
                                    J'ai besoin d'un voyageur :
                                </div>
                                <div className='divPaysDetail2'>
                                    <p id="PpaysDepart">Allemagne, Europe</p>
                                    <i class="logo_fleche fa-solid fa-arrow-right"></i>
                                    <p id="PpaysArrivee">Montréal, Canada, Amérique du nord</p>
                                </div>
                            </div>
                            <div className='divContrepartie'>
                                <div className='divTextContrepartie'>
                                    Contrepartie à votre charge :
                                </div>
                                <div className='divPrixContrepartie'>
                                    45€
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='boutonPrecedent' >Precedent</button>
                <input type="submit" className='boutonSuivant btn_orange' onClick={saveDataCreationAnnonce} value="Suivant"></input>
                

            </div>
            <div id='avancement'>
                <AvancementCreationAnnonce etatAvancement={2} />
            </div>
        </div>
    );
}

export default CreerUneAnnonce2;
