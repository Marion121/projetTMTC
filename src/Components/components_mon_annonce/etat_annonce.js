import './etat_annonce.css'
import { useState, useEffect } from 'react';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'


const Swal = require('sweetalert2')


function Etat_annonce(props) {
    const comAcheteur = 35 ;
    const comBwob = 10 ;
    const comVoyageur = 45 ;
    const coutProduit = 1278 ;
    const totalCom = comAcheteur + comBwob +  comVoyageur;
    const totalDiffere= 1278 ;
    const total =  totalCom + totalDiffere ;
    const [langue, setLangue] = useState(français);

    useEffect( () => {
        setLangue(français);
    })

    if (props.typeEtat == "manqueVoyageur") {
        return (
            <div className="actions">
                <h4 className={"titre_element_annonces"}>{langue.MES_ANNONCES.etat}</h4>
                <br/>
                <p id={"text_manque_voyageur"}><strong>{langue.MES_ANNONCES.attenteVoyageurAcheteur}</strong></p>
            </div>
        );
    } else if (props.typeEtat == "manquePayement") {
        return (
            <div className="actions">
                <h4 className={"titre_element_annonces"}>{langue.MES_ANNONCES.etat}</h4>
                <p id={"text_attente_payement"}><strong>{langue.MES_ANNONCES.attentePayement}</strong></p>
                <p id={"text_payement"}><strong>{langue.MES_ANNONCES.modePayement}</strong></p>
                <div id={"div_bouton_payement"}>
                    <button className={"bouton_payement"} id="myBtn" onClick={()=>{payement()}}><i
                        className="fa-regular fa-credit-card"></i> {langue.MES_ANNONCES.modeCarte}
                    </button>
                    <button className={"bouton_payement"} onClick={()=>{payement()}}>
                        <i className="fa-solid fa-money-bill-1-wave"></i> {langue.MES_ANNONCES.modeEspece}

                    </button>
                </div>
            </div>
        );
    } else if (props.typeEtat == "acheminement") {
        return (
            <div className="actions">
                <h4 className={"titre_element_annonces"}>{langue.MES_ANNONCES.etat}</h4>
                <div className={"div_ligne"}>
                    <button className={"bouton_valide"}>
                        <i className="fa-solid fa-check"></i>
                    </button>
                    <p className='text_option'>{langue.MES_ANNONCES.produitAchete} </p>
                </div>
                <div className={"div_ligne"}>
                    <button className={"bouton_3pt"}>
                        <i className="fa-solid fa-ellipsis"></i>
                    </button>
                    <p className='text_option'><strong>{langue.MES_ANNONCES.enCours}</strong></p>
                </div>
                <div className={"div_ligne"}>
                    <button className={"bouton_vide"}>

                    </button>
                    <p className='text_option'> {langue.MES_ANNONCES.livré} </p>
                </div>
            </div>
        );
    } else if (props.typeEtat == "acheminementLivré") {
        return (
            <div className="actions">
                <h4 className={"titre_element_annonces"}>Etat</h4>
                <div className={"div_ligne"}>
                    <button className={"bouton_valide"}>
                        <i className="fa-solid fa-check"></i>
                    </button>
                    <p className='text_option'>Produit acheté </p>
                </div>
                <div className={"div_ligne"}>
                    <button className={"bouton_valide"}>
                        <i className="fa-solid fa-check"></i>
                    </button>
                    <p className='text_option'>En cours d'acheminement</p>
                </div>
                <div className={"div_ligne"}>
                    <button className={"bouton_valide"}>
                        <i className="fa-solid fa-check"></i>
                    </button>
                    <p className='text_option'><strong>Livré</strong></p>
                </div>
            </div>
        );
    }
    function payement() {

        Swal.fire({
            html:
                `<div class="div_entete"><b>${langue.POP_UP_PAYEMENT_1.titre}</b></div>` +
                '<div class="conteur_general_pop_up">' +
                `<b id="text_detail">${langue.POP_UP_PAYEMENT_1.detailsModalites}</b> ` +
                '<div id="div_1" class="conteur_pop_up">' +
                `<p class="texte">${langue.POP_UP_PAYEMENT_1.commissionA}</p>` +
                `<p class="prix"><strong>${comAcheteur}  €</strong></p>` +
                `<p class="texte">${langue.POP_UP_PAYEMENT_1.remboursementA}</p>` +
                `<p class="prix"><strong>${coutProduit} €</strong></p>` +
                '<ul class ="liste">' +
                `<li> <input type="checkbox"> ${langue.POP_UP_PAYEMENT_1.carte} </input></li>` +
                `<li class="messagre_grisé"> <i class="fa-solid fa-square"></i> ${langue.POP_UP_PAYEMENT_1.espece} </li>` +
                '</ul>' +
                `<p class="texte_info">${langue.POP_UP_PAYEMENT_1.especeImpossibleA}</p>` +
                '</div>' +
                '<div id="div_2" class="conteur_pop_up">' +
                `<p class="texte">${langue.POP_UP_PAYEMENT_1.commissionV}</p>` +
                `<p class="prix"><strong>${comVoyageur} €</strong></p>` +
                '<ul class ="liste">' +
                `<li> <input type="radio" name="myRadioGroup"> ${langue.POP_UP_PAYEMENT_1.carte}</input> </li>` +
                `<li > <input type="radio" name="myRadioGroup"> ${langue.POP_UP_PAYEMENT_1.espece}</input> </li>` +
                '</ul>' +
                '</div>' +
                '<div id="div_3" class="conteur_pop_up">' +
                `<p class="texte">${langue.POP_UP_PAYEMENT_1.commissionBwob}</p>` +
                `<p class="prix"><strong>${comBwob} €</strong></p>` +
                '<ul class ="liste">' +
                `<li> <input type="checkbox"> ${langue.POP_UP_PAYEMENT_1.commissionBwob} </input></li>` +
                `<li class="messagre_grisé"> <i class="fa-solid fa-square"></i> ${langue.POP_UP_PAYEMENT_1.carte} </li>` +
                '</ul>' +
                `<p class="texte_info"> ${langue.POP_UP_PAYEMENT_1.especeImpossibleBwob} </p>` +
                '</div>' +
                '</div>',
            customClass: 'swal-wide',
            heightAuto: true,
            padding: '0',
            color: '#0f0f10',
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonText: `${langue.POP_UP_PAYEMENT_1.annuler}`,
            confirmButtonColor: '#f59446',
            confirmButtonText: `${langue.POP_UP_PAYEMENT_1.payement}`,
            cancelButtonAriaLabel: 'Thumbs down',

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    html: `<div class="div_entete"><b>${langue.POP_UP_PAYEMENT_2.titre}</b></div>` +
                        '<div class="conteur_general_pop_up">' +
                        '<div id="conteur_pop_up_CB">' +
                        `<p class="texte_CB">${langue.POP_UP_PAYEMENT_2.numCarte}</p>` +
                        '<input id="input_nbr_cb" class="input i_CB" type="text" placeholder="1234 5678 9012 3456"> </input>' +
                        '<div id="div_input_CB">' +
                        '<div id="div_CB_date">' +
                        `<p id="text_date" class="texte_CB"> ${langue.POP_UP_PAYEMENT_2.dateExpi} </p>` +
                        '<input id="input_date"  class="input i_CB" type="text" placeholder="MM/AA"></input>' +
                        '</div>' +
                        '<div id="div_CB_CVV">' +
                        `<p id="text_CVV" class="texte_CB"> ${langue.POP_UP_PAYEMENT_2.cvv} </p>` +
                        '<input id="input_CVV" class="input i_CB" type="text" placeholder="123"></input>' +
                        '</div>' +
                        '</div>' +
                        `<p id="description_en_gris"> ${langue.POP_UP_PAYEMENT_2.donnesPerso} </p>` +
                        '</div>' +
                        '<div id="conteur_recap_CB">' +
                        `<p class="grand_titre"><strong> ${langue.POP_UP_PAYEMENT_2.montantRegler} </strong></p>` +
                        '<div class="div_ligne_prix">' +
                        `<span class="span_text"> ${langue.POP_UP_PAYEMENT_1.commissionA} </span>` +
                        `<span class="span_prix">${comAcheteur} €</span>` +
                        '</div>' +
                        '<div class="div_ligne_prix">' +
                        `<span class="span_text"> ${langue.POP_UP_PAYEMENT_1.commissionBwob} </span>` +
                        `<span class="span_prix">${comBwob} €</span>` +
                        '</div>' +
                        '<div class="div_ligne_prix">' +
                        `<span class="span_text"> ${langue.POP_UP_PAYEMENT_1.commissionV} </span>` +
                        `<span class="span_prix">${comVoyageur} €</span>` +
                        '</div>' +
                        `<p class="grand_titre"><strong> ${langue.POP_UP_PAYEMENT_2.montantDiffere} <i class="fa-regular fa-circle-question"></i></strong></p>` +
                        '<div id="souligner" class="div_ligne_prix">' +
                        `<span class="span_text"> ${langue.POP_UP_PAYEMENT_2.coutProduit} </span>` +
                        `<span class="span_prix">${coutProduit} €</span>` +
                        '</div>' +
                        '<div class="div_ligne_prix_fin">' +
                        `<span class="span_text_small"><strong> ${langue.POP_UP_PAYEMENT_2.total} </strong></span>` +
                        `<span class="span_prix_big">${totalCom} €</span>` +
                        '</div>' +
                        '<div class="div_ligne_prix_fin">' +
                        `<span class="span_text_small"><strong> ${langue.POP_UP_PAYEMENT_2.montantDiffere} </strong></span>` +
                        `<span class="span_prix_big">${totalDiffere} €</span>` +
                        '</div>' +
                        '</div>' +
                        '</div>',
                    customClass: 'swal-wide',
                    heightAuto: true,
                    padding: '0',
                    color: '#0f0f10',
                    showCloseButton: true,
                    showConfirmButton: true,
                    confirmButtonColor: '#32c570',
                    confirmButtonText: `<strong>${langue.POP_UP_PAYEMENT_2.payer} ${total} €</strong>`,
                    confirmButtonmarginbottom : '10px'
                })
            }
        })

    }
}


export default Etat_annonce;