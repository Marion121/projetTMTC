import NavBar from '../../Components/navBar/navbar';
import "./detailAnnonce.css";
import "../css_general.css";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'
import { useNavigate } from 'react-router-dom';
import Popup1 from "../../Components/components_annonces/popup";
import moment from "moment";


function DetailAnnonce() {
    const [isOpen, setIsOpen] = useState(false);

    const [clickedAcheteur, setClickedAcheteur] =  useState(false);
    const [clickedVoyageur, setClickedVoyageur] =  useState(false);
    const [nbrJour, setnbrJour] =  useState("");
    const [prix, setprix] = useState(0);
    const prixAcheteur = 45;
    const prixvoyageur = 45;
    const [isChecked, setIsChecked] = useState(false);
    const utilisateur = JSON.parse(localStorage.getItem("User"));
    const [langue, setLangue] = useState(français);
    let [annonce, setAnnonce] = useState([]);
    let [userAnnonce, setUserAnnonce] = useState([]);
    const { id } = useParams();
    const idUserAnnonce = userAnnonce.id;

    const Swal = require('sweetalert2')

    const [alreadyVoyageur, setAlreadyVoyageur] = useState()
    const [alreadyAcheteur, setAlreadyAcheteur] = useState()

    let navigate = useNavigate();

    function goProfil() {
        navigate(`/Profil/${idUserAnnonce}`, { state: { idUserAnnonce: idUserAnnonce } });
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    const handlePopup = () => {
        setIsOpen(!isOpen);
        setIsChecked(false);
        setClickedAcheteur(false);
        setClickedVoyageur(false);
        setprix(0);
    }

    function OffreRefuse(message) {
        Swal.fire({
            title: "Impossible",
            text: message,
            icon: "error",
            confirmButtonColor: '#0093FF',
            confirmButtonText: 'OK'
        });
    };

    const handlePopupAcheteurVoyageur = () => {
        if (alreadyAcheteur || alreadyVoyageur) {
            OffreRefuse("Il y a déjà un acheteur ou un voyageur")
        } else {
            setIsOpen(!isOpen);
            setIsChecked(false);
            setClickedAcheteur(true);
            setClickedVoyageur(true);
            setprix(prixAcheteur + prixvoyageur);
        }

    }

    const handlePopupAcheteur = () => {
        if (alreadyAcheteur) {
            OffreRefuse("Il y a déjà un acheteur")
        } else {
            setIsOpen(!isOpen);
            setIsChecked(false);
            setClickedAcheteur(true);
            setClickedVoyageur(false);
            setprix(prixAcheteur);
        }

    }

    const handlePopupVoyageur = () => {
        if (alreadyVoyageur) {
            OffreRefuse("Il y a déjà un voyageur")
        } else {
            setIsOpen(!isOpen);
            setIsChecked(false);
            setClickedAcheteur(false);
            setClickedVoyageur(true);
            setprix(prixvoyageur);
        }

    }

    async function handlePopupValidate() {
        if (clickedAcheteur) {
            const responseAcheteur = await fetch(`http://localhost:8080/api/acheteur`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: JSON.parse(localStorage.getItem("User"))
                })
            });
            const acheteur = await responseAcheteur.json();
            console.log("Acheteur", acheteur)
            const responseOffreAcheteur = await fetch(`http://localhost:8080/api/offre/acheteur`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prix: annonce.prix,
                    poids: annonce.poids,
                    devise: annonce.devise,
                    acheteur: acheteur,
                    annonce: annonce
                })
            });
        }
        if (clickedVoyageur) {
            const responseVoyageur = await fetch(`http://localhost:8080/api/voyageur`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: JSON.parse(localStorage.getItem("User"))
                })
            });
            const voyageur = await responseVoyageur.json();
            console.log("Voyageur", voyageur)
            const responseOffreVoyageur = await fetch(`http://localhost:8080/api/offre/voyageur`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prix: annonce.prix,
                    poids: annonce.poids,
                    devise: annonce.devise,
                    voyageur: voyageur,
                    annonce: annonce
                })
            });
        }
        setIsOpen(!isOpen);
        setIsChecked(false);
        setClickedAcheteur(false);
        setClickedVoyageur(false);
        setprix(0);
    }

    function handleClickAcheteur() {
        setClickedAcheteur(!clickedAcheteur);
        if (!clickedAcheteur) {
            setprix(prix + prixAcheteur);
        } else {
            setprix(prix - prixAcheteur);
        }
    }

    function handleClickVoyageur() {
        setClickedVoyageur(!clickedVoyageur);
        if (!clickedVoyageur) {
            setprix(prix + prixvoyageur);
        } else {
            setprix(prix - prixvoyageur);
        }
    }

    function calculDate(){
        var dateCreation = annonce.date
        console.log("date crea", dateCreation)
        //var dateCreaFormatt = moment(annonce.date).format('DD/MM/YYYY')
        var dateAujourdhui = new Date();
        console.log("date today", dateAujourdhui)
        //var dateAujourdhuiFormatt = moment(dateAujourdhui).format('DD/MM/YYYY')
        var differenceMs = dateAujourdhui -dateCreation  ;

        console.log(differenceMs)
        var differenceJours = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
        console.log(differenceJours)
        if(1< differenceJours <8){
            setnbrJour(langue.DETAIL_ANNONCE.debutDate + differenceJours + langue.DETAIL_ANNONCE.finDate)
        }else if(7< differenceJours){
            setnbrJour(moment(annonce.date).format('DD/MM/YYYY'))
        }else{
            setnbrJour(langue.DETAIL_ANNONCE.aujourdhui)
        }

    }

    useEffect(() => {
        async function Details() {
            const response = await fetch(`http://localhost:8080/api/annonce?id=${id}`);
            const data = await response.json();
            console.log(data);
            setAnnonce(data);
            setUserAnnonce(data.user);
            console.log(annonce);
            console.log(userAnnonce);

            setLangue(anglais);

            var dateCreation = data.date
            console.log("date crea", dateCreation)
            var dateAujourdhui = new Date();
            console.log("date today", dateAujourdhui)
            var differenceMs = dateAujourdhui -dateCreation  ;

            console.log(differenceMs)
            var differenceJours = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
            console.log(differenceJours)
            if (differenceJours == 0){
                setnbrJour(langue.DETAIL_ANNONCE.aujourdhui)
            }else if(1<differenceJours<8){
                setnbrJour(langue.DETAIL_ANNONCE.debutDate + differenceJours + langue.DETAIL_ANNONCE.finDate)
            }
        }
        Details();
        setLangue(anglais);
        async function getOffreAcheteur() {
            let response = await fetch(`http://localhost:8080/api/offre/acheteur/annonce?idAnnonce=${id}`)
            try {
                const data = await response.json();
                setAlreadyAcheteur(true);
            } catch (e) {
                setAlreadyAcheteur(false);
            }
        }
        getOffreAcheteur()
        async function getOffreVoyageur() {
            let response = await fetch(`http://localhost:8080/api/offre/voyageur/annonce?idAnnonce=${id}`)
            try {
                const data = await response.json();
                setAlreadyVoyageur(true);
            } catch (e) {
                setAlreadyVoyageur(false);
            }
        }
        getOffreVoyageur();

    }, []);



    return (
        <div id='divPageDetail'>
            <div className='zone_navBar'>
                <NavBar />
            </div>
            <div id='divWrapperDetail'>
                <div id='divEnteteDetail'>
                    <div id='divTitre'>
                        <h1>{annonce.titre}</h1>
                    </div>
                    <div id='divNomDate'>
                        <div id='divNom'>
                            <span id='spanImageDetail'><img className="photoProfil photoDetailAnnonce" src={userAnnonce.photo} alt='Schémas' /></span>
                            <span id='spanNom' onClick={goProfil}> {userAnnonce.prenom} {userAnnonce.nom}</span>
                        </div>
                        <div id='divDate'>
                            {nbrJour}
                        </div>
                    </div>
                </div>
                <div id='divInfosOffre'>
                    <div id='divImage'>
                        <img id='imageProduit' src={annonce.image} alt='photoProduit' />
                    </div>
                    <div id='divPrixDescription'>
                        <div id='divPrixDetail'>
                            <div id='divContrepartie1' className='div_contrepartie_detailAnnonce'>
                                <p className={"text_contrepartie_detailAnnonce"}>{langue.COMPONENT_ANNONCE.contrepartie} <i className="fa-solid fa-bag-shopping"></i></p>
                                <p className={"text_prix_detailAnnonce"}><strong>{annonce.prix * 0.06 + 1} {annonce.devise}</strong></p>
                            </div>
                            <div id='divContrepartie2' className='div_contrepartie_detailAnnonce'>
                                <p className={"text_contrepartie_detailAnnonce"}>{langue.COMPONENT_ANNONCE.contrepartie} <i className="fa-solid fa-plane-departure"></i></p>
                                <p className={"text_prix_detailAnnonce"}><strong>{annonce.prix * 0.1 + 1} {annonce.devise}</strong></p>
                            </div>
                            <div id='divContrepartie3' className='div_contrepartie_detailAnnonce'>
                                <p className={"text_contrepartie_detailAnnonce"}><strong>{langue.COMPONENT_ANNONCE.coutProduit} </strong> <br />
                                    <strong>{annonce.prix} {annonce.devise}</strong></p>
                            </div>

                        </div>
                        <div id='divDescription'>
                            <p>{annonce.description}</p>
                        </div>
                    </div>
                </div>
                <div id='divAction'>
                    <div id='divAcheterLivre' className='bordure'>
                        <span onClick={handlePopupAcheteurVoyageur}> <i className="fa-solid fa-plane-departure logoGauche"></i><i className="fa-solid fa-bag-shopping logoDroite"></i><span>{langue.DETAIL_ANNONCE.acheterLivrer}</span></span>
                    </div>
                    <div id='divAcheter' className='bordure'>
                        <span onClick={handlePopupAcheteur} > <i className="fa-solid fa-bag-shopping logoGauche"></i>{langue.DETAIL_ANNONCE.acheter}</span>
                    </div>
                    <div id='divLivrer' className='bordure'>
                        <span onClick={handlePopupVoyageur} > <i className="fa-solid fa-plane-departure logoGauche"></i>{langue.DETAIL_ANNONCE.livrer}</span>
                    </div>
                </div>
                <div id='divAstuce'>
                    <div id='divTitreAstuce'>
                        <strong> {langue.DETAIL_ANNONCE.titreAstuce}</strong>
                    </div>
                    <div id='divTextAstuce'>
                        <span> {langue.DETAIL_ANNONCE.descriptionAstuce} </span>
                    </div>
                </div>
            </div>
            {isOpen && <Popup1
                content={<>
                    <div id={"général"}>
                        <div className="div_entete">
                            <b>{langue.POP_UP_INSCRIPTION.titre}</b>
                        </div>
                        <div id="acheminementProduit1">
                            <label id="titreproduit"><strong>{annonce.titre}</strong></label>
                            <br></br>
                            <label id="texteAcheminement">
                                <strong> {langue.POP_UP_INSCRIPTION.acheminementProduit}
                                    <span id="texteparenthése">({langue.POP_UP_INSCRIPTION.cliquerIci})</span>
                                </strong>
                            </label>
                            <div id="divAcheteur1" className={`${clickedAcheteur ? 'divClicked' : ''} contour_bleu`} onClick={handleClickAcheteur}>
                                <div className="divImageGauche">
                                    <i className="logoImageGauche1 fa-solid fa-bag-shopping"></i>
                                </div>
                                <div className="divTextDetail">
                                    <p>{langue.POP_UP_INSCRIPTION.acheteur}</p>
                                    <p className="divtextBig"><strong>{annonce.paysDepart.nom} </strong></p>
                                </div>
                                <div className="divCoutProduit">
                                    <p><strong>{langue.POP_UP_INSCRIPTION.coutProduit} </strong></p>
                                    <p className="divtextBig"><strong> {annonce.prix} {annonce.devise} </strong></p>
                                    <p id="text_Indication_Rembourssement">{langue.POP_UP_INSCRIPTION.rembourser} </p>
                                </div>
                                <div className="divContrepartie1">
                                    <p className="divTextContrepartie">{langue.POP_UP_INSCRIPTION.contrepartie}</p>
                                    <p className="divtextBig prixC"><strong> {prixAcheteur}€ </strong></p>
                                </div>
                            </div>
                            <div id="divVoyageur1" className={`${clickedVoyageur ? 'divClicked' : ''} contour_bleu`} onClick={handleClickVoyageur}>
                                <div className="divImageGauche">
                                    <i className="logoImageGauche2 fa-solid fa-plane-up"></i>
                                </div>
                                <div id="divDetailV">
                                    <div id="textVoyageur" className="divTextDetail">
                                        {langue.POP_UP_INSCRIPTION.voyageur}
                                    </div>
                                    <div className="divVoyage">
                                        <div className="divtextBig" id="divPaysDepat">
                                            <strong> {annonce.paysDepart.nom} </strong>
                                        </div>
                                        <div id="divfleche" className="divtextBig">
                                            <i className="logo_fleche fa-solid fa-arrow-right"></i>
                                        </div>
                                        <div className="divtextBig" id="divPaysArrive">
                                            <strong>{annonce.paysArriver.nom} {annonce.villeArriver}</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="divContrepartie1">
                                    <p className="divTextContrepartie"> {langue.POP_UP_INSCRIPTION.contrepartie}</p>
                                    <p className="divtextBig prixC"><strong> {prixvoyageur}€</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="divTot">
                            <div id="divTotText">
                                <p className="textBig"><strong> {langue.POP_UP_INSCRIPTION.total} </strong></p>
                                <p className="textTot"><strong> {langue.POP_UP_INSCRIPTION.contreparties} </strong></p>
                            </div>
                            <div id="divTotPrix">
                                <p className="divtextBig prixTot"><strong>{prix}€</strong></p>
                            </div>
                        </div>
                        <div className="divRadioBouton1" onClick={handleCheckboxChange}>
                            {isChecked ? (
                                <i className="fa-solid fa-circle" alt="Checked"></i>
                            ) : (
                                <i className="fa-regular fa-circle" alt="Unchecked" ></i>
                            )}
                            <span><strong> {langue.POP_UP_INSCRIPTION.condition}</strong></span>
                        </div>
                    </div>

                </>}
                handleClose={handlePopup}
                handleValidate={handlePopupValidate}
            />}
        </div >
    )
}

export default DetailAnnonce;