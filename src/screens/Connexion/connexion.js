import NavBar from "../../Components/navBar/navbar";
import './connexion.css'
import '../css_general.css'
import {useNavigate} from 'react-router-dom';
import { useAppStore } from "../../donness";

function Connexion() {
    const setIsConnecte = useAppStore((state)=>(state.setIsConnecte));
    let navigate = useNavigate();

    function goAnnonces() {
        setIsConnecte(true);
        navigate('/Annonces');
    }
    
    return (
        <div className="page">
            <div className="zone_navBar">
                <NavBar />
            </div>
            <div className="container_form">
                <form method="POST" onSubmit={goAnnonces}>
                    <h1>Connexion</h1>

                    <label>E-mail</label>
                    <input className="Input" type="email" placeholder="Entrer votre e-mail" name="email" required></input>

                    <label>Mot de passe</label>
                    <input className="Input" type="password" placeholder="Entrer le mot de passe" autoComplete="current-password" name="password" required></input>

                    <input type="submit" id='submit' value='LOGIN'></input>
                </form>

            </div>
        </div>
    );
}
export default Connexion;