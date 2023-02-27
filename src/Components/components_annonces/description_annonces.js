import './description_annonces.css';

function Description_annonces(props) {
    return (
        <div className={'div_description'}>
            <p id={'titre'}><strong>{props.titre}</strong></p>
            <p className={'text_lieu'}><i className="fa-solid fa-bag-shopping"></i> {props.lVente}</p>
            <p className={'text_lieu'}><i className="fa-solid fa-plane-departure"></i> {props.lAchat}</p>
            <p id={'description'}>{props.description} </p>
            <p id={'profil'}><strong>{props.profil}</strong></p>
        </div>
    )
}
export default Description_annonces;