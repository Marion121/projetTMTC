import './description_annonces.css';

function Description_annonces(props) {
    return (
        <div className={'div_description'}>
            <p id={'titre'}><strong>{props.titre}</strong></p>
            <p className={'text_lieu'}><i className="fa-solid fa-bag-shopping"></i> Lieu de vente</p>
            <p className={'text_lieu'}><i className="fa-solid fa-plane-departure"></i> Lieu d'achat</p>
            <p id={'description'}>Description detaillé du produit </p>
            <p id={'profil'}><strong>Profil</strong></p>
        </div>
    )
}
export default Description_annonces;