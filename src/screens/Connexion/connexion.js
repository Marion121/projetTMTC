import NavBar from "../../Components/navBar/navbar";
import './connexion.css'
import '../css_general.css'
import { useNavigate } from 'react-router-dom';
import { useAppStore } from "../../donness";
import { useState } from "react";
import axios from 'axios';

function Connexion() {
    const setIsConnecte = useAppStore((state) => (state.setIsConnecte));
    let navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function goAnnonces() {
        setIsConnecte(true);
        navigate('/Annonces');
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            let res = await fetch(`http://localhost:8080/api/user/connexion?id=${1}`, {
                method: "GET",
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setEmail("");
                setPassword("");
                setMessage("User found");
            } else {
                setMessage("Some error occured");
            }
            console.log(message);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="page">
            <div className="zone_navBar">
                <NavBar />
            </div>
            <div className="container_form">
                <form id="formConnexion" method="GET" onSubmit={handleSubmit}>
                    <h1>Connexion</h1>

                    <label>E-mail</label>
                    <input className="Input" type="email" placeholder="Entrer votre e-mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>

                    <label>Mot de passe</label>
                    <input className="Input" type="password" placeholder="Entrer le mot de passe" autoComplete="current-password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>

                    <input type="submit" className="submitConnexion" value='LOGIN'></input>
                </form>

            </div>
        </div>
    );
}
export default Connexion;