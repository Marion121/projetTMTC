  import NavBar from '../../Components/navBar/navbar';
import './creerUneAnnonce.css'
import '../css_general.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../donness';
import AvancementCreationAnnonce from '../../Components/AvancementCreationAnnonce/avancementCreationAnnonce';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function CreerUneAnnonce() {
    const navigate = useNavigate();

    const setCreationAnnonce = useAppStore((state) => state.setCreationAnnonce);
    const CreationAnnonce = useAppStore((state)=>state.CreationAnnonce);

    const [file, setFile] = useState();
    const [dragOver, setDragOver] = useState(false);
    const [image, setImage] = useState(CreationAnnonce.photo);
    const [paysDepart, setPaysDepart] = useState(CreationAnnonce.paysDepart);
    const [villeArrivee, setVilleArrivee] = useState(CreationAnnonce.villeArrivee);
    const [description, setDescritpion] = useState(CreationAnnonce.description);
    const [poids, setPoids] = useState(CreationAnnonce.poids);
    const [titre, setTitre] = useState(CreationAnnonce.titre);

    const [langue, setLangue] = useState(français);

    useEffect( () => {
        //const utilisateur = JSON.parse(localStorage.getItem("User"));
        //localStorage.setItem('Langue', JSON.stringify('anglais'));
       /* console.log(JSON.parse(localStorage.getItem("Langue")));
        if(JSON.parse(localStorage.getItem("Langue")) == "anglais"){
            setLangue(anglais);
        }else{
            setLangue(français);
        }*/
        setLangue(anglais);
        console.log("ok");
    })

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
        const file = event.dataTransfer.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file)
        console.log(file);
    };

    function goCreerAnnonce2() {
        navigate('/creerUneAnnonce2');
    }

    function handleChangePays(e){
        setPaysDepart(e.target.value);
    }

    function handleChangeVille(e){
        setVilleArrivee(e.target.value);
    }

    function handleChangePoids(e){
        setPoids(e.target.value);
    }

    function handleChangeTitre(e){
        setTitre(e.target.value);
    }

    function handleChangeDescription(e){
        setDescritpion(e.target.value);
    }

    function saveDataCreationAnnonce() {
        setCreationAnnonce({
            paysDepart: paysDepart,
            villeArrivee: villeArrivee,
            photo: image,
            poids: poids,
            titre: titre,
            description: description,
            prixAchats: CreationAnnonce.prixAchats,
            devise: CreationAnnonce.devise,
            besoinAcheteur: CreationAnnonce.besoinAcheteur,
            besoinVoyageur: CreationAnnonce.besoinVoyageur,
        });
        goCreerAnnonce2();
    }

    function goAnnonces() {
        setCreationAnnonce({
            paysDepart: "",
            villeArrivee: "",
            photo: null,
            poids: "",
            titre: "",
            description: "",
            prixAchats: "",
            devise: "",
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
                                <td>
                                    <label><i class="logoGauche fa-sharp fa-solid fa-plane-departure"></i>{langue.CREER_ANNONCE_1.paysAnnonce}</label><br />
                                    <input className="Input contour_bleu" type="text" placeholder="Allemagne,Europe" name="paysProduit" value={paysDepart} onChange={handleChangePays} required></input>
                                </td>
                                <td>
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
                                    <img className='imageDeposee' src={image} alt="image" name='imageDeposee' />
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
