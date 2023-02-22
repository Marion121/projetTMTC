import '../css_general.css'
import './annonces.css'
import NavBar from '../../Components/navBar/navbar'
import Annonces_vu_voyageur from "../../Components/annonces_vue_voyageur/annonces_vue_voyageur";

function Annonces() {

    const data = [{key:1 , titre:"annonces1"},{key:2,titre:"annonces2"},{key:3,titre:"annonces3"},{key:4,titre:"annonces4"}, ]

    return (
        <div className='page'>
            <div className='zone_navBar'>
                <NavBar/>
            </div>
            <div className={"div_photo_nom"}>
                <h1> Bonjour PrénomPco</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <p className="text">Retrouvez si dessous l'ensemble des annonces postées ! </p>
                <p className="text">Postulez si vous avez de la place dans votre valise ! </p>
            </div>
            <div className={"div_recherche"}>
                <span className={"titre_Recherche"} id={"depart"}><i className="fa-solid fa-magnifying-glass"></i>
                    <input className={"input_recherche"} type={"text"} placeholder={"Chercher des mots clés"}></input>
                </span>
                <button className={"b_type_voyage"}>
                    <i className="fa-sharp fa-solid fa-plane-up"></i>
                    <span id={"span_bouton"}> Aller simple </span>
                    <i className="fa-solid fa-angle-down"></i>
                </button>
                <span className={"titre_depart"} id={"depart"}> Départ :
                    <input className={"input_départ"} type={"text"} placeholder={"Votre ville, Pays"}></input>
                </span>

                <span className={"titre_arrive"}> Arrivée :
                    <input className={"input_arrivé"} type={"text"} placeholder={"Madrid, Espagne"}></input>
                </span>
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
                    {data.map(dataprop => <Annonces_vu_voyageur titre={dataprop.titre}></Annonces_vu_voyageur>)}
                    {/*<Annonces_vu_voyageur titre = {"c est ok "}></Annonces_vu_voyageur>*/}

                </div>
                <div className={"div_annonces_urgentes"}>
                </div>
            </div>
        </div>
    );
}

export default Annonces;