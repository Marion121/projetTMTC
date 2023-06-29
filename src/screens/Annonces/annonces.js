import '../css_general.css'
import './annonces.css'
import NavBar from '../../Components/navBar/navbar'
import Annonces_vu_voyageur from "../../Components/annonces_vue_voyageur/annonces_vue_voyageur";
import Annonces_urgentes from "../../Components/annonces_urgentes/annonces_urgentes";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'


function Annonces() {
    const utilisateur = JSON.parse(localStorage.getItem("User"));


    const [dataAnnonces, setDataAnnonces] = useState([]);
    const [dataAnnoncesUrgentes, setDataAnnoncesUrgentes] = useState([]);
    const [voyage, setVoyage] = useState(false);
    const [achat, setAchat] = useState(false);
    const [max, setMax] = useState();
    const [min, setMin] = useState();
    const [devise, setDevise] = useState();
    const [msgBienvenue, setmsgBienvenue] = useState();
    const [filterKeyWords, setFilterKeyWords] = useState();
    const [paysArriver, setPaysArriver] = useState(null);
    const [villeArriver, setVilleArriver] = useState(null);
    const [langue, setLangue] = useState(français);


    function handleVoyageChange(event) {
        setVoyage(event.target.checked);
    }

    function handleAchatChange(event) {
        setAchat(event.target.checked);
    }

    function handleMinChange(e) {
        setMin(e.target.value);
    }

    function handleMaxChange(e) {
        setMax(e.target.value);
    }

    function handleDeviseChange(e) {
        setDevise(e.target.value);
    }

    function handlePaysArriverChange(e) {
        if (e.target.value == "") {
            setPaysArriver(null);
        } else {
            setPaysArriver(e.target.value)
        }
        console.log(paysArriver)
    }

    function handleVilleArriverChange(e) {
        if (e.target.value == "") {
            setVilleArriver(null);
        } else {
            setVilleArriver(e.target.value)
        }
        console.log(villeArriver)
    }


    async function fetchDetails() {
        console.log("filterKeyWords ", filterKeyWords)
        console.log("devise : " , devise)
        const response = await fetch(`http://localhost:8080/api/annonce/recherche`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: filterKeyWords ?
                JSON.stringify({
                    offset: 0,
                    limit: 100,
                    desc: filterKeyWords,
                    paysArriver: paysArriver,
                    villeArriver: villeArriver,
                    prixMax: max, 
                    prixMin: min
                })
                : JSON.stringify({
                    offset: 0,
                    limit: 100,
                    paysArriver: paysArriver,
                    villeArriver: villeArriver,
                    prixMax : max,
                    prixMin: min,
                })
        });
        const data = await response.json();
        console.log(data);
        const annoncesUrg = data.filter(item => item.degreImportance === "Urgent");
        console.log("urg : ", annoncesUrg)
        setDataAnnoncesUrgentes(annoncesUrg)
        console.log(data);
        const annoncesNormal = data.filter(item => item.degreImportance === "Normal");
        console.log("normal : ", annoncesNormal)
        setDataAnnonces(annoncesNormal)
    }

    useEffect(() => {
        setLangue(anglais);
        if (utilisateur == null) {
            setmsgBienvenue(langue.ANNONCES.textBienvenue)
        } else {
            setmsgBienvenue(utilisateur.prenom + " " + utilisateur.nom)
        }
        console.log(filterKeyWords);

        fetchDetails();

    }, []);

    return (
        <div className='page'>
            <div className='zone_navBar'>
                <NavBar />
            </div>
            <div className="div_photo_nom">

                <h1> {langue.ANNONCES.bonjour} {msgBienvenue} </h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p className="text">{langue.ANNONCES.textEntete_1}</p>
                <p className="text">{langue.ANNONCES.textEntete_2}</p>
            </div>
            <div className={"div_recherche"}>
                <span className={"conteneur_input_annonces contour_bleu"} id={"depart"}><i className="fa-solid fa-magnifying-glass"></i>
                    <input className={"input_annonces"} type={"text"} placeholder={langue.ANNONCES.motsCles} onChange={(e) => setFilterKeyWords(e.target.value)}></input>
                </span>
                <span className={"conteneur_input_annonces contour_bleu"} id={"depart"}> {langue.ANNONCES.villeArrivee}
                    <input className={"input_annonces"} type={"text"} placeholder={"Votre ville d'arrivée"} onChange={handleVilleArriverChange}></input>
                </span>

                <span className={"conteneur_input_annonces contour_bleu"}> {langue.ANNONCES.arrivee}
                    <input className={"input_annonces"} type={"text"} placeholder={"Madrid, Espagne"} onChange={handlePaysArriverChange}></input>
                </span>


                <button className={"button_submit_annonces btn_orange"} onClick={fetchDetails} > <strong>Soumettre filtres</strong>  </button>

            </div>
            <div className={"div_annonces_produit"}>
                <div className={"div_affiner_recherhce"}>
                    <p className={"titre_recherche_gauche"}><strong>{langue.ANNONCES.typeAnnonce}</strong></p>
                    <input type="checkbox" className={"checkbox_input"} id="Achat" checked={achat} onChange={handleAchatChange} />
                    <label htmlFor="Achat">{langue.ANNONCES.achat}</label>
                    <br />
                    <input type="checkbox" className={"checkbox_input"} id="Voyage" checked={voyage} onChange={handleVoyageChange} />
                    <label htmlFor="Voyage">{langue.ANNONCES.voyage}</label>
                    <br />
                    <p className={"titre_recherche_gauche"}><strong></strong></p>
                    <table className={"table_recherche"}>
                        <tbody>
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
                                    <input className="input_number" type={"number"} onChange={handleMinChange}></input>
                                </td>
                                <td>
                                    <input className="input_number" type={"number"} onChange={handleMaxChange}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className={"titre_recherche_gauche "}><strong>{langue.ANNONCES.devise}</strong></p>
                    <input type="checkbox" className={"checkbox_input"} id="Euros" name='devise' value="euro" onChange={handleDeviseChange} />
                    <label htmlFor="Euros">Euros</label>
                    <br />
                    <input type="checkbox" className="checkbox_input" id="USD" name='devise' value="usd" onChange={handleDeviseChange} />
                    <label htmlFor="USD">USD</label>
                    <br />
                </div>
                <div className="div_annonces_lamda">
                    {dataAnnonces.map(dataprop => <Annonces_vu_voyageur id={dataprop.id} titre={dataprop.titre} lVente={dataprop.paysArriver.nom} villeArriver={dataprop.villeArriver} lAchat={dataprop.paysDepart.nom} description={dataprop.description} profil={dataprop.profil} photo={dataprop.image} user={dataprop.user} typeContrepartie={dataprop.typeContrepartie} coutTot={dataprop.prix} annonce={dataprop} devise={dataprop.devise} ></Annonces_vu_voyageur>)}
                </div>
                <div className={"div_annonces_urgentes"}>
                    <h4 id={"titre_A_urgentes"}>{langue.ANNONCES.annoncesUrg}</h4>

                    <div id={"div_annonces_u_border"}>
                        {dataAnnoncesUrgentes.map(dataprop => <Annonces_urgentes id={dataprop.id} profil={dataprop.profil} titre={dataprop.titre} lVente={dataprop.paysArriver.nom} villeArriver={dataprop.villeArriver} lAchat={dataprop.paysDepart.nom} description={dataprop.description} photo={dataprop.image} user={dataprop.user} annonce={dataprop} devise={dataprop.devise} ></Annonces_urgentes>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Annonces;

