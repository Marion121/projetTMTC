import './detail_prix.css'

function Detail_prix(prop) {
    return (
        <div className="contrepartie">
            <h4 className={"titre_element_annonces"}>Détails du prix</h4>
            <div id={"div_détails_du_prix"}>
                <div id={"div_prix_global"}>
                    <div className={"div_prix_annonces"}>
                        <p className={"text_prix"}> {prop.Prix1}</p>
                        <button className={"bouton_logo_petit"} id={"bouton_valise_2"}> <i className="fa-solid fa-bag-shopping"></i> </button>
                        <i className="icon_question fa-sharp fa-solid fa-circle-question"></i>
                    </div>
                    <div className={"div_prix_annonces"}>
                        <p className={"text_prix"}> {prop.PrixVol}</p>
                        <button className={"bouton_logo_petit"}><i className="fa-solid fa-plane-departure"></i></button>
                        <i className="icon_question fa-sharp fa-solid fa-circle-question"></i>
                    </div>
                    <div className={"div_prix_annonces"}>
                        <p className={"text_prix"}> {prop.Prix3}</p>
                        <i className="icon_question fa-sharp fa-solid fa-circle-question"></i>
                    </div>
                    <div className={"div_prix_annonces"}>
                        <p className={"text_prix"}> {prop.PrixProduit}</p>
                        <i className="icon_question fa-sharp fa-solid fa-circle-question"></i>
                    </div>
                </div>
                <div id={"div_prix_tot"}>
                    <p id={"titre_prix_tot"}><strong>Total</strong></p>
                    <p id={"text_val_prix_tot"}><strong>{prop.coutTot}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Detail_prix;