import NavBar from '../../Components/navBar/navbar';
import './creerUneAnnonce.css'
import '../css_general.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../donness';
import AvancementCreationAnnonce from '../../Components/AvancementCreationAnnonce/avancementCreationAnnonce';

function CreerUneAnnonce() {
    const [file, setFile] = useState();
    const [dragOver, setDragOver] = useState(false);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const setCreationAnnonce = useAppStore((state) => state.setCreationAnnonce);
    const CreationAnnonce = useAppStore((state)=>state.CreationAnnonce);
    const [paysDepart, setPaysDepart] = useState("");
    const [villeArrivee, setVilleArrivee] = useState("");
    const [description, setDescritpion] = useState("");
    const [poids, setPoids] = useState("");
    const [titre, setTitre] = useState("");

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
        console.log();
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
            prixAchats: "",
            devise: "",
            besoinAcheteur: false,
            besoinVoyageur: false,
        });
        goCreerAnnonce2();
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
                        <h1>Lieu d'achat et de Réception</h1>
                        <table>
                            <tr>
                                <td>
                                    <label><i class="logoGauche fa-sharp fa-solid fa-plane-departure"></i>Pays de votre produit</label><br />
                                    <input className="Input" type="text" placeholder="Allemagne,Europe" name="paysProduit" onChange={handleChangePays} required></input>
                                </td>
                                <td>
                                    <label><i class="logoGauche fa-sharp fa-solid fa-plane-departure"></i>Ville de livraison de votre produit</label><br />
                                    <input className="Input" type="text" placeholder="Montréal, Canada, Amérique du Nord" name="villeLivraison" onChange={handleChangeVille} required></input>
                                </td>
                            </tr>
                        </table>



                    </div>
                    <div className='detailsDuProduit'>
                        <h1>Détails du produit</h1>

                        <div id='sousDivDetailsDuProduit'>

                            <div className='divZoneImage'>
                                <div>
                                    <label htmlFor='dropZone'>Photo de votre produit</label><br />
                                    <div id="drop-zone" className={`${dragOver ? 'drag-over' : ''} contour_bleu`} name='dropZone' onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                                        Glisser ici
                                    </div>
                                </div>


                                <div className='divImageDeposee contour_bleu'>
                                    <img className='imageDeposee' src={image} alt="image" name='imageDeposee' />
                                </div><br />
                            </div>

                            <div id='divPoidEtTitre'>
                                <label>Poid du produit</label><br />
                                <select name='poids' id='choixPoid' className='contour_bleu' onChange={handleChangePoids}>
                                    <option>Moins de 1kg</option>
                                    <option>Entre 1kg et 5kg</option>
                                    <option>Plus de 5kg</option>
                                </select><br />

                                <label>Titre de l'annonce</label><br />
                                <input className="Input" type="text" placeholder="Croissant français" name="titreAnnonce" onChange={handleChangeTitre} required></input><br />
                            </div>
                        </div>
                        <label id='labelDescription'>Description</label><br />
                        <textarea id='textareaDescription' className="contour_bleu" rows="5" cols="41.5" placeholder="Je souhaite aquérir un croissant français de..." name="villeMivraison" onChange={handleChangeDescription} required></textarea>
                    </div>
                    <button className='boutonPrecedent' >Precedent</button>
                    <input type="submit" className='boutonSuivant btn_orange' onClick={saveDataCreationAnnonce} value="Suivant"></input>
                    </form>
                </div>
                <div id='avancement'>
                    <AvancementCreationAnnonce etatAvancement={2} />
                </div>

            </div>

        </div>
    );
}

export default CreerUneAnnonce;