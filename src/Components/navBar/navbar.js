
import './navbar.css'
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../donness.js'
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'
import { useState, useEffect } from 'react'

function NavBar(props) {
    const utilisateur = JSON.parse(localStorage.getItem("User"));
    const [langue, setLangue] = useState(français);

    useEffect( () => {
        setLangue(anglais);
    })

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

    function goAdmin() {
        navigate('/Admin');
    }

    function goMesAchats() {
        navigate('/mesAchatsEtVoyages');
    }

    function goAccueil() {
        localStorage.removeItem('User');
        console.log(localStorage.getItem("User"));
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
                            <span className="addAnnonce">
                                <i className="logo_annonce fa-regular fa-file-lines"></i>
                            </span>
                            <span className="text_add_annonce">
                                {langue.NAVBAR.creer}
                            </span>
                        </button>
                    </div>
                    <div className='div_annonces'>
                        <button className='annonces persone_co'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            <span id={"arriere_plan_annonces"}>{langue.NAVBAR.annonces} <i
                                className="flecheAnnonces fa-solid fa-angle-down"></i>
                            </span>
                            <div  className="dropdown-content-1">
                                <div id={"arriere_plan_annonces_appuyé"}>
                                    {langue.NAVBAR.annonces} <i className="flecheAnnonces fa-solid fa-angle-down"></i>
                                </div>
                                <p onClick={goMesAnnonces}>{langue.NAVBAR.mesAnnonces} </p>
                                <p onClick={goMesAchats}>{langue.NAVBAR.mesAchats} </p>
                                <p onClick={goAnnonces}>{langue.NAVBAR.lesAnnonces} </p>
                            </div>
                        </button>
                    </div>
                    <div className='div_profil'>
                        <button className='profil'>
                            <span className="arriere_plan_profil fondConnecte"><img className="PhotoProfilNavBar" src={utilisateur.photo} alt='Schémas' /></span>
                            <i className="flecheProfil fa-solid fa-angle-down"></i>
                            <div className="dropdown-content">
                                <p onClick={goProfil}>{langue.NAVBAR.profil}</p>
                                <p onClick={goAccueil}>{langue.NAVBAR.deconnecter}</p>
                            </div>
                        </button>
                    </div>
                    <div className='div_mail'>
                        <button className='message'>
                            <i className="logo_message fa-regular fa-envelope"></i>
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
                        <button className='creerAnnonce' onClick={goConnexion} >
                            <span className="addAnnonce">
                                <i className="logo_annonce fa-regular fa-file-lines"></i>
                            </span>
                            <span className="text_add_annonce">
                                {langue.NAVBAR.creer}
                            </span>
                        </button>
                    </div>
                    <div className='div_annonces'>
                        <button className='annonces'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            <span id={"arriere_plan_annonces"}>{langue.NAVBAR.annonces} <i
                                className="flecheAnnonces fa-solid fa-angle-down"></i>
                            </span>
                            <div  className="dropdown-content-1">
                                <div  id={"arriere_plan_annonces_appuyé"}>
                                    {langue.NAVBAR.annonces} <i className="flecheAnnonces fa-solid fa-angle-down"></i>
                                </div>
                                <p onClick={goAnnonces}>{langue.NAVBAR.lesAnnonces} </p>
                            </div>
                        </button>
                    </div>
                    <div className='div_profil'>
                        <button className='profil' style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <span className="arriere_plan_profil"><i className="logo_profil fa-regular fa-circle-user"></i></span>
                            <i className="flecheProfil fa-solid fa-angle-down"></i>
                            <div className="dropdown-content">
                                <p onClick={goConnexion}>Se connecter</p>
                            </div>
                        </button>
                    </div>
                    <div className='div_mail'>
                        <button className='message'>
                            <i className="logo_message fa-regular fa-envelope"></i>
                        </button>
                    </div>
                </div>


            </div>
        );
        console.log("pas co");
    }

}

export default NavBar;
