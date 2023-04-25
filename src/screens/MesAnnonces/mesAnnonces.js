import './mesAnnonces.css'
import NavBar from "../../Components/navBar/navbar";
import Mon_annonce from "../../Components/mes_annonces/mon_annonce";
import { useState, useEffect } from 'react';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function MesAnnonces() {

    const [mesAnnonces, setMesAnnonces] = useState([]);
    const utilisateur = JSON.parse(localStorage.getItem("User"));

    const [langue, setLangue] = useState(français);

    useEffect( () => {
        setLangue(anglais);
    })

    const data = [{ key: 1, titre: "Ordi", lVente: "Paris, France", lAchat: "Lisbone, Portugal", acheteur: "Jeremy Matos", transporteur: "Antony Dossantos", Prix1: "34,00 €", PrixVol: "48,00 €", Prix3: "10,00 €", PrixProduit: "1434,00 €", coutTot: "1526,00 €", etat: "manqueVoyageur" },
    { key: 2, titre: "tablette", lVente: "Madrid, Espagne", lAchat: "Londre, Angleterre", acheteur: "Leana Macedo", transporteur: "Erine Rico", Prix1: "44,00 €", PrixVol: "38,00 €", Prix3: "10,00 €", PrixProduit: "1434,00 €", coutTot: "1526,00 €", etat: "manquePayement" },
    { key: 3, titre: "telephone", lVente: "Paris, France", lAchat: "Madrid, Espagne", acheteur: "Anna Marco", transporteur: "Gabriel Trabon", Prix1: "14,00 €", PrixVol: "68,00 €", Prix3: "10,00 €", PrixProduit: "1434,00 €", coutTot: "1526,00 €", etat: "acheminement" },
    { key: 4, titre: "Cookies Canadiens", lVente: "Chicoutimi, Canada", lAchat: "Paris, France", acheteur: "Miguel Ornelia", transporteur: "Lucas Simon", Prix1: "24,00 €", PrixVol: "58,00 €", Prix3: "10,00 €", PrixProduit: "1434,00 €", coutTot: "1526,00 €", etat: "manqueVoyageur" }]

    useEffect(() => {
        async function fetchMesAnnonces() {
            console.log(utilisateur.id);
            const response = await fetch(`http://localhost:8080/api/annonce/user?idUser=${utilisateur.id}`);
            const data = await response.json();
            console.log(data);
            setMesAnnonces(data);
            console.log(mesAnnonces);
        }
        fetchMesAnnonces();
        console.log(mesAnnonces);
    }, []);

    return (
        <div >
            <div className="zone_navBar">
                <NavBar />
            </div>
            <div className="container_mes_achats">
                <h1>{langue.MES_ANNONCES.titre}</h1>
                {mesAnnonces.map(dataprop => <Mon_annonce titre={dataprop.titre}  lVente={dataprop.ville} lAchat={dataprop.pays.nom} PrixProduit={dataprop.prix} devise={dataprop.devise} etat="manquePayement" ></Mon_annonce>)}
            </div>
        </div>
    );
}

export default MesAnnonces;