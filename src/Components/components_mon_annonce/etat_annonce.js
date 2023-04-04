import './etat_annonce.css'


const Swal = require('sweetalert2')


function Etat_annonce(props) {

    const [open,setOpen]=useState(false);

    if (props.typeEtat == "manqueVoyageur") {
        return (
            <div className="actions">
                <h4 className={"titre_element_annonces"}>Etat</h4>
                <br/>
                <p id={"text_manque_voyageur"}><strong>En attente d'un voyageur et d'un acheteur... </strong></p>
            </div>
        );
    } else if (props.typeEtat == "manquePayement") {
        return (
            <div className="actions">
                <h4 className={"titre_element_annonces"}>Etat</h4>
                <p id={"text_attente_payement"}><strong>En attente du payement...</strong></p>
                <p id={"text_payement"}><strong>Mode de payement</strong></p>
                <div id={"div_bouton_payement"}>
                    <button className={"bouton_payement"} id="myBtn" onClick={()=>{payement()}}><i
                        className="fa-regular fa-credit-card"></i> Par carte
                    </button>
                    <button className={"bouton_payement"}>
                        <i className="fa-solid fa-money-bill-1-wave"></i> En espéces
                    </button>
                </div>
            </div>
        );
    } else if (props.typeEtat == "acheminement") {
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
                    <button className={"bouton_3pt"}>
                        <strong>...</strong>
                    </button>
                    <p className='text_option'><strong>En cours d'acheminement</strong></p>
                </div>
                <div className={"div_ligne"}>
                    <button className={"bouton_vide"}>

                    </button>
                    <p className='text_option'> Livré </p>
                </div>
            </div>
        );
    }
    function payement() {

        Swal.fire({
            html:
                '<div class="div_entete"><b>Payement de votre annonce</b></div>' +
                '<div class="conteur_general_pop_up">' +
                '<b id="text_detail">Détail des modalité de payement</b> ' +
                '<div id="div_1" class="conteur_pop_up">' +
                '<p class="texte">Commission de l\'acheteur</p>' +
                '<p class="prix"><strong>45.00 €</strong></p>' +
                '<p class="texte">Remboursement de l\'acheteur</p>' +
                '<p class="prix"><strong>1245.00 €</strong></p>' +
                '<ul class ="liste">' +
                '<li> <i class="check_icon fa-solid fa-circle-check"></i> Par carte bancaire</li>' +
                '<li class="messagre_grisé"> <i class="fa-solid fa-circle"></i> En especes</li>' +
                '</ul>' +
                '<p class="texte_info">Paiment en espèces impossible, vous ne serez pas amené à croiser l\'acheteur</p>' +
                '</div>' +
                '<div id="div_2" class="conteur_pop_up">' +
                '<p class="texte">Commission du voyageur</p>' +
                '<p class="prix"><strong>45.00 €</strong></p>' +
                '<ul class ="liste">' +
                '<li> <i class="check_icon fa-solid fa-circle-check"></i> Par carte bancaire</li>' +
                '<li > <i class="fa-sharp fa-regular fa-circle"></i> En especes</li>' +
                '</ul>' +
                '</div>' +
                '<div id="div_3" class="conteur_pop_up">' +
                '<p class="texte">Commission de BWoB</p>' +
                '<p class="prix"><strong>45.00 €</strong></p>' +
                '<ul class ="liste">' +
                '<li> <i class="check_icon fa-solid fa-circle-check"></i> Par carte bancaire</li>' +
                '<li class="messagre_grisé"> <i class="fa-solid fa-circle"></i> En especes</li>' +
                '</ul>' +
                '<p class="texte_info">Paiment en espèces impossible, concernant la comission BWoB</p>' +
                '</div>' +
                '</div>',
            customClass: 'swal-wide',
            heightAuto: true,
            padding: '0',
            color: '#0f0f10',
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonText: 'Annuler',
            confirmButtonColor: '#f59446',
            confirmButtonText: 'Procéder au payement',
            cancelButtonAriaLabel: 'Thumbs down',

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    html: '<div class="div_entete"><b>Payement de votre annonce</b></div>' +
                        '<div class="conteur_general_pop_up">' +
                        '<div id="conteur_pop_up_CB">' +
                        '<p class="texte_CB">Numero de carte</p>' +
                        '<input id="input_nbr_cb" class="input i_CB" type="text" placeholder="1234 5678 9012 3456"> </input>' +
                        '<div id="div_input_CB">' +
                        '<div id="div_CB_date">' +
                        '<p id="text_date" class="texte_CB">Date d\'expiration </p>' +
                        '<input id="input_date"  class="input i_CB" type="text" placeholder="MM/AA"></input>' +
                        '</div>' +
                        '<div id="div_CB_CVV">' +
                        '<p id="text_CVV" class="texte_CB">CVV</p>' +
                        '<input id="input_CVV" class="input i_CB" type="text" placeholder="123"></input>' +
                        '</div>' +
                        '</div>' +
                        '<p id="description_en_gris">Vous données personelles seront utilisé pour réaliser votre commande, ' +
                        'ainsi que pour toutes les autres éléments décrit dans votre politique de sécurité </p>' +
                        '</div>' +
                        '<div id="conteur_recap_CB">' +
                        '<p class="grand_titre"><strong>Montant a régler</strong></p>' +
                        '<div class="div_ligne_prix">' +
                        '<span class="span_text">Commission de l\'acheteur</span>' +
                        '<span class="span_prix">34.00 €</span>' +
                        '</div>' +
                        '<div class="div_ligne_prix">' +
                        '<span class="span_text">Commission de BWob</span>' +
                        '<span class="span_prix">10.00 €</span>' +
                        '</div>' +
                        '<div class="div_ligne_prix">' +
                        '<span class="span_text">Commission du voyageur</span>' +
                        '<span class="span_prix">48.00 €</span>' +
                        '</div>' +
                        '<p class="grand_titre"><strong>Montant prélevé en différé <i class="fa-regular fa-circle-question"></i></strong></p>' +
                        '<div id="souligner" class="div_ligne_prix">' +
                        '<span class="span_text">Coût de votre produit</span>' +
                        '<span class="span_prix">1430.00 €</span>' +
                        '</div>' +
                        '<div class="div_ligne_prix_fin">' +
                        '<span class="span_text_small"><strong>Total a régler : </strong></span>' +
                        '<span class="span_prix_big">10.00 €</span>' +
                        '</div>' +
                        '<div class="div_ligne_prix_fin">' +
                        '<span class="span_text_small"><strong>Montanr prélevé en différé : </strong></span>' +
                        '<span class="span_prix_big">1032.00 €</span>' +
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
                    confirmButtonText: '<strong>Payer 1 526.00 €</strong>',
                    confirmButtonmarginbottom : '10px'
                })
            }
        })

    }
}


export default Etat_annonce;