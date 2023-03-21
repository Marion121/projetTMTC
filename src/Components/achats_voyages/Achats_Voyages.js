import Actions from "../components_achats_voyages/actions";
import Contrepartie from "../components_achats_voyages/contrepartie";
import Produit_mon_annonce from "../components_mon_annonce/produit_mon_annonce";
import './Achats_Voyages.css'

function AchatsVoyages() {
    return (
        <div className="achatVoyages annonces_div_general">
            <Produit_mon_annonce typeProfil={"achatVoyage"} />
            <Contrepartie />
            <Actions />
        </div>
    );
}

export default AchatsVoyages;