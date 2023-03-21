
import './mon_annonce.css'
import Produit_mon_annonce from "../components_mon_annonce/produit_mon_annonce";
import Detail_prix from "../components_mon_annonce/detail_prix";
import Etat_annonce from "../components_mon_annonce/etat_annonce";

function MesAnnonces(prop) {

    return (
        <div id="div_global_annonces" className={"annonces_div_general"}>
            <Produit_mon_annonce typeProfil={"mesAnnonces"} titre={prop.titre} lVente={prop.lVente} lAchat={prop.lAchat} acheteur={prop.acheteur} transporteur={prop.transporteur} />
            <Detail_prix Prix1={prop.Prix1} PrixVol={prop.PrixVol} Prix3={prop.Prix3} PrixProduit={prop.PrixProduit} coutTot={prop.coutTot} />
            <Etat_annonce typeEtat ={prop.etat}/>
        </div>
    );
}

export default MesAnnonces;