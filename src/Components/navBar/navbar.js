
import './navbar.css'
import { useNavigate } from 'react-router-dom';


function NavBar() {

    let navigate = useNavigate();

    function goConnexion(){
        navigate('/Connexion');
    }

    function goAnnonces(){
        navigate('/Annonces')
    }

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
                    <button className='annonces' onClick={goAnnonces}>
                        Annonces
                        <i class="fleche fa-solid fa-angle-down"></i>
                    </button>
                </div>
                <div  className='div_profil'>
                    <button className='profil'>
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