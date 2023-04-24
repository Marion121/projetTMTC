import '../css_general.css'
import './annonces.css'
import NavBar from '../../Components/navBar/navbar'
import Annonces_vu_voyageur from "../../Components/annonces_vue_voyageur/annonces_vue_voyageur";
import Annonces_urgentes from "../../Components/annonces_urgentes/annonces_urgentes";
import { useState, useEffect } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'
=======

>>>>>>> 18de26d5f82855648bb4f0969b1ee6b1dfb1864a

function Annonces() {
    const utilisateur = JSON.parse(localStorage.getItem("User"));


    const [dataAnnonces, setDataAnnonces] = useState([]);
    const [voyage, setVoyage] = useState(false);
    const [achat, setAchat] = useState(false);
    const [max, setMax] = useState();
    const [min, setMin] = useState();
    const [devise, setDevise] = useState();

    const [langue, setLangue] = useState(français);

    useEffect( () => {
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
<<<<<<< HEAD
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
        async function fetchRecherche() {
            const response = fetch(`http://localhost:8080/api/annonce/recherche`, {
=======
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
>>>>>>> 18de26d5f82855648bb4f0969b1ee6b1dfb1864a
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    offset: 0,
                    limit: 10,
                    typeImportance: "classic"
                })
            });
            const data = await response.json();
            console.log(data);
            setDataAnnonces(data);
            console.log(dataAnnonces);
        }
<<<<<<< HEAD
        fetchRecherche();
    }, []);
=======
        fetchDetails();
    }, []);*/
>>>>>>> 18de26d5f82855648bb4f0969b1ee6b1dfb1864a

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
<<<<<<< HEAD
            <div className={"div_recherche"}>
                <span className={"titre_Recherche"} id={"depart"}><i className="fa-solid fa-magnifying-glass"></i>
                    <input className={"input_recherche"} type={"text"} placeholder={langue.ANNONCES.motsCles}></input>
                </span>
                <button className={"b_type_voyage"}>
                    <i className="fa-sharp fa-solid fa-plane-up"></i>
                    <span id={"span_bouton"}> Aller simple </span>
                    <i className="fa-solid fa-angle-down"></i>
                </button>
                <span className={"titre_depart"} id={"depart"}> {langue.ANNONCES.depart}
                    <input className={"input_départ"} type={"text"} placeholder={"Votre ville, Pays"}></input>
                </span>

                <span className={"titre_arrive"}> {langue.ANNONCES.arrivee}
                    <input className={"input_arrivé"} type={"text"} placeholder={"Madrid, Espagne"}></input>
                </span>
            </div>
            <div className={"div_annonces_produit"}>
                <div className={"div_affiner_recherhce"}>
                    <p className={"titre_recherche_gauche"}><strong>{langue.ANNONCES.produit}</strong></p>
=======
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
>>>>>>> 18de26d5f82855648bb4f0969b1ee6b1dfb1864a
                    <input type="checkbox" className={"checkbox_input"} id="Electronique" />
                    <label htmlFor="Electronique">{langue.ANNONCES.electronique}</label>
                    <br />
                    <input type="checkbox" className={"checkbox_input"} id="Comestible" />
                    <label htmlFor="Comestible">{langue.ANNONCES.comestible}</label>
                    <br />
                    <input type="checkbox" className={"checkbox_input"} id="Liquide" />
                    <label htmlFor="Liquide">{langue.ANNONCES.liquide}</label>
                    <br />
<<<<<<< HEAD
                    <p className={"titre_recherche_gauche"}><strong>{langue.ANNONCES.typeAnnonce}</strong></p>
=======
                    <p className="titre_recherche_gauche"><strong>Type d'annonce</strong></p>
>>>>>>> 18de26d5f82855648bb4f0969b1ee6b1dfb1864a
                    <input type="checkbox" className={"checkbox_input"} id="Achat" checked={achat} onChange={handleAchatChange} />
                    <label htmlFor="Achat">{langue.ANNONCES.achat}</label>
                    <br />
<<<<<<< HEAD
                    <input type="checkbox" className={"checkbox_input"} id="Voyage" checked={voyage} onChange={handleVoyageChange} />
                    <label htmlFor="Voyage">{langue.ANNONCES.voyage}</label>
                    <br />
                    <p className={"titre_recherche_gauche"}><strong></strong></p>
                    <table className={"table_recherche"}>
=======
                    <input type="checkbox" className="checkbox_input" id="Voyage" checked={voyage} onChange={handleVoyageChange} />
                    <label htmlFor="Voyage">Voyage</label>
                    <br />
                    <p className="titre_recherche_gauche"><strong>Rétribution</strong></p>
                    <table className="table_recherche">
>>>>>>> 18de26d5f82855648bb4f0969b1ee6b1dfb1864a
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
<<<<<<< HEAD
                    <p className={"titre_recherche_gauche"}><strong>{langue.ANNONCES.devise}</strong></p>
                    <input type="radio" className={"checkbox_input"} id="Euros" name='devise' value="euro" onChange={handleDeviseChange} />
=======
                    <p className="titre_recherche_gauche"><strong>Devise</strong></p>
                    <input type="radio" className="checkbox_input" id="Euros" name='devise' value="euro" onChange={handleDeviseChange} />
>>>>>>> 18de26d5f82855648bb4f0969b1ee6b1dfb1864a
                    <label htmlFor="Euros">Euros</label>
                    <br />
                    <input type="radio" className="checkbox_input" id="USD" name='devise' value="usd" onChange={handleDeviseChange} />
                    <label htmlFor="USD">USD</label>
                    <br />
                </div>
                <div className="div_annonces_lamda">
                    {data.map(dataprop => <Annonces_vu_voyageur id={dataprop.key} titre={dataprop.titre} lVente={dataprop.lVente} lAchat={dataprop.lAchat} description={dataprop.description} profil={dataprop.profil} typeContrepartie={dataprop.typeContrepartie} prix1={dataprop.Prix1} prixV={dataprop.PrixV} coutTot={dataprop.coutTot} ></Annonces_vu_voyageur>)}
                </div>
<<<<<<< HEAD
                <div className={"div_annonces_urgentes"}>
                    <h4 id={"titre_A_urgentes"}>{langue.ANNONCES.annoncesUrg}</h4>
=======
                <div className="div_annonces_urgentes">
                    <h4 id={"titre_A_urgentes"}>Annonces urgentes</h4>
>>>>>>> 18de26d5f82855648bb4f0969b1ee6b1dfb1864a
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