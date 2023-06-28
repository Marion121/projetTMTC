
import './mon_annonce.css'
import Produit_mon_annonce from "../components_mon_annonce/produit_mon_annonce";
import Detail_prix from "../components_mon_annonce/detail_prix";
import Etat_annonce from "../components_mon_annonce/etat_annonce";
import { useEffect, useState } from "react";


function MesAnnonces(prop) {

    const [acheteur, setAcheteur] = useState();
    const [voyageur, setVoyageur] = useState();

    useEffect(()=>{
        console.log(prop.annonce.user)
        async function getAcheteur() {
            let response = await fetch(`http://localhost:8080/api/offre/acheteur/annonce?idAnnonce=${prop.annonce.id}`)
            try{
                const data = await response.json();
                console.log(data.acheteur.user)
                setAcheteur(data.acheteur.user.prenom + " " + data.acheteur.user.nom);
            }catch(e){
                setAcheteur("");
            }
            
        }
        getAcheteur();
        async function getVoyageur() {
            let response = await fetch(`http://localhost:8080/api/offre/voyageur/annonce?idAnnonce=${prop.annonce.id}`)
            try{
                const data = await response.json();
                console.log(data.voyageur.user)
                setVoyageur(data.voyageur.user.prenom + " " + data.voyageur.user.nom);
            }catch(e){
                setVoyageur("");
            }
            
        }
        getVoyageur();
    }, [])

    return (
        <div id="div_global_annonces" className={"annonces_div_general"}>
            <Produit_mon_annonce typeProfil={"mesAnnonces"} titre={prop.titre} annonce={prop.annonce} paysArriver={prop.paysArriver} paysDepart={prop.paysDepart}  villeArriver={prop.villeArriver} acheteur={acheteur} imageURL={prop.imageURL} transporteur={voyageur} />
            <Detail_prix PrixProduit={prop.PrixProduit} devise={prop.devise} />
            <Etat_annonce typeEtat ={prop.etat}/>
        </div>
    );
}

export default MesAnnonces;