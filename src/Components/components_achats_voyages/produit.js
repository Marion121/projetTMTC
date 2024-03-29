import './produit.css'
import Photo_annonces from '../components_annonces/photo_annonces.js'
import { useAppStore } from '../../donness.js'
function Produit() {
    const test = useAppStore((state) => state.test);
    const nom = useAppStore((state) => state.User.Nom);
    const prenom = useAppStore((state) => state.User.Prenom);
    const photo = useAppStore((state) => state.User.photo)

    return (
        <div className="produit_container">
            <Photo_annonces style="border : solid;" />
            <div id='description_achatsVoyages'>
                <h3>Produit</h3>
                <div className='informationProduits'>
                    <span>
                        <img className="PhotoProfilComponentProduit" src={photo} alt='Schémas' />
                    </span>
                    <span className='nomPrenom'>
                        {test}
                    </span>
                    <p className={'text_lieu'}><i className="logo_lieu_vente fa-solid fa-bag-shopping"></i> Lieu de vente</p>
                    <p className={'text_lieu'}><i className="logo_achat fa-solid fa-plane-departure"></i> Lieu d'achat</p>
                </div>
                <div className='nomsActeurs'>
                    <h3 className='nomAcheteur'><i class="fa-solid fa-bag-shopping"></i> Moi </h3>
                    <h3 className='nomTransporteur'><i class="fa-solid fa-plane-departure"></i> Carine </h3>
                </div>
            </div>
        </div>
    );
}

export default Produit;