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
    const [voyage, setVoyage] = useState(false);
    const [achat, setAchat] = useState(false);
    const [max, setMax] = useState();
    const [min, setMin] = useState();
    const [devise, setDevise] = useState();

    const [langue, setLangue] = useState(français);

    useEffect(() => {
        setLangue(anglais);
    })

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


    const data = [{ key: 1, titre: "annonces1", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", typeContrepartie: "div_contrepartie", Prix1: "40,00 €", PrixV: "60,00 €", coutTot: "3670,00 €" },
    { key: 2, titre: "annonces2", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", typeContrepartie: "div_contrepartie_1", Prix1: "40,00 €", PrixV: "60,00 €", coutTot: "3670,00 €" },
    { key: 3, titre: "annonces3", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", typeContrepartie: "div_contrepartie_2", Prix1: "40,00 €", PrixV: "60,00 €", coutTot: "3670,00 €" },
    { key: 4, titre: "annonces4", lVente: "Paris, France", lAchat: "Madrid, Espagne", description: "super ordi topito", profil: "Leo Comte", typeContrepartie: "div_contrepartie", Prix1: "40,00 €", PrixV: "60,00 €", coutTot: "3670,00 €" }]
    /*
        useEffect(() => {
            async function fetchRecherche() {
                let res = fetch(`http://localhost:8080/api/annonce/all?limit=5&offset=0`);
                const data = await res.json();
                console.log(data);
                setDataAnnonces(data);
                console.log(dataAnnonces);
            } 
            fetchRecherche();
        }, []);*/


    useEffect(() => {
        async function fetchDetails() {
            const response = await fetch(`http://localhost:8080/api/annonce/recherche`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    offset: 0,
                    limit: 10,
                })
            });
            const data = await response.json();
            console.log(data);
            setDataAnnonces(data);
            console.log(dataAnnonces);
            //console.log(us)
        }
        fetchDetails();
    }, []);

    return (
        <div className='page'>
            <div className='zone_navBar'>
                <NavBar />
            </div>
            <div className="div_photo_nom">

                <h1> {langue.ANNONCES.bonjour}  {utilisateur.prenom} {utilisateur.nom}</h1>
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
                    <input className={"input_annonces"} type={"text"} placeholder={langue.ANNONCES.motsCles}></input>
                </span>
                <span className={"conteneur_input_annonces contour_bleu"} id={"depart"}> {langue.ANNONCES.depart}
                    <input className={"input_annonces"} type={"text"} placeholder={"Votre ville, Pays"}></input>
                </span>

                <span className={"conteneur_input_annonces contour_bleu"}> {langue.ANNONCES.arrivee}
                    <input className={"input_annonces"} type={"text"} placeholder={"Madrid, Espagne"}></input>
                </span>
            </div>
            <div className={"div_annonces_produit"}>
                <div className={"div_affiner_recherhce"}>
                    <p className={"titre_recherche_gauche"}><strong>{langue.ANNONCES.produit}</strong></p>
                    <input type="checkbox" className={"checkbox_input"} id="Electronique" />
                    <label htmlFor="Electronique">{langue.ANNONCES.electronique}</label>
                    <br />
                    <input type="checkbox" className={"checkbox_input"} id="Comestible" />
                    <label htmlFor="Comestible">{langue.ANNONCES.comestible}</label>
                    <br />
                    <input type="checkbox" className={"checkbox_input"} id="Liquide" />
                    <label htmlFor="Liquide">{langue.ANNONCES.liquide}</label>
                    <br />
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
                    <input type="radio" className={"checkbox_input"} id="Euros" name='devise' value="euro" onChange={handleDeviseChange} />
                    <label htmlFor="Euros">Euros</label>
                    <br />
                    <input type="radio" className="checkbox_input" id="USD" name='devise' value="usd" onChange={handleDeviseChange} />
                    <label htmlFor="USD">USD</label>
                    <br />
                </div>
                <div className="div_annonces_lamda">
                    {dataAnnonces.map(dataprop => <Annonces_vu_voyageur id={dataprop.id} titre={dataprop.titre} lVente={dataprop.paysArriver.nom} villeArriver={dataprop.villeArriver} lAchat={dataprop.paysDepart.nom} description={dataprop.description} profil={dataprop.profil} photo={dataprop.image} user={dataprop.user} typeContrepartie={dataprop.typeContrepartie} prix1={dataprop.Prix1} prixV={dataprop.PrixV} coutTot={dataprop.prix} ></Annonces_vu_voyageur>)}
                </div>
                <div className={"div_annonces_urgentes"}>
                    <h4 id={"titre_A_urgentes"}>{langue.ANNONCES.annoncesUrg}</h4>

                    <div id={"div_annonces_u_border"}>
                        {data.map(dataprop => <Annonces_urgentes id={dataprop.key} profil={dataprop.profil} titre={dataprop.titre} lVente={dataprop.lVente} lAchat={dataprop.lAchat} prixV={dataprop.PrixV} ></Annonces_urgentes>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Annonces;

/*
                <select name="combobox" id="voyage-select" className={"b_type_voyage"} >
                    <option value="allez simple"> Allez simple</option>
                    <option value="allez retour"> Allez retour</option>
                </select>

                <button className={"b_type_voyage"}>
                    <i className="fa-sharp fa-solid fa-plane-up"></i>
                    <span id={"span_bouton"}> Aller simple </span>
                    <i className="fa-solid fa-angle-down"></i>
                </button>

 */