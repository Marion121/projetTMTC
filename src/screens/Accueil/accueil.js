import './accueil.css'
import '../css_general.css'
import NavBar from '../../Components/navBar/navbar'
import {useNavigate} from 'react-router-dom'


function Accueil() {

    let navigate = useNavigate();

    function goConnexion() {
        if(localStorage.getItem("User") != null){
            navigate('/Annonces');
        }else{
            navigate('/Connexion');
        }
       
    }

    function goInscription() {
        navigate('/Inscription');
    }

    return (
        <div className='page'>
            <div className='zone_navBar'>
                <NavBar/>
            </div>
            <div className='zone2'>
                <div className="block">
                    <div className='slogan'>
                        <table className='tab_slogan'>
                            <tbody>
                                <tr>
                                    <td className="sloganBleuCiel"> Achetez</td>
                                    <td className="point"><i className="fa-solid fa-circle"></i></td>
                                    <td className="sloganBleuCiel"> Voyagez</td>
                                    <td className="point"><i className="fa-solid fa-circle"></i></td>
                                    <td className="sloganBleuMarine"> Recevez</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="inscription_connecter">
                        <table id={"table_inscription_connexion"}>
                            <tbody>
                                <tr>
                                    <td className={"boutonInscriptionPosition"}>
                                        <button className='inscription' onClick={goInscription}>
                                            Inscription
                                        </button>
                                    </td>
                                    <td className={"seConnecterPosition"}>
                                        <button className='seConnecter' onClick={goConnexion}>
                                            Se connecter
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='zone3'>
                <div>
                    Texte
                </div>
                <img className="ImageBas" src='/../../images/schemaAccueil.jpeg' alt='Schémas'/>
            </div>
        </div>

    );
}

export default Accueil;

/*
    return (
        <div className='page'>
            <div className='zone_navBar'>
                <NavBar/>
            </div>
            <div className='zone2'>
                <div className="block">
                    <div className='slogan'>
                            <table>
                                <tr>
                                    <td className="sloganBleuCiel">     Achetez   </td>
                                    <td className="point"> <i className="fa-solid fa-circle"></i> </td>
                                    <td className="sloganBleuCiel">   Voyagez   </td>
                                    <td className="point"> <i className="fa-solid fa-circle"></i> </td>
                                    <td className="sloganBleuMarine">   Recevez   </td>
                                </tr>
                            </table>
                    </div>
                    <div className="inscription_connecter">
                        <table>
                            <tr>
                                <td className={"boutonInscriptionPosition"}>
                                    <button className='inscription'>
                                        Inscription
                                    </button>
                                </td>
                                <td className={"seConnecterPosition"}>
                                    <button className='seConnecter'>
                                        Se connecter
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className='zone3'>
                <div >
                    Texte
                </div>
                    <img className="ImageBas" src='/../../images/schemaAccueil.jpeg' alt='Schémas'/>
            </div>
        </div>

);
}

export default Accueil;*/