import './etat_annonce.css'
const Swal = require('sweetalert2')

function Etat_annonce(props) {
    if(props.typeEtat =="manqueVoyageur"){
        return (
            <div className="actions">
                <h4 className={"titre_element_annonces"}>Etat</h4>
                <br/>
                <p id={"text_manque_voyageur"}><strong>En attente d'un voyageur et d'un acheteur... </strong></p>
            </div>
        );
    }else if(props.typeEtat =="manquePayement"){
        return (
            <div className="actions">
                <h4 className={"titre_element_annonces"}>Etat</h4>
                <p id={"text_attente_payement"}><strong>En attente du payement...</strong></p>
                <p id={"text_payement"}><strong>Mode de payement</strong></p>
                <div id={"div_bouton_payement"}>
                    <button className={"bouton_payement"} onClick={payement()}><i className="fa-regular fa-credit-card"></i> Par carte</button>
                    <button className={"bouton_payement"}><i className="fa-solid fa-money-bill-1-wave"></i> En espéces</button>
                </div>
            </div>
        );
    }else if(props.typeEtat =="acheminement"){
        return (
            <div className="actions">
                <h4 className={"titre_element_annonces"}>Etat</h4>
                <div className={"div_ligne"}>
                    <button className={"bouton_valide"}>
                        <i className="fa-solid fa-check"></i>
                    </button><p className='text_option'>Produit acheté </p>
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


}

function payement() {
    Swal.fire({
        title: "Payement de votre annonce",
        text: "Détail des modalité de payement ",
        width: 600,
        padding: '4em',
        color: '#664acb',
    })
    

}

export default Etat_annonce;