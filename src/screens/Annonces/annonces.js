import '../css_general.css'
import './annonces.css'
import NavBar from '../../Components/navBar/navbar'
import Annonces_vu_voyageur from "../../Components/annonces_vue_voyageur/annonces_vue_voyageur";
import Annonces_urgentes from "../../Components/annonces_urgentes/annonces_urgentes";
import { useState, useEffect } from 'react';


function Annonces() {
    const utilisateur = JSON.parse(localStorage.getItem("User"));


    const [dataAnnonces, setDataAnnonces] = useState([]);
    const [voyage, setVoyage] = useState(false);
    const [achat, setAchat] = useState(false);
    const [max, setMax] = useState();
    const [min, setMin] = useState();
    const [devise, setDevise] = useState();

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
        if (document.readyState === 'complete') {
            let res = fetch(`http://localhost:8080/api/annonce/recherche` ,{
                method: "POST",
                headers: {    
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify({
                        devise : "€",
                    }),
                });


            console.log("here we are");
        }*/

   /* useEffect(() => {
        async function fetchDetails() {
            const response = await fetch(`http://localhost:8080/api/annonce/recherche`, {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'},
                body: JSON.stringify({
                    offset: 0,
                    limit:10,
                    typeImportance: "classic"
                })
            });
            const data = await response.json();
            console.log(data);
            setDataAnnonces(data);
            console.log(dataAnnonces);
        }
        fetchDetails();
    }, []);*/

    return (
        <div className='page'>
            <div className='zone_navBar'>
                <NavBar />
            </div>
            <div className="div_photo_nom">

                <h1> Bonjour  {utilisateur.prenom} {utilisateur.nom}</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p className="text">Retrouvez si dessous l'ensemble des annonces postées ! </p>
                <p className="text">Postulez si vous avez de la place dans votre valise ! </p>
            </div>
            <div className="div_recherche ">
                <div className="contour_bleu conteneur_input_annonces" ><i className="fa-solid fa-magnifying-glass"></i>
                    <input className="input_recherche input_annonces" type={"text"} placeholder={"Chercher des mots clés"}></input>
                </div>
                <div className="titre_depart contour_bleu conteneur_input_annonces" ><span classeName={"p_titre"}> Lieu de prise <br/> en charge : </span>
                    <input className="input_départ input_annonces" type={"text"} placeholder={"Votre ville, Pays"}></input>
                </div>

                <div className="titre_arrive contour_bleu conteneur_input_annonces"><span classeName={"p_titre"}> Lieu de <br/> depots :</span>
                    <input className="input_arrivé input_annonces" type={"text"} placeholder={"Madrid, Espagne"}></input>
                </div>
                <button className="boutonOK" id={"boutonChercher"} >
                    Chercher
                </button>
            </div>
            <div className="div_annonces_produit">
                <div className="div_affiner_recherhce">
                    <p className="titre_recherche_gauche"><strong>Produit</strong></p>
                    <input type="checkbox" className={"checkbox_input"} id="Electronique" />
                    <label htmlFor="Electronique">Electronique</label>
                    <br />
                    <input type="checkbox" className={"checkbox_input"} id="Comestible" />
                    <label htmlFor="Comestible">Comestible</label>
                    <br />
                    <input type="checkbox" className={"checkbox_input"} id="Liquide" />
                    <label htmlFor="Liquide">Liquide</label>
                    <br />
                    <p className="titre_recherche_gauche"><strong>Type d'annonce</strong></p>
                    <input type="checkbox" className={"checkbox_input"} id="Achat" checked={achat} onChange={handleAchatChange} />
                    <label htmlFor="Achat">Achat</label>
                    <br />
                    <input type="checkbox" className="checkbox_input" id="Voyage" checked={voyage} onChange={handleVoyageChange} />
                    <label htmlFor="Voyage">Voyage</label>
                    <br />
                    <p className="titre_recherche_gauche"><strong>Rétribution</strong></p>
                    <table className="table_recherche">
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
                    </table>
                    <p className="titre_recherche_gauche"><strong>Devise</strong></p>
                    <input type="radio" className="checkbox_input" id="Euros" name='devise' value="euro" onChange={handleDeviseChange} />
                    <label htmlFor="Euros">Euros</label>
                    <br />
                    <input type="radio" className="checkbox_input" id="USD" name='devise' value="usd" onChange={handleDeviseChange} />
                    <label htmlFor="USD">USD</label>
                    <br />
                </div>
                <div className="div_annonces_lamda">
                    {data.map(dataprop => <Annonces_vu_voyageur id={dataprop.key} titre={dataprop.titre} lVente={dataprop.lVente} lAchat={dataprop.lAchat} description={dataprop.description} profil={dataprop.profil} typeContrepartie={dataprop.typeContrepartie} prix1={dataprop.Prix1} prixV={dataprop.PrixV} coutTot={dataprop.coutTot} ></Annonces_vu_voyageur>)}
                </div>
                <div className="div_annonces_urgentes">
                    <h4 id={"titre_A_urgentes"}>Annonces urgentes</h4>
                    <div id={"div_annonces_u_border"}>
                        {data.map(dataprop => <Annonces_urgentes profil={dataprop.profil} titre={dataprop.titre} lVente={dataprop.lVente} lAchat={dataprop.lAchat} prixV={dataprop.PrixV} ></Annonces_urgentes>)}
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

 */