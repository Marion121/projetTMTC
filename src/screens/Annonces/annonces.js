import '../css_general.css'
import './annonces.css'
import NavBar from '../../Components/navBar/navbar'
import Annonces_vu_voyageur from "../../Components/annonces_vue_voyageur/annonces_vue_voyageur";
import Annonces_urgentes from "../../Components/annonces_urgentes/annonces_urgentes";

function Annonces() {
    const utilisateur = JSON.parse(localStorage.getItem("User"));

    const data = [{key:1 , titre:"annonces1", lVente : "Paris, France", lAchat : "Madrid, Espagne", description : "super ordi topito", profil : "Leo Comte", typeContrepartie : "div_contrepartie", Prix1 : "40,00 €", PrixV : "60,00 €", coutTot : "3670,00 €"},
        {key:2,titre:"annonces2",lVente : "Paris, France", lAchat : "Madrid, Espagne", description : "super ordi topito", profil : "Leo Comte", typeContrepartie : "div_contrepartie_1", Prix1 : "40,00 €", PrixV : "60,00 €", coutTot : "3670,00 €"},
        {key:3,titre:"annonces3",lVente : "Paris, France", lAchat : "Madrid, Espagne", description : "super ordi topito", profil : "Leo Comte", typeContrepartie : "div_contrepartie_2", Prix1 : "40,00 €", PrixV : "60,00 €", coutTot : "3670,00 €"},
        {key:4,titre:"annonces4", lVente : "Paris, France", lAchat : "Madrid, Espagne", description : "super ordi topito", profil : "Leo Comte", typeContrepartie : "div_contrepartie", Prix1 : "40,00 €", PrixV : "60,00 €", coutTot : "3670,00 €"} ]

    return (
        <div className='page'>
            <div className='zone_navBar'>
                <NavBar/>
            </div>
            <div className={"div_photo_nom"}>
                <h1> Bonjour {utilisateur.Nom}  {utilisateur.Prenom}</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <p className="text">Retrouvez si dessous l'ensemble des annonces postées ! </p>
                <p className="text">Postulez si vous avez de la place dans votre valise ! </p>
            </div>
            <div className={"div_recherche"}>
                <div className={"titre_Recherche"} id={"depart"}><i className="fa-solid fa-magnifying-glass"></i>
                    <input className={"input_recherche"} type={"text"} placeholder={"Chercher des mots clés"}></input>
                </div>
                <select name="combobox" id="voyage-select" className={"b_type_voyage"} >
                    <option value="allez simple"> Allez simple</option>
                    <option value="allez retour"> Allez retour</option>
                </select>
                <div className={"titre_depart"} id={"depart"}><span classeName={"p_titre"}> Départ : </span>
                    <input className={"input_départ"} type={"text"} placeholder={"Votre ville, Pays"}></input>
                </div>

                <div className={"titre_arrive"}><span classeName={"p_titre"}> Arrivée :</span>
                    <input className={"input_arrivé"} type={"text"} placeholder={"Madrid, Espagne"}></input>
                </div>
                <button className={"boutonChercher"} >
                    Chercher
                </button>
            </div>
            <div className={"div_annonces_produit"}>
                <div className={"div_affiner_recherhce"}>
                    <p className={"titre_recherche_gauche"}><strong>Produit</strong></p>
                    <input type="radio" className={"radio_input"} id="Electronique"/>
                    <label htmlFor="Electronique">Electronique</label>
                    <br/>
                    <input type="radio" className={"radio_input"} id="Comestible"/>
                    <label htmlFor="Comestible">Comestible</label>
                    <br/>
                    <input type="radio" className={"radio_input"} id="Liquide"/>
                    <label htmlFor="Liquide">Liquide</label>
                    <br/>
                    <p className={"titre_recherche_gauche"}><strong>Type d'annonce</strong></p>
                    <input type="radio" className={"radio_input"} id="Achat"/>
                    <label htmlFor="Achat">Achat</label>
                    <br/>
                    <input type="radio" className={"radio_input"} id="Voyage"/>
                    <label htmlFor="Voyage">Voyage</label>
                    <br/>
                    <p className={"titre_recherche_gauche"}><strong>Rétribution</strong></p>
                    <table className={"table_recherche"}>
                        <tr>
                            <td>
                                Min
                            </td>
                            <td>
                                Max
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className={"input_number"} type={"number"}></input>
                            </td>
                            <td>
                                <input className={"input_number"}type={"number"}></input>
                            </td>
                        </tr>
                    </table>
                    <p className={"titre_recherche_gauche"}><strong>Devise</strong></p>
                    <input type="radio" className={"radio_input"} id="Euros"/>
                    <label htmlFor="Euros">Euros</label>
                    <br/>
                    <input type="radio" className={"radio_input"} id="USD"/>
                    <label htmlFor="USD">USD</label>
                    <br/>
                </div>
                <div className={"div_annonces_lamda"}>
                    {data.map(dataprop => <Annonces_vu_voyageur titre={dataprop.titre} lVente={dataprop.lVente} lAchat={dataprop.lAchat} description={dataprop.description} profil={dataprop.profil} typeContrepartie={dataprop.typeContrepartie} prix1={dataprop.Prix1}  prixV={dataprop.PrixV}  coutTot={dataprop.coutTot} ></Annonces_vu_voyageur>)}
                </div>
                <div className={"div_annonces_urgentes"}>
                    <h4 id={"titre_A_urgentes"}>Annonces urgentes</h4>
                    <div id={"div_annonces_u_border"}>
                        {data.map(dataprop => <Annonces_urgentes  profil={dataprop.profil} titre={dataprop.titre} lVente={dataprop.lVente} lAchat={dataprop.lAchat} prixV={dataprop.PrixV} ></Annonces_urgentes>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Annonces;