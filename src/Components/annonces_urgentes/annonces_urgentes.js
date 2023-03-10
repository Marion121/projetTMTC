
import './annonces_urgentes.css';
import Photo_annonces from '../components_annonces/photo_annonces.js';

function Annonces_urgentes(props) {
    return (
        <div className='annonces_u_div_general'>
            <div id={"autour_photo"}>
                <Photo_annonces taille={"annonces_urgentes"}></Photo_annonces>
            </div>
        </div>
    );
}

export default Annonces_urgentes;