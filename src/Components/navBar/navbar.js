
import './navbar.css'
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../donness.js'
import { useState } from 'react';

function NavBar() {

    const photo = useAppStore((state) => state.User.photo);
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

    function goAccueil() {
        setIsConnecte(false);
        navigate('/');
    }

    function goAnnonces() {
        navigate('/mesAchatsEtVoyages')
    }

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const style = {height : isHover ? "20px" : '98px'};

    if (isConnecte) {
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
                        <button className='annonces' onClick={goAnnonces}>
                            Annonces
                            <i class="fleche fa-solid fa-angle-down"></i>
                        </button>
                    </div>
                    <div className='div_profil'>
                        <button className='profil'>
                            <span class="arriere_plan_profil fondConnecte"><img className="PhotoProfilNavBar" src={photo} alt='Schémas' /></span>
                            <i class="flecheProfil fa-solid fa-angle-down"></i>
                            <div class="dropdown-content">
                                <button onClick={goProfil}>Mon profil</button>
                                <button onClick={goAccueil}>Se déconnecter</button>
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
                        <button className='annonces'>
                            Annonces
                            <i class="fleche fa-solid fa-angle-down"></i>
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

/*import './navbar.css'

function NavBar() {

    return (
        <div className='bar'>
            <div className="Logo">
                <img className="imageLogo"src='/../../images/logo_bwob.png' alt='logo'></img>
            </div>
            <div className='nav'>
                <div  className='div_creerAnnonce'>
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
                    <button className='annonces'>
                        Annonces
                        <i class="fleche fa-solid fa-angle-down"></i>
                    </button>
                </div>
                <div  className='div_profil'>
                    <button className='profil'>
                        <span class="arriere_plan_profil"><i class="logo_profil fa-regular fa-circle-user"></i></span>
                        <i class="flecheProfil fa-solid fa-angle-down"></i>
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
}









export default NavBar;*/