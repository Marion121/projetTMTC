import NavBar from '../../Components/navBar/navbar';
import './3creerUneAnnonce.css'
import '../css_general.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../donness';
import AvancementCreationAnnonce from '../../Components/AvancementCreationAnnonce/avancementCreationAnnonce';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function CreerUneAnnonce3() {
    const CreationAnnonce = useAppStore((state) => state.CreationAnnonce);
    const setCreationAnnonce = useAppStore((state) => state.setCreationAnnonce)
    const User = useAppStore((state) => state.User);
    const [message, setMessage] = useState("");
    const [langue, setLangue] = useState(français);


    useEffect(() => {
        console.log(localStorage.getItem("Langue"));
        if (localStorage.getItem("Langue") == "anglais") {
            setLangue(anglais);
        } else {
            setLangue(français);
        }
        //setLangue(anglais);
        console.log("ok");
    })

    const navigate = useNavigate();

    function goCreerAnnonce2() {
        navigate('/creerUneAnnonce2');
    }

    let finaliserCreationAnnonce = async (e) => {
        console.log("depar", CreationAnnonce.paysDepart);
        console.log("arrive", CreationAnnonce.paysArriver);
        console.log(CreationAnnonce.photo.length);
        const annoncesEnvoyee = {
            description: CreationAnnonce.description,
            devise: CreationAnnonce.devise,
            image: CreationAnnonce.photo,
            villeArriver: CreationAnnonce.villeArrivee,
            paysDepart: {
                id: CreationAnnonce.paysDepart.id,
                nom: CreationAnnonce.paysDepart.nom
            },
            paysArriver: {
                id: CreationAnnonce.paysArriver.id,
                nom: CreationAnnonce.paysArriver.nom
            },
            user: JSON.parse(localStorage.getItem("User")),
            titre: CreationAnnonce.titre,
            prix: parseInt(CreationAnnonce.prixAchats),
            poids: 3,
            categorie: "categorie", // ??
            codePostal: "", //sert a rien
            degreImportance: CreationAnnonce.degreImportance,  // ??
            typeLivraison: (CreationAnnonce.clickedVoyageur) ? "main propre" : "poste", // voyageur = main propre, sinon poste
            validite: true,
            id: "",
            date: "2",
            avancement: "2",
        };
        console.log(annoncesEnvoyee);
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/api/annonce", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(annoncesEnvoyee),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setCreationAnnonce({
                    paysDepart: { id: 1, nom: "Afghanistan" },
                    paysArriver: { id: 1, nom: "Afghanistan" },
                    villeArrivee: "",
                    photo: null,
                    poids: "",
                    titre: "",
                    description: "",
                    prixAchats: "",
                    devise: "€",
                    degreImportance: "Normal",
                    besoinAcheteur: true,
                    besoinVoyageur: true,
                });
                setMessage("User created successfully");
                navigate('/Annonces');
            } else {
                setMessage("Some error occured");
            }
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
                <h1>{langue.CREER_ANNONCE_3.titrePage}</h1>

                <div id='divPremierePartieRecapitulatif'>
                    <div id='divTitreDestination'>
                        <div id='divTitreAnnonce'>
                            <h3>{langue.CREER_ANNONCE_3.titreAnnonce}</h3>
                            <p>{CreationAnnonce.titre}</p>
                        </div>
                        <div id='divPaysAchat'>
                            <h3>{langue.CREER_ANNONCE_3.paysAchat}</h3>
                            <p>{CreationAnnonce.paysDepart.nom}</p>
                        </div>
                        <div id='divVilleLivraison'>
                            <h3>{langue.CREER_ANNONCE_3.villeLivraison}</h3>
                            <p>{CreationAnnonce.villeArrivee}</p>
                        </div>
                    </div>
                    <div id='divPhotoPrix'>
                        <div id='divPhotoAnnonce' className='contour_bleu'>
                            <img className='imageAnonce' src={CreationAnnonce.photo} alt="image" name='imageAnnonce' />
                        </div>
                        <div id='divPrixAnnonce'>
                            <h3>{langue.CREER_ANNONCE_3.prixProduit}</h3>
                            <p>{CreationAnnonce.prixAchats} {CreationAnnonce.devise}</p>
                        </div>
                    </div>
                </div>
                <div id='divDescription'>
                    <h3>{langue.CREER_ANNONCE_3.description}</h3>
                    <p>{CreationAnnonce.description}</p>
                </div>
                <div id='divCommission'>
                    <div id='divCommissionAcheteur'>
                        <h3>{langue.CREER_ANNONCE_3.commissionA}</h3>

                    </div>
                    <div id='divCommissionVoyageur'>
                        <h3>{langue.CREER_ANNONCE_3.commissionV}</h3>

                    </div>
                    <div id='divCommissionBWOB'>
                        <h3>{langue.CREER_ANNONCE_3.commissionBwob}</h3>

                    </div>
                </div>
                <div id='divPrixTotal'>
                    <h3>{langue.CREER_ANNONCE_3.prixTot}</h3>
                </div>
                <div id='divNote'>
                    {langue.CREER_ANNONCE_3.texte}
                </div>

                <button className='boutonPrecedent' onClick={goCreerAnnonce2}>{langue.CREER_ANNONCE_G.precedent}</button>
                <input type="submit" className='boutonSuivantAnnonce btn_orange' value={langue.CREER_ANNONCE_G.suivant} onClick={finaliserCreationAnnonce}></input>
            </div>
            <div id='avancement'>
                <AvancementCreationAnnonce etatAvancement={3} />
            </div>
        </div>
    );
}

export default CreerUneAnnonce3;