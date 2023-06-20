import NavBar from '../../Components/navBar/navbar';
import './creerUneAnnonce.css'
import '../css_general.css'
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../donness';
import AvancementCreationAnnonce from '../../Components/AvancementCreationAnnonce/avancementCreationAnnonce';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function CreerUneAnnonce() {
    const navigate = useNavigate();

    const canvasRef = useRef(null);
    const setCreationAnnonce = useAppStore((state) => state.setCreationAnnonce);
    const CreationAnnonce = useAppStore((state) => state.CreationAnnonce);

    var images = new Image();

    const [file, setFile] = useState();
    const [dragOver, setDragOver] = useState(false);
    const [imageSrc, setImageSrc] = useState(CreationAnnonce.photo);
    const [paysDepart, setPaysDepart] = useState(CreationAnnonce.paysDepart);
    const [paysLivraison, setPaysLivraison] = useState(CreationAnnonce.paysArriver);
    const [villeArrivee, setVilleArrivee] = useState(CreationAnnonce.villeArrivee);
    const [description, setDescritpion] = useState(CreationAnnonce.description);
    const [poids, setPoids] = useState(CreationAnnonce.poids);
    const [titre, setTitre] = useState(CreationAnnonce.titre);
    const [listPays, setListPays] = useState([]);

    const [dataUrl, setDataUrl] = useState();
    const [langue, setLangue] = useState(français);

    useEffect(() => {
        //const utilisateur = JSON.parse(localStorage.getItem("User"));
        //localStorage.setItem('Langue', JSON.stringify('anglais'));
        /* console.log(JSON.parse(localStorage.getItem("Langue")));
         if(JSON.parse(localStorage.getItem("Langue")) == "anglais"){
             setLangue(anglais);
         }else{
             setLangue(français);
         }*/
        async function getPays() {
            const response = await fetch(`http://localhost:8080/api/pays/all`);
            const dataPays = await response.json();
            console.log(dataPays);
            setListPays(dataPays);
        }
        getPays();
        setLangue(anglais);
    }, [])

    const handleDragOver = (event) => {
        event.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setDragOver(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setDragOver(false);
        const canvas = document.getElementById('LeCanva');
        const ctx = canvas.getContext('2d');

        const file = event.dataTransfer.files[0];
        const reader = new FileReader();

        //const buffer = file.arrayBuffer();
        // each entry of array should contain 8 bits
        //const bytes = new Uint8Array(buffer);
        //console.log(bytes);
        reader.onload = function(event) {
            images.src = reader.result;
            console.log("chargé");
            
        };
        console.log("src :", images.src)

        images.onload = function () {
            console.log("entré");
            ctx.drawImage(images, 0, 0);
            console.log(file);
            const url = canvas.toDataURL('image/png');
            console.log("toDataUrl", url);
            setDataUrl(url);
        }

        
        reader.readAsDataURL(file)

    };

    function goCreerAnnonce2() {
        navigate('/creerUneAnnonce2');
    }

    function handleChangePaysDepart(e) {
        const selectedId = parseInt(e.target.value);
        const pays = listPays.find((obj) => obj.id === selectedId);
        setPaysDepart(pays)
        console.log(paysDepart);
    }

    function handleChangePaysLivraison(e) {
        const selectedId = parseInt(e.target.value);
        const pays = listPays.find((obj) => obj.id === selectedId);
        setPaysLivraison(pays);
        console.log(paysLivraison);
    }

    function handleChangeVille(e) {
        setVilleArrivee(e.target.value);
    }

    function handleChangePoids(e) {
        setPoids(e.target.value);
    }

    function handleChangeTitre(e) {
        setTitre(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescritpion(e.target.value);
    }

    function saveDataCreationAnnonce() {
        setCreationAnnonce({
            paysDepart: paysDepart,
            paysArriver: paysLivraison,
            villeArrivee: villeArrivee,
            photo: dataUrl,
            poids: poids,
            titre: titre,
            description: description,
            prixAchats: CreationAnnonce.prixAchats,
            degreImportance : CreationAnnonce.degreImportance,
            devise: CreationAnnonce.devise,
            besoinAcheteur: CreationAnnonce.besoinAcheteur,
            besoinVoyageur: CreationAnnonce.besoinVoyageur,
        });
        goCreerAnnonce2();
    }

    function goAnnonces() {
        setCreationAnnonce({
            paysDepart: {id : 1, nom : "Afghanistan"},
            paysArriver: {id : 1, nom : "Afghanistan"},
            villeArrivee: "",
            photo: null,
            poids: "",
            titre: "",
            description: "",
            prixAchats: "",
            devise: "€",
            degreImportance: "Normal",
            besoinAcheteur: false,
            besoinVoyageur: false,
        });
        navigate('/Annonces');
    }


    return (
        <div className='pageCreeruneAnnonce1'>
            <div className='zone_navBar'>
                <NavBar />
            </div>
            <div id='wrapperPageCreationAnnonce1'>
                <div id='wrapperFormCreationAnnonce1'>
                    <form method='POST' onSubmit={saveDataCreationAnnonce}>
                        <div className='lieuAchatReception'>
                            <h1>{langue.CREER_ANNONCE_1.titreDetail}</h1>
                            <table>
                                <tr>
                                    <td id='tdChoixPaysDepart'>
                                        <label><i class="logoGauche fa-sharp fa-solid fa-plane-departure"></i>{langue.CREER_ANNONCE_1.paysAnnonceProduct}</label><br />
                                        <select name='paysProduit' id='choixPaysDepart' className='contour_bleu' onChange={handleChangePaysDepart}>
                                            {listPays.map(pays => (
                                                <option key={pays.id} value={pays.id} >
                                                    {pays.nom}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td id="tdChoixPaysLivraison">
                                        <label><i class="logoGauche fa-sharp fa-solid fa-plane-departure"></i>{langue.CREER_ANNONCE_1.paysAnnonceDelivery}</label><br />
                                        <select name='paysProduit' id='choixPaysLivraison' className='contour_bleu' onChange={handleChangePaysLivraison}>
                                            {listPays.map(pays => (
                                                <option key={pays.id} value={pays.id} >
                                                    {pays.nom}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td id="tdVilleArrivee">
                                        <label><i class="logoGauche fa-sharp fa-solid fa-plane-departure"></i>{langue.CREER_ANNONCE_1.villeArrivee}</label><br />
                                        <input className="Input contour_bleu" type="text" placeholder="Montréal, Canada, Amérique du Nord" name="villeLivraison" value={villeArrivee} onChange={handleChangeVille} required></input>
                                    </td>
                                </tr>
                            </table>



                        </div>
                        <div className='detailsDuProduit'>
                            <h1>{langue.CREER_ANNONCE_1.titreDetail}</h1>

                            <div id='sousDivDetailsDuProduit'>

                                <div className='divZoneImage'>
                                    <div>
                                        <label htmlFor='dropZone'>{langue.CREER_ANNONCE_1.photoProduit}</label><br />
                                        <div id="drop-zone" className={`${dragOver ? 'drag-over' : ''} contour_bleu`} name='dropZone' onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                                            {langue.CREER_ANNONCE_1.glisser}
                                        </div>
                                    </div>

                                    <div className='divImageDeposee contour_bleu'>
                                        <canvas id="LeCanva" ref={canvasRef} ></canvas>
                                    </div><br />

                                    



                                </div>

                                <div id='divPoidEtTitre'>
                                    <label>{langue.CREER_ANNONCE_1.poid}</label><br />
                                    <select name='poids' id='choixPoid' className='contour_bleu' value={poids} onChange={handleChangePoids}>
                                        <option>{langue.CREER_ANNONCE_1.poids1}</option>
                                        <option>{langue.CREER_ANNONCE_1.poids2}</option>
                                        <option>{langue.CREER_ANNONCE_1.poids3}</option>
                                    </select><br />

                                    <label>{langue.CREER_ANNONCE_1.titreAnnonce}</label><br />
                                    <input className="Input contour_bleu" type="text" placeholder="Croissant français" name="titreAnnonce" value={titre} onChange={handleChangeTitre} required></input><br />
                                </div>
                            </div>
                            <label id='labelDescription'>{langue.CREER_ANNONCE_1.description}</label><br />
                            <textarea id='textareaDescription' className="contour_bleu" rows="5" cols="41.5" placeholder="Je souhaite aquérir un croissant français de..." value={description} name="villeMivraison" onChange={handleChangeDescription} required></textarea>
                        </div>
                        <button className='boutonPrecedent' onClick={goAnnonces}>{langue.CREER_ANNONCE_G.precedent}</button>
                        <input type="submit" className='boutonSuivantAnnonce btn_orange' value={langue.CREER_ANNONCE_G.suivant}></input>
                    </form>
                </div>
                <div id='avancement3'>
                    <AvancementCreationAnnonce etatAvancement={1} />
                </div>

            </div>

        </div>
    );
}

export default CreerUneAnnonce;
