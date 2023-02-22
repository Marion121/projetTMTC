
import './annonces_vue_voyageur.css';
import Photo_annonces from '../components_annonces/photo_annonces.js';
import Description_annonces from "../components_annonces/description_annonces";
import Prix_annonces from "../components_annonces/prix_annonces";

function Annonces_vu_voyageur(props) {
    return (
        <div className='annonces_div_general'>
            <Photo_annonces/>
            <Description_annonces titre={props.titre}></Description_annonces>
            <Prix_annonces/>
        </div>
    );
}

export default Annonces_vu_voyageur;