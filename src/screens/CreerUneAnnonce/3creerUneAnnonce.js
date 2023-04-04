import NavBar from '../../Components/navBar/navbar';
import './3creerUneAnnonce.css'
import '../css_general.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../donness';
import AvancementCreationAnnonce from '../../Components/AvancementCreationAnnonce/avancementCreationAnnonce';

function CreerUneAnnonce3() {
    const CreationAnnonce = useAppStore((state) => state.CreationAnnonce);
    const setCreationAnnonce = useAppStore((state) => state.setCreationAnnonce)
    const User = useAppStore((state) => state.User);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    function goCreerAnnonce2() {
        navigate('/creerUneAnnonce2');
    }

    let finaliserCreationAnnonce = async (e) => {
        const annoncesEnvoyee = {
            description: CreationAnnonce.description,
            devise: CreationAnnonce.devise,
            image: "CreationAnnonce.photo",
            ville : CreationAnnonce.villeArrivee,
            pays : {
                id : 2,
                nom : CreationAnnonce.paysDepart
            },
            ville : CreationAnnonce.villeArrivee,
            user : User,
            titre : CreationAnnonce.titre,
            prix : parseInt(CreationAnnonce.prixAchats),
            poids : 3,
            categorie : "categorie", // ??
            codePostal : "92220", //sert a rien
            degreImportance : "1",  // ??
            typeLivraison : "rapide", // voyageur = main propre, sinon poste
            validite : true,
            id : 0
        };
        console.log(annoncesEnvoyee);
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/api/annonce", {
                method: "POST",
                headers: {    
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify(annoncesEnvoyee),
            });
            let resJson = await res.json();
            if (res.OK) {
                setCreationAnnonce({
                    paysDepart: "",
                    villeArrivee: "",
                    photo: null,
                    poids: "",
                    titre: "",
                    description: "",
                    prixAchats: "",
                    devise: "",
                    besoinAcheteur: false,
                    besoinVoyageur: false,
                });
                setMessage("User created successfully");
                navigate('/Annonces');
            } else {
                setMessage("Some error occured");
            }
            console.log(message);
        } catch (err) {
            console.log(err);
        }
    };

    

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
                            <p>{CreationAnnonce.titre}</p>
                        </div>
                        <div id='divPaysAchat'>
                            <h3>Pays d'achat</h3>
                            <p>{CreationAnnonce.paysDepart}</p>
                        </div>
                        <div id='divVilleLivraison'>
                            <h3>Ville de livraison</h3>
                            <p>{CreationAnnonce.villeArrivee}</p>
                        </div>
                    </div>
                    <div id='divPhotoPrix'>
                        <div id='divPhotoAnnonce' className='contour_bleu'>
                            <img className='imageAnonce' src={CreationAnnonce.photo} alt="image" name='imageAnnonce' />
                        </div>
                        <div id='divPrixAnnonce'>
                            <h3>Prix du produit</h3>
                            <p>{CreationAnnonce.prixAchats} {CreationAnnonce.devise}</p>
                        </div>
                    </div>
                </div>
                <div id='divDescription'>
                    <h3>Description</h3>
                    <p>{CreationAnnonce.description}</p>
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

                <button className='boutonPrecedent' onClick={goCreerAnnonce2}>Precedent</button>
                <input type="submit" className='boutonSuivant btn_orange' value="Valider" onClick={finaliserCreationAnnonce}></input>
            </div>
            <div id='avancement'>
                <AvancementCreationAnnonce etatAvancement={3} />
            </div>
        </div>
    );
}

export default CreerUneAnnonce3;