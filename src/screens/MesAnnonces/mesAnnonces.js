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
                {mesAnnonces.map(dataprop => <Mon_annonce titre={dataprop.titre} paysArriver={dataprop.paysArriver} paysDepart={dataprop.paysDepart}  villeArriver={dataprop.villeArriver}  PrixProduit={dataprop.prix} devise={dataprop.devise} imageURL={dataprop.image} annonce={dataprop} etat="manqueVoyageur" ></Mon_annonce>)}
            </div>
        </div>
    );
}

export default MesAnnonces;