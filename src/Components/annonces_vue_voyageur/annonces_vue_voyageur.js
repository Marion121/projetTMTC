
import './annonces_vue_voyageur.css';
import Photo_annonces from '../components_annonces/photo_annonces.js';
import Description_annonces from "../components_annonces/description_annonces";
import Prix_annonces from "../components_annonces/prix_annonces";

function Annonces_vu_voyageur(props) {
    return (
        <div className='annonces_div_general'>
            <div id={"div_autour_photo_1"}>
                <Photo_annonces taille={"boutons_photo"}/>
            </div>
            <Description_annonces titre={props.titre} lVente={props.lVente} lAchat={props.lAchat} description={props.description} profil={props.profil}  ></Description_annonces>
            <Prix_annonces  prix1={props.prix1}  prixV={props.prixV}  coutTot={props.coutTot}  ></Prix_annonces>
        </div>
    );
}

export default Annonces_vu_voyageur;