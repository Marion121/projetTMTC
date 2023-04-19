import NavBar from "../../Components/navBar/navbar";
import './connexion.css'
import '../css_general.css'
import { useNavigate } from 'react-router-dom';
import { useAppStore } from "../../donness";
import { useState } from "react";


function Connexion() {
    const setIsConnecte = useAppStore((state) => (state.setIsConnecte));
    let navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useAppStore((state) => state.setUser);
    const User = useAppStore((state) => state.User);
    var myHeaders = new Headers();
    var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default' };

    let handleSubmit = async (e) => {
        e.preventDefault();
        let res = await fetch(`http://localhost:8080/api/user/connexion?email=${email}&password=${password}` )
            .then(response => response.json())
            .then(data => {
                setUser({
                    Email: data.email,
                    Nom: data.nom,
                    Prenom: data.prenom,
                    DateNaissance: data.dateNaissance,
                    Ville: data.ville,
                    Pays: data.pays,
                    CoordonneesBancaires: "1234 1234 1234 1234",
                    photo: data.photo,
                    adresse: data.adresse,
                    telephone: data.telephone,
                    ci: data.ci,
                })
                localStorage.setItem("User", JSON.stringify(User));
                navigate('/Annonces');
            }
            )
            .catch(error => console.error(error));
            const utilisateur = JSON.parse(localStorage.getItem("User"));
            console.log(utilisateur);
            utilisateur.Pays = "ESPAGNE";
            console.log(utilisateur.Pays);
            
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

                    <input type="submit" value='LOGIN'></input>
                </form>

            </div>
        </div>
    );
}
export default Connexion;