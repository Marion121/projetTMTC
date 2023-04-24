import NavBar from '../../Components/navBar/navbar';
import "./detailAnnonce.css";
import "../css_general.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'
import { useNavigate } from 'react-router-dom';


function DetailAnnonce() {
    const utilisateur = JSON.parse(localStorage.getItem("User"));
    const [annonce, setAnnonce] = useState([]);
    const { id } = useParams();
    const [langue, setLangue] = useState(français);

    //const idUtilisateur = props.id;
    let navigate = useNavigate();

    function goProfil() {
        //navigate(`/Profil${idUtilisateur}`, {state: {idUtilisateur: idUtilisateur}});
        navigate('/Profil');
    }

    useEffect(() => {
        async function fetchDetails() {
            const response = await fetch(`http://localhost:8080/api/annonce?id=${id}`);
            const data = await response.json();
            console.log(data);
            setAnnonce(data);
            console.log(annonce);
        }
        setLangue(anglais);
        fetchDetails();
    }, []);


    return (
        <div id='divPageDetail'>
            <div className='zone_navBar'>
                <NavBar />
            </div>
            <div id='divWrapperDetail'>
                <div id='divEnteteDetail'>
                    <div id='divTitre'>
                        <h1>{annonce.titre}</h1>
                    </div>
                    <div id='divNomDate'>
                        <div id='divNom'>
                            <span id='spanImage'><img className="photoProfil photoDetailAnnonce" src={utilisateur.photo} alt='Schémas' /></span>
                            <span id='spanNom' onClick={goProfil}>Murielle Lecher</span>
                        </div>
                        <div id='divDate'>
                            Il y a 3 jours
                        </div>
                    </div>
                </div>
                <div id='divInfosOffre'>
                    <div id='divImage'>
                        <img id='imageProduit' src="../../images/ordi.png" alt='photoProduit' />
                    </div>
                    <div id='divPrixDescription'>
                        <div id='divPrixDetail'>
                            <div id='divContrepartie1' className='div_contrepartie_detailAnnonce'>
                                <p className={"text_contrepartie_detailAnnonce"}>{langue.COMPONENT_ANNONCE.contrepartie} <i className="fa-solid fa-bag-shopping"></i></p>
                                <p className={"text_prix_detailAnnonce"}><strong>60€</strong></p>
                            </div>
                            <div id='divContrepartie2' className='div_contrepartie_detailAnnonce'>
                                <p className={"text_contrepartie_detailAnnonce"}>{langue.COMPONENT_ANNONCE.contrepartie} <i className="fa-solid fa-plane-departure"></i></p>
                                <p className={"text_prix_detailAnnonce"}><strong>80€</strong></p>
                            </div>
                            <div id='divContrepartie3' className='div_contrepartie_detailAnnonce'>
                                <p className={"text_contrepartie_detailAnnonce"}><strong>{langue.COMPONENT_ANNONCE.coutProduit}</strong> <br />
                                    <strong>{annonce.prix}</strong></p>
                            </div>

                        </div>
                        <div id='divDescription'>
                            <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. </p>
                        </div>
                    </div>
                </div>
                <div id='divAction'>
                    <div id='divAcheterLivre' className='bordure'>
                        <span><i className="fa-solid fa-plane-departure logoGauche"></i><i className="fa-solid fa-bag-shopping logoDroite"></i><span>{langue.DETAIL_ANNONCE.acheterLivrer}</span></span>
                    </div>
                    <div id='divAcheter' className='bordure'>
                        <span><i className="fa-solid fa-bag-shopping logoGauche"></i>{langue.DETAIL_ANNONCE.acheter}</span>
                    </div>
                    <div id='divLivrer' className='bordure'>
                        <span><i className="fa-solid fa-plane-departure logoGauche"></i>{langue.DETAIL_ANNONCE.livrer}</span>
                    </div>
                </div>
                <div id='divAstuce'>
                    <div id='divTitreAstuce'>
                        <strong>{langue.DETAIL_ANNONCE.titreAstuce}</strong>
                    </div>
                    <div id='divTextAstuce'>
                        <span> {langue.DETAIL_ANNONCE.descriptionAstuce} </span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DetailAnnonce;