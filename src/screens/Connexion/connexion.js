import NavBar from "../../Components/navBar/navbar";
import './connexion.css'
import '../css_general.css'
import { useNavigate } from 'react-router-dom';
import { useAppStore } from "../../donness";
import { useState, useEffect } from "react";
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'


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

    const [langue, setLangue] = useState(français);

    useEffect( () => {
        setLangue(anglais);
    })

    function goAnnonces(){
        navigate('/Annonces');
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
        localStorage.setItem("Langue", "anglais");
        navigate('/Annonces');
        const utilisateur = JSON.parse(localStorage.getItem("User"));
        console.log(utilisateur);
        console.log(localStorage.getItem("Langue"));
        //utilisateur.Pays = "ESPAGNE";
        // console.log(utilisateur.Pays);
    };

    return (
        <div className="page">
            <div className="zone_navBar">
                <NavBar />
            </div>
            <div className="container_form">
                <form id="formConnexion" method="GET" onSubmit={handleSubmit}>
                    <h1>{langue.CONNEXION.connexion}</h1>

                    <label>{langue.CONNEXION.email}</label>
                    <input className="Input contour_bleu" type="email" placeholder={langue.CONNEXION.emailPH} name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>

                    <label>{langue.CONNEXION.mdp}</label>
                    <input className="Input contour_bleu" type="password" placeholder={langue.CONNEXION.mdpPH} autoComplete="current-password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>

                    <input className="connexion" type="submit" value='LOGIN'></input>
                </form>

            </div>
        </div>
    );
}
export default Connexion;