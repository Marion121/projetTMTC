import './prix_annonces.css';

function Prix_annonces(props){
    return(
        <div className={'div_prix'}>
            <div className={'div_contrepartie'}>
                <p className={"text_contrepartie"}>Contrepartie <i className="fa-solid fa-bag-shopping"></i></p>
                <p className={"text_prix"} >{props.prix1}</p>
            </div>
            <div className={'div_contrepartie'}>
                <p className={"text_contrepartie"} >Contrepartie <i className="fa-solid fa-plane-departure"></i></p>
                <p className={"text_prix"} >{props.prixV}</p>
            </div>
            <div className={'div_cout_tot'}>
                <p className={"text_contrepartie"} >Coût du produit</p>
                <p className={"text_prix_tot"} ><strong>{props.coutTot}</strong></p>
            </div>
        </div>
    );
}
export default Prix_annonces;