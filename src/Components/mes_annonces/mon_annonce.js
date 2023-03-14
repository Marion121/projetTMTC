
import './mon_annonce.css'
import Produit_mon_annonce from "../components_mon_annonce/produit_mon_annonce";
import Contrepartie_mon_annonce from "../components_mon_annonce/contrepartie_mon_annonce";
import Actions_mon_annonce from "../components_mon_annonce/actions_mon_annonce";

function MesAnnonces() {
    return (
        <div id="div_global_annonces" className={"annonces_div_general"}>
            <Produit_mon_annonce typeProfil={"mesAnnonces"}/>
            <Contrepartie_mon_annonce />
            <Actions_mon_annonce />
        </div>
    );
}

export default MesAnnonces;