
import './navbar.css'
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../donness.js'
import { useState } from 'react';

function NavBar() {
    const utilisateur = JSON.parse(localStorage.getItem("User"));
    const isConnecte = useAppStore((state) => state.isConnecte);
    const setIsConnecte = useAppStore((state) => state.setIsConnecte)

    let navigate = useNavigate();

    function goConnexion() {
        navigate('/Connexion');
    }
    function goProfil() {
        navigate('/monProfil');
    }

    function goCreerAnnonce() {
        navigate('/creerUneAnnonce');
    }

    function goMesAchats() {
        navigate('/mesAchatsEtVoyages');
    }

    function goAccueil() {
        localStorage.removeItem('User');
        console.log(localStorage.getItem("User"));
        setIsConnecte(false);
        navigate('/');
    }

    function goAnnonces() {

        navigate('/annonces')
    }

    function goMesAchats() {
        navigate('/MesAchatsEtVoyages');
    }
    function goMesAnnonces() {
        navigate('/MesAnnonces');
    }

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const style = {height : isHover ? "20px" : '98px'};

    if (localStorage.getItem("User") != null) {
        return (
            <div className='bar'>
                <div className="Logo">
                    <img className="imageLogo" src='/../../images/logo_bwob.png' alt='logo'></img>
                </div>
                <div className='nav'>
                    <div className='div_creerAnnonce'>
                        <button className='creerAnnonce' onClick={goCreerAnnonce}>
                            <span class="addAnnonce">
                                <i class="logo_annonce fa-regular fa-file-lines"></i>
                            </span>
                            <span class="text_add_annonce">
                                Creer une annonce
                            </span>
                        </button>
                    </div>
                    <div className='div_annonces'>
                        <button className='annonces persone_co'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            <span id={"arriere_plan_annonces"}>Annonces <i
                                className="flecheAnnonces fa-solid fa-angle-down"></i>
                            </span>
                            <div  className="dropdown-content-1">
                                <div id={"arriere_plan_annonces_appuyé"}>
                                    Annonces <i className="flecheAnnonces fa-solid fa-angle-down"></i>
                                </div>
                                <button onClick={goMesAnnonces}>Mes annonces </button>
                                <button onClick={goMesAchats}>Mes achats </button>
                                <button onClick={goAnnonces}>Les annonces </button>
                            </div>
                        </button>
                    </div>
                    <div className='div_profil'>
                        <button className='profil'>
                            <span class="arriere_plan_profil fondConnecte"><img className="PhotoProfilNavBar" src={utilisateur.photo} alt='Schémas' /></span>
                            <i class="flecheProfil fa-solid fa-angle-down"></i>
                            <div class="dropdown-content">
                                <button onClick={goProfil}>Mon profil</button>
                                <button onClick={goAccueil}>Se déconnecter</button>
                            </div>
                        </button>
                    </div>
                    <div className='div_mail'>
                        <button className='message' onClick={goMesAchats}>
                            <i class="logo_message fa-regular fa-envelope"></i>
                        </button>
                    </div>
                </div>


            </div>
        );
        console.log("co");
    } else {
        return (
            <div className='bar'>
                <div className="Logo">
                    <img className="imageLogo" src='/../../images/logo_bwob.png' alt='logo'></img>
                </div>
                <div className='nav'>
                    <div className='div_creerAnnonce'>
                        <button className='creerAnnonce'>
                            <span class="addAnnonce">
                                <i class="logo_annonce fa-regular fa-file-lines"></i>
                            </span>
                            <span class="text_add_annonce">
                                Creer une annonce
                            </span>
                        </button>
                    </div>
                    <div className='div_annonces'>
                        <button className='annonces'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            <span id={"arriere_plan_annonces"}>Annonces <i
                                className="flecheAnnonces fa-solid fa-angle-down"></i>
                            </span>
                            <div  className="dropdown-content-1">
                                <div  id={"arriere_plan_annonces_appuyé"}>
                                    Annonces <i className="flecheAnnonces fa-solid fa-angle-down"></i>
                                </div>
                                <button onClick={goAnnonces}>Les annonces </button>
                            </div>
                        </button>
                    </div>
                    <div className='div_profil'>
                        <button className='profil' style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <span class="arriere_plan_profil"><i class="logo_profil fa-regular fa-circle-user"></i></span>
                            <i class="flecheProfil fa-solid fa-angle-down"></i>
                            <div class="dropdown-content">
                                <button onClick={goConnexion}>Se connecter</button>
                            </div>
                        </button>
                    </div>
                    <div className='div_mail'>
                        <button className='message'>
                            <i class="logo_message fa-regular fa-envelope"></i>
                        </button>
                    </div>
                </div>


            </div>
        );
        console.log("pas co");
    }

}

export default NavBar;
