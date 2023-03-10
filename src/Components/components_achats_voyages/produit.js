import './produit.css'
import Photo_annonces from '../components_annonces/photo_annonces.js'
import { useAppStore } from '../../donness.js'
function Produit() {
    const nom = useAppStore((state) => state.User.Nom);
    const prenom = useAppStore((state) => state.User.Prenom);
    const photo = useAppStore((state) => state.User.photo)

    return (
        <div className="produit_container">
            <div id='div_autour_photo'>
                <Photo_annonces taille="boutons_photo" style="border : solid;" />
            </div>
            <div id='description_achatsVoyages'>
                <h3 id={"titre_profil"}>Produit</h3>
                <div className='informationProduits'>
                    <span>
                        <img className="PhotoProfilComponentProduit" src={photo} alt='Schémas' />
                    </span>
                    <span className='nomPrenom'>
                        {nom.concat(' ', prenom)}
                    </span>
                    <p className={'text_lieu'}><i className="logo_lieu_vente fa-solid fa-bag-shopping"></i> Lieu de vente</p>
                    <p className={'text_lieu'}><i className="logo_achat fa-solid fa-plane-departure"></i> Lieu d'achat</p>
                </div>
                <div className='div_nomsActeur'>
                    <h3 className='titre_nom'><i class="fa-solid fa-bag-shopping"></i> <u>Moi</u> </h3>
                    <h3 className='titre_nom'><i class="fa-solid fa-plane-departure"></i> <u>Carine</u> </h3>
                </div>
            </div>
        </div>
    );
}

export default Produit;