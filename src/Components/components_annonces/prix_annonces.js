import './prix_annonces.css';

function Prix_annonces(props) {
    var div_1_cache = "Hidden={\"false\"}";
    var div_2_cache = "Hidden={\"false\"}";

   /* function affichage() {
        if (props.typeContrepartie.equals("div_contrepartie_1")) {
            div_1_cache = "Hidden={\"true\"}";
            div_2_cache = "Hidden={\"false\"}";
        }
        if (props.typeContrepartie.equals("div_contrepartie_2")) {
            div_1_cache = "Hidden={\"false\"}";
            div_2_cache = "Hidden={\"true\"}";
        }
        if (props.typeContrepartie.equals("div_contrepartie")) {
            div_1_cache = "Hidden={\"false\"}";
            div_2_cache = "Hidden={\"false\"}";
        }
    }
    onload(affichage);*/

    return (
        <div className={'div_prix'} >
            <div className={'div_contrepartie'}>
                <p className={"text_contrepartie"}>Contrepartie <i className="fa-solid fa-bag-shopping"></i></p>
                <p className={"text_prix"}>{props.prix1}</p>
            </div>
            <div className={'div_contrepartie'}>
                <p className={"text_contrepartie"}>Contrepartie <i className="fa-solid fa-plane-departure"></i></p>
                <p className={"text_prix"}>{props.prixV}</p>
            </div>
            <div className={'div_cout_tot'}>
                <p className={"text_contrepartie"}>Coût du produit</p>
                <p className={"text_prix_tot"}><strong>{props.coutTot}</strong></p>
            </div>
        </div>
    );
}

export default Prix_annonces;