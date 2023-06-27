import './photo_annonces.css';
import React, { useState } from "react";
import 'reactjs-popup/dist/index.css';
import Popup1 from "./popup";
import { useEffect } from 'react';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

const Swal = require('sweetalert2')

function Photo_annonces(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [clickedAcheteur, setClickedAcheteur] = useState(false);
    const [clickedVoyageur, setClickedVoyageur] = useState(false);
    const [prix, setprix] = useState(0);
    const prixAcheteur = 45;
    const prixvoyageur = 45;
    const [isChecked, setIsChecked] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const [langue, setLangue] = useState(français);

    useEffect(() => {
        async function getOffreAcheteur(){
            let response = await fetch(`http://localhost:8080/api/offre/acheteur/annonce?idAnnonce=${props.annonce.id}`)
            try{
                const data = await response.json();
                setIsHidden(true);
            }catch(e){
                setIsHidden(false);
            }
        }
        getOffreAcheteur()
        async function getOffreVoyageur(){
            let response = await fetch(`http://localhost:8080/api/offre/voyageur/annonce?idAnnonce=${props.annonce.id}`)
            try{
                const data = await response.json();
                setIsHidden(true);
            }catch(e){
                setIsHidden(false);
            }
        }
        getOffreVoyageur();
    })

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

    const handlePopupAcheteur = () => {
        setIsOpen(!isOpen);
        setIsChecked(false);
        setClickedAcheteur(true);
        setClickedVoyageur(false);
        setprix(prixAcheteur);
    }

    const handlePopupVoyageur = () => {
        setIsOpen(!isOpen);
        setIsChecked(false);
        setClickedAcheteur(false);
        setClickedVoyageur(true);
        setprix(prixvoyageur);
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
            const responseOffreAcheteur = await fetch(`http://localhost:8080/api/offre/acheteur?id=2`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prix: props.annonce.prix,
                    poids: props.annonce.poids,
                    devise: props.annonce.devise,
                    acheteur: acheteur,
                    annonce: props.annonce
                })
            });
        } else if (clickedVoyageur) {
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
                    prix: props.annonce.prix,
                    poids: props.annonce.poids,
                    devise: props.annonce.devise,
                    voyageur: voyageur,
                    annonce: props.annonce
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

    return (
        <div className={'div_photo'} style={{ background: `url(${props.imageURL}) no-repeat` }}>
            <input
                className={props.taille}
                type="button"
                value={langue.COMPONENT_ANNONCE.achat}
                onClick={handlePopupAcheteur}
                style={{
                    display: isHidden ? 'none' : '',
                  }}
            />
            <input
                className={props.taille}
                type="button"
                value={langue.COMPONENT_ANNONCE.voyage}
                onClick={handlePopupVoyageur}
            />
            {isOpen && <Popup1
                content={<>
                    <div id={"général"}>
                        <div className="div_entete">
                            <b>{langue.POP_UP_INSCRIPTION.titre}</b>
                        </div>
                        <div id="acheminementProduit1">
                            <label id="titreproduit"><strong>Titre produit</strong></label>
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
                                    <p className="divtextBig"><strong>Allemagne, Europe </strong></p>
                                </div>
                                <div className="divCoutProduit">
                                    <p><strong>{langue.POP_UP_INSCRIPTION.coutProduit} </strong></p>
                                    <p className="divtextBig"><strong> 1330,00€ </strong></p>
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
                                            <strong> Allemagne, Europe</strong>
                                        </div>
                                        <div id="divfleche" className="divtextBig">
                                            <i className="logo_fleche fa-solid fa-arrow-right"></i>
                                        </div>
                                        <div className="divtextBig" id="divPaysArrive">
                                            <strong>Montréal, Canada, Amérique du nord</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="divContrepartie1">
                                    <p className="divTextContrepartie">{langue.POP_UP_INSCRIPTION.contrepartie}</p>
                                    <p className="divtextBig prixC"><strong> {prixvoyageur}€</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="divTot">
                            <div id="divTotText">
                                <p className="textBig"><strong>{langue.POP_UP_INSCRIPTION.total} </strong></p>
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
        </div>)

}






export default Photo_annonces;


/* return(
     <div id="content"></div>
 );


 class Popup extends React.Component {

     render() {
         const [clickedAcheteur, setClickedAcheteur] = false;
         const [clickedVoyageur, setClickedVoyageur] = false;
         const [prix, setprix] =0;
         const prixAcheteur = 45 ;
         const prixvoyageur = 45 ;

         function handleClickAcheteur(){
             setClickedAcheteur(!clickedAcheteur);
             console.log("test");
             if(clickedAcheteur){
                 setprix(prix + prixAcheteur);
             }else{
                 setprix(prix - prixAcheteur);
             }
         }

         function handleClickVoyageur(){
             setClickedVoyageur(!clickedVoyageur);
             setprix(prix + prixvoyageur);
         }

         return (
             <div className='popup'>
                 <div className='popup_inner'>
                         <div className="div_entete">
                             <b>S\'inscrire à une annonces</b>
                         </div>
                         <div id="acheminementProduit1">
                             <label id="titreproduit"><strong>Titre produit</strong></label>
                             <br></br>
                             <label id="texteAcheminement">
                                 <strong> Acheminement du produit
                                     <span id="texteparenthése">(cliquez ici pour selectionner)</span>
                                 </strong>
                             </label>
                             <div id="divAcheteur1" onClick={handleClickAcheteur}>
                                 <div className="divImageGauche">
                                     <i className="logoImageGauche1 fa-solid fa-bag-shopping"></i>
                                 </div>
                                 <div className="divTextDetail">
                                     <p>Je peux être un acheteur</p>
                                     <p className="divtextBig"><strong>Allemagne, Europe </strong></p>
                                 </div>
                                 <div className="divCoutProduit">
                                     <p><strong>Coût du produit: </strong></p>
                                     <p className="divtextBig"><strong> 1330,00€ </strong></p>
                                     <p id="text_Indication_Rembourssement">vous serez remboursé losque le produit
                                         aura éié livré. </p>
                                 </div>
                                 <div className="divContrepartie1">
                                     <p className="divTextContrepartie">Contrepartie que vous recevrez :</p>
                                     <p className="divtextBig prixC"><strong> ${prixAcheteur}€ </strong></p>
                                 </div>
                             </div>
                         </div>
                         <div id="divVoyageur1" onClick={handleClickVoyageur}>
                             <div className="divImageGauche">
                                 <i className="logoImageGauche2 fa-solid fa-plane-up"></i>
                             </div>
                             <div id="divDetailV">
                                 <div id="textVoyageur" className="divTextDetail">
                                     Je peux être un voyageur
                                 </div>
                                 <div className="divVoyage">
                                     <div className="divtextBig" id="divPaysDepat">
                                         <strong> Allemagne, Europe</strong>
                                     </div>
                                     <div id="divfleche" className="divtextBig">
                                         <i className="logo_fleche fa-solid fa-arrow-right"></i>
                                     </div>
                                     <div className="divtextBig" id="divPaysArrive">
                                         <strong>Montréal, Canada, Amérique du nord</strong>
                                     </div>
                                 </div>
                             </div>
                             <div className="divContrepartie1">
                                 <p className="divTextContrepartie">Contrepartie que vous recevrez :</p>
                                 <p className="divtextBig prixC"><strong> ${prixvoyageur}€</strong></p>
                             </div>
                         </div>
                     </div>
                     <div className="divTot">
                         <div id="divTotText">
                             <p className="textBig"><strong>Total </strong></p>
                             <p className="textTot"><strong>des contreparties que vous recevez </strong></p>
                         </div>
                         <div id="divTotPrix">
                             <p className="divtextBig prixTot"><strong>${prix}€</strong></p>
                         </div>
                     </div>
                     <div id="divRadioBouton">
                         <input id="inputRadio" type="checkbox"> accepter les conditions général
                             d\'utilisation</input>
                     </div>
             </div>
         );
     }
 }
 class App extends React.Component {
     constructor() {
         super();
         this.state = {
             showPopup: false
         };
     }
     togglePopup() {
         this.setState({
             showPopup: !this.state.showPopup
         });
     }
     render() {
         return (
             <div className='app'>
                 <div className={'div_photo'}>
                     <button className={props.taille}>Achat</button>
                     <button className={props.taille} onClick={this.togglePopup.bind(this)}>Voyage</button>
                 </div>
                 {this.state.showPopup ?
                     <Popup
                         text='Close Me'
                         closePopup={this.togglePopup.bind(this)}
                     />
                     : null
                 }
             </div>
         );
     }
 };

 ReactDOM.render(
     <p>coucou</p>,
     <App />,
     document.getElementById('content')
 );



}
export default Photo_annonces;

/*html:
             '<div class="div_entete"><b>S\'inscrire à une annonces</b></div>' +
             '<div id="acheminementProduit1">'+
             '<label>Acheminement du produit <span>(cliquez ici pour selectionner)</span></label>'+
             '<p id="divAcheteur1" className={`contour_bleu`}>'+
                 '<div className="divImageGauche">'+
                     '<i className="logoImageGauche1 fa-solid fa-bag-shopping"></i>'+
                 '</div>'+
                     '<div className="divTextDetail">Je peux être un acheteur </div>'+
                         '<div className="divPaysDetail">Allemagne, Europe </div>'+
                     '</div>'+
                     '<div className="divTextCout">Coût du produit: </div>'+
                         '<p id="prixProduit">1330,00€ </p>'+
                         '<p id="text_Indication_Rembourssement">vous serez remboursé losque le produit aura éié livré. </p>'+
                     '</div>'+
                 '<div className="divContrepartie">'+
                     '<div className="divTextContrepartie"> Contrepartie à votre charge </div>'+
                     '<div className="divPrixContrepartie"> 45€ </div> ' +
                 '</div>'+
                 '<div id="divVoyageur1" className={` contour_bleu`}>'+
                     '<div className="divImageGauche">'+
                         '<i className="logoImageGauche2 fa-solid fa-plane-up"></i>'+
                     '</div>'+
                     '<div className="divDetail">'+
                         '<div className="divTextDetail">Je peux être un voyageur :</div>' +
                         '<div className="divPaysDetail2">'+
                             '<p id="PpaysDepart1">Allemagne, Europe</p>'+
                             '<i className="logo_fleche fa-solid fa-arrow-right"></i>'+
                             '<p id="PpaysArrivee1">Montréal, Canada, Amérique du nord</p>'+
                         '</div>'+
                     '</div>'+
                     '<div className="divContrepartie">'+
                         '<div className="divTextContrepartie">Contrepartie à votre charge : </div>'+
                         '<div className="divPrixContrepartie"> 45€ </div> ' +
                     '</div>'+
                 '</div>' +
             '</div>',*/