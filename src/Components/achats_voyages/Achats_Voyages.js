import { useEffect, useState } from "react";
import Actions from "../components_achats_voyages/actions";
import Contrepartie from "../components_achats_voyages/contrepartie";
import Produit_mon_annonce from "../components_mon_annonce/produit_mon_annonce";
import './Achats_Voyages.css'

function AchatsVoyages(props) {

    const [acheteur, setAcheteur] = useState();
    const [voyageur, setVoyageur] = useState();

    useEffect(()=>{
        console.log(props.annonce.user)
        async function getAcheteur() {
            let response = await fetch(`http://localhost:8080/api/offre/acheteur/annonce?idAnnonce=${props.annonce.id}`)
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
            let response = await fetch(`http://localhost:8080/api/offre/voyageur/annonce?idAnnonce=${props.annonce.id}`)
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
        <div className="achatVoyages annonces_div_general">
            <Produit_mon_annonce imageURL={props.annonce.image} annonce={props.annonce} acheteur={acheteur} voyageur={voyageur} typeProfil={"achatVoyage"} />
            <Contrepartie prix={props.annonce.prix} devise={props.annonce.devise}/>
            <Actions />
        </div>
    );
}

export default AchatsVoyages;