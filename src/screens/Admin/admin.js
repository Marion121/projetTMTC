import '../css_general.css'
import './admin.css'
import NavBar from '../../Components/navBar/navbar'
import Valide_id from "../../Components/components_admin/valide_id";
import Annonces_vu_voyageur from "../../Components/annonces_vue_voyageur/annonces_vue_voyageur";
import Valide_annonces from "../../Components/components_admin/valide_annonces";

function Admin() {

    const data = [{key:1 , nom:"Comte", prenom : "Leo",dateN :"01/05/2001", idFace : "valise_avion.pnf", idDos : "valise_ouverte.png"},
        {key:2 , nom:"Flamain", prenom : "Vincent",dateN :"01/05/2001", idFace : "valise_avion.pnf", idDos : "valise_ouverte.png"},
        {key:3 , nom:"Lansade", prenom : "Jeanne",dateN :"01/05/2001", idFace : "valise_avion.pnf", idDos : "valise_ouverte.png"},
        {key:4 , nom:"Balzo", prenom : "Tom",dateN :"01/05/2001", idFace : "valise_avion.pnf", idDos : "valise_ouverte.png"},]

    const dataAnnonce = [{ key: 1, titre: "annonces1", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", typeContrepartie: "div_contrepartie", Prix1: "40,00 €", PrixV: "60,00 €", coutTot: "3670,00 €" },
        { key: 2, titre: "annonces2", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", typeContrepartie: "div_contrepartie_1", Prix1: "40,00 €", PrixV: "60,00 €", coutTot: "3670,00 €" },
        { key: 3, titre: "annonces3", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", typeContrepartie: "div_contrepartie_2", Prix1: "40,00 €", PrixV: "60,00 €", coutTot: "3670,00 €" },
        { key: 4, titre: "annonces4", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", typeContrepartie: "div_contrepartie", Prix1: "40,00 €", PrixV: "60,00 €", coutTot: "3670,00 €" }]


    return(<div className='page'>
        <div className='zone_navBar'>
            <NavBar/>
        </div>
        <div className='div_body' >
            <div className='div_validationCarte' >
                <p>cartes bleu à valider : </p>
                {data.map(dataprop => <Valide_id  nom={dataprop.nom} prenom={dataprop.prenom}  dateN={dataprop.dateN} idFace={dataprop.idFace} idDos={dataprop.idDos} ></Valide_id>)}
            </div>
            <div  className='div_validationAnnonce'  >
                <p>Annonces à valider : </p>
                <div id={"vue_annonce"}>
                {dataAnnonce.map(dataAnnonceprop => <Valide_annonces id={dataAnnonceprop.key} titre={dataAnnonceprop.titre} lVente={dataAnnonceprop.lVente} lAchat={dataAnnonceprop.lAchat} description={dataAnnonceprop.description} profil={dataAnnonceprop.profil} typeContrepartie={dataAnnonceprop.typeContrepartie} prix1={dataAnnonceprop.Prix1} prixV={dataAnnonceprop.PrixV} coutTot={dataAnnonceprop.coutTot}></Valide_annonces>)}
                </div>
            </div>
        </div>
    </div>)
}

export default Admin;