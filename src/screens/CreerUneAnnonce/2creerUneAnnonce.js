import NavBar from '../../Components/navBar/navbar';
import './2creerUneAnnonce.css'
import '../css_general.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../donness';
import AvancementCreationAnnonce from '../../Components/AvancementCreationAnnonce/avancementCreationAnnonce';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function CreerUneAnnonce2() {
    const CreationAnnonce = useAppStore((state) => state.CreationAnnonce);
    const setCreationAnnonce = useAppStore((state) => state.setCreationAnnonce);

    const navigate = useNavigate();

    const [prix, setPrix] = useState(CreationAnnonce.prixAchats);
    const [degreImportance, setDegImportance] = useState(CreationAnnonce.degreImportance);
    const [devise, setDevise] = useState(CreationAnnonce.devise);
    const [clickedAcheteur, setClickedAcheteur] = useState(CreationAnnonce.besoinAcheteur);
    const [clickedVoyageur, setClickedVoyageur] = useState(CreationAnnonce.besoinVoyageur);
    const [langue, setLangue] = useState(français);

    useEffect( () => {
        if(localStorage.getItem("Langue") == "anglais"){
            setLangue(anglais);
        }else{
            setLangue(français);
        }
        //setLangue(anglais);
        console.log("degImportance : " , degreImportance);
    })

    function goCreerAnnonce3() {
        navigate('/creerUneAnnonce3');
    }

    function goCreerAnnonce() {
        navigate('/creerUneAnnonce');
    }

    function handleClickAcheteur() {
        if(clickedVoyageur){
            setClickedAcheteur(!clickedAcheteur);
        }else{
            alert("Il doit y avoir au moins un acheteur ou un voyageur");
        }
        
    }

    function handleClickVoyageur() {
        if(clickedAcheteur){
            setClickedVoyageur(!clickedVoyageur);
        }else{
            alert("Il doit y avoir au moins un acheteur ou un voyageur");
        }
    }

    function handleChangePrix(e) {
        setPrix(e.target.value);
    }

    function handleChangeDevise(e) {
        setDevise(e.target.value);
    }

    function handleChangeDegImportance(e) {
        setDegImportance(e.target.value);
    }

    function saveDataCreationAnnonce() {
            setCreationAnnonce({
                paysDepart: CreationAnnonce.paysDepart,
                paysArriver: CreationAnnonce.paysArriver,
                villeArrivee: CreationAnnonce.villeArrivee,
                photo: CreationAnnonce.photo,
                poids: CreationAnnonce.poids,
                titre: CreationAnnonce.titre,
                description: CreationAnnonce.description,
                prixAchats: prix,
                devise: devise,
                degreImportance: degreImportance,
                besoinAcheteur: clickedAcheteur,
                besoinVoyageur: clickedVoyageur,
            });
            console.log(CreationAnnonce.degreImportance);
            goCreerAnnonce3();
    }



    return (
        <div className='pageCreeruneAnnonce2'>
            <div className='zone_navBar'>
                <NavBar />
            </div>

            <div id='wrapperPageCreationAnnonce2'>
                <form method='POST' onSubmit={saveDataCreationAnnonce}>
                    <h1>{langue.CREER_ANNONCE_2.titre}</h1>
                    <div id='sousWrapperPageCreationAnnonce2'>
                        <div id='divPrixDevise'>
                            <div id='divPrix'>
                                <label>{langue.CREER_ANNONCE_2.prix}</label><br />
                                <input className="contour_bleu" type="text" pattern="[0-9]*" placeholder="8888.88" name="prixAchats" value={prix} onChange={handleChangePrix} required></input>
                            </div>
                            <div id='divDevise'>
                                <label>{langue.CREER_ANNONCE_2.devise}</label><br />
                                <select className='contour_bleu' value={devise} onChange={handleChangeDevise} >
                                    <option>€</option>
                                    <option>$</option>
                                </select>
                            </div>
                            <div id='divDegImportance'>
                                <label>{langue.CREER_ANNONCE_2.degImportance}</label><br />
                                <select className='contour_bleu' onChange={handleChangeDegImportance} >
                                    <option>{langue.CREER_ANNONCE_2.degImportanceN}</option>
                                    <option>{langue.CREER_ANNONCE_2.degImportanceU}</option>
                                </select>
                            </div>
                        </div>
                        <div id='acheminementProduit'>
                            <label>{langue.CREER_ANNONCE_2.acheminement} <span>({langue.CREER_ANNONCE_2.cliquerIci})</span></label>

                            <div id='divAcheteur' className={`${clickedAcheteur ? 'divClicked' : ''} contour_bleu`} onClick={handleClickAcheteur}>
                                <div className='divImageGauche'>
                                    <i class="logoImageGauche1 fa-solid fa-bag-shopping"></i>
                                </div>
                                <div className='divDetail'>
                                    <div className='divTextDetail'>
                                        {langue.CREER_ANNONCE_2.acheteur}
                                    </div>
                                    <div className='divPaysDetail'>
                                        {CreationAnnonce.paysDepart.nom}
                                    </div>
                                </div>
                                <div className='divContrepartie'>
                                    <div className='divTextContrepartie'>
                                        {langue.CREER_ANNONCE_2.contrepartie}
                                    </div>
                                    <div className='divPrixContrepartie'>
                                        {(prix*0.06+1).toFixed(2)} {devise}
                                    </div>
                                </div>
                            </div>
                            <div id='divVoyageur' className={`${clickedVoyageur ? 'divClicked' : ''} contour_bleu`} onClick={handleClickVoyageur}>
                                <div className='divImageGauche'>
                                    <i class="logoImageGauche2 fa-solid fa-plane-up"></i>
                                </div>
                                <div className='divDetail'>
                                    <div className='divTextDetail'>
                                        {langue.CREER_ANNONCE_2.voyageur}
                                    </div>
                                    <div className='divPaysDetail2'>
                                        <p id="PpaysDepart">{CreationAnnonce.paysDepart.nom}</p>
                                        <i class="logo_fleche fa-solid fa-arrow-right"></i>
                                        <p id="PpaysArrivee">{CreationAnnonce.villeArrivee}, {CreationAnnonce.paysArriver.nom}</p>
                                    </div>
                                </div>
                                <div className='divContrepartie'>
                                    <div className='divTextContrepartie'>
                                        {langue.CREER_ANNONCE_2.contrepartie}
                                    </div>
                                    <div className='divPrixContrepartie'>
                                        {(prix*0.1+1).toFixed(2)} {devise}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='boutonPrecedent' onClick={goCreerAnnonce}>{langue.CREER_ANNONCE_G.precedent}</button>
                    <input type="submit" className='boutonSuivantAnnonce btn_orange' value={langue.CREER_ANNONCE_G.suivant}></input>

                </form>
            </div>
            <div id='avancement2'>
                <AvancementCreationAnnonce etatAvancement={2} />
            </div>
        </div>
    );
}

export default CreerUneAnnonce2;
