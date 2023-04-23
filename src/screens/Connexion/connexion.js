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
    //const [user, setUsers] = useState("");
    const User = useAppStore((state) => state.User);
    var myHeaders = new Headers();
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'no-cors',
        cache: 'default'
    };

    function goInscription() {
        navigate('/Inscription');
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        let res = await fetch(`http://localhost:8080/api/user/connexion?email=${email}&password=${password}`);
        const jsonData = await res.json();
        console.log(jsonData);
        let user = {
            Email: jsonData.email,
            Nom: jsonData.nom,
            Prenom: jsonData.prenom,
            DateNaissance: jsonData.dateNaissance,
            Ville: jsonData.ville,
            Pays: jsonData.pays,
            CoordonneesBancaires: "1234 1234 1234 1234",
            photo: jsonData.photo,
            adresse: jsonData.adresse,
            telephone: jsonData.telephone,
            ci: jsonData.ci,
        };
        console.log(user);
        //let newUser = JSON.parse(user);
        localStorage.setItem("User", JSON.stringify(jsonData));
        navigate('/Annonces');
        const utilisateur = JSON.parse(localStorage.getItem("User"));
        console.log(utilisateur);
        //utilisateur.Pays = "ESPAGNE";
        // console.log(utilisateur.Pays);
    };

    return (
        <div className="page">
            <div className="zone_navBar">
                <NavBar />
            </div>
            <div className="container_form contour_bleu">
                <form id="formConnexion contour_bleu " method="GET" onSubmit={handleSubmit}>
                    <h1>Connexion</h1>

                    <label>E-mail</label>
                    <input className="Input contour_bleu " type="email" placeholder="Entrer votre e-mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>

                    <label>Mot de passe</label>
                    <input className="Input contour_bleu " type="password" placeholder="Entrer le mot de passe" autoComplete="current-password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>

                    <input type="submit" className={"boutonOK"} id={"bouton_valider_co"}  value='LOGIN'></input>
                </form>
            </div>
            <button className={"boutonOK"} id={"inscription_de_co"} onClick={goInscription}> S' inscrire </button>
        </div>
    );
}
export default Connexion;