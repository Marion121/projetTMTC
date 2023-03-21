import './photo_annonces.css';

function Photo_annonces(props){
    return(
        <div className={'div_photo '}>
            <button className={props.taille}>Achat</button>
            <button className={props.taille}>Voyage</button>
        </div>
    );
}
export default Photo_annonces;