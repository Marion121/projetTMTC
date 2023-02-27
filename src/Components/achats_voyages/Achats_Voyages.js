import Actions from "../components_achats_voyages/actions";
import Contrepartie from "../components_achats_voyages/contrepartie";
import Produit from "../components_achats_voyages/produit";
import './Achats_Voyages.css'

function AchatsVoyages() {
    return (
        <div className="achatVoyages annonces_div_general">
            <Produit />
            <Contrepartie />
            <Actions />
        </div>
    );
}

export default AchatsVoyages;