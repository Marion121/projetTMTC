import './mesAnnonces.css'
import NavBar from "../../Components/navBar/navbar";
import Mon_annonce from "../../Components/mes_annonces/mon_annonce";

function MesAnnonces() {
    const data = [{key:1 , titre:"Ordi", lVente : "Paris, France", lAchat : "Lisbone, Portugal", acheteur : "Jeremy Matos", transporteur : "Antony Dossantos",Prix1 : "34,00 €", PrixVol : "48,00 €", Prix3 : "10,00 €", PrixProduit : "1434,00 €", coutTot : "1526,00 €", etat : "manqueVoyageur"  } ,
        {key:2,titre:"tablette",lVente : "Madrid, Espagne", lAchat : "Londre, Angleterre",acheteur : "Leana Macedo", transporteur :  "Erine Rico", Prix1 : "44,00 €", PrixVol : "38,00 €", Prix3 : "10,00 €", PrixProduit : "1434,00 €", coutTot : "1526,00 €", etat : "manquePayement"} ,
        {key:3,titre:"telephone",lVente : "Paris, France", lAchat : "Madrid, Espagne", acheteur : "Anna Marco", transporteur :  "Gabriel Trabon",Prix1 : "14,00 €", PrixVol : "68,00 €", Prix3 : "10,00 €", PrixProduit : "1434,00 €", coutTot : "1526,00 €", etat : "acheminement"} ,
        {key:4,titre:"Cookies Canadiens", lVente : "Chicoutimi, Canada", lAchat : "Paris, France", acheteur : "Miguel Ornelia", transporteur :  "Lucas Simon",  Prix1 : "24,00 €", PrixVol : "58,00 €", Prix3 : "10,00 €", PrixProduit : "1434,00 €", coutTot : "1526,00 €", etat : "manqueVoyageur"},
        {key:5,titre:"telephone",lVente : "Paris, France", lAchat : "Madrid, Espagne", acheteur : "Anna Marco", transporteur :  "Gabriel Trabon",Prix1 : "14,00 €", PrixVol : "68,00 €", Prix3 : "10,00 €", PrixProduit : "1434,00 €", coutTot : "1526,00 €", etat : "acheminementLivré"} ]

    return (
        <div >
            <div className="zone_navBar">
                <NavBar />
            </div>
            <div className="container_mes_achats">
                <h1>Mes annonces</h1>
                {data.map(dataprop =>  <Mon_annonce titre={dataprop.titre} lVente={dataprop.lVente} lAchat={dataprop.lAchat} acheteur={dataprop.acheteur} transporteur={dataprop.transporteur} Prix1={dataprop.Prix1} PrixVol={dataprop.PrixVol} Prix3={dataprop.Prix3} PrixProduit={dataprop.PrixProduit} coutTot={dataprop.coutTot} etat={dataprop.etat} ></Mon_annonce>)}
            </div>
        </div>
    );
}

export default MesAnnonces;