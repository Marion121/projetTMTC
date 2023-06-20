import NavBar from '../../Components/navBar/navbar';
import './inscription.css'
import '../css_general.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../donness';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

function Inscription() {
    const [password, setPassword] = useState("");
    const setIsConnecte = useAppStore((state)=>(state.setIsConnecte));
    
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [adresse, setAdresse] = useState("");
    const [ville, setVille] = useState("");
    const [pays, setPays] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");
    const [langue, setLangue] = useState(français);
    //const [hash, ]

    useEffect( () => {
        if(localStorage.getItem("Langue") == "anglais"){
            setLangue(anglais);
        }else{
            setLangue(français);
        }
    })

    function goAnnonces() {
        console.log(dateBirth);
        console.log(typeof dateBirth);
        var date = new Date(dateBirth);
        console.log(typeof date);
    }

    const getSHA256Hash = async (input) => {
        const textAsBuffer = new TextEncoder().encode(input);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hash = hashArray
          .map((item) => item.toString(16).padStart(2, "0"))
          .join("");
        console.log(typeof hash)
        return hash;
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        const textAsBuffer = new TextEncoder().encode(password);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hash = hashArray
          .map((item) => item.toString(16).padStart(2, "0"))
          .join("");
        console.log(hash)
        //setPassword(getSHA256Hash);
        var date = new Date(dateBirth);
        var formattedDate = date.toISOString();
        console.log(typeof formattedDate);
        try {
            let res = await fetch("http://localhost:8080/api/user", {
                method: "POST",
                headers: {    
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify({
                    email: email,
                    dateBirth: formattedDate,
                    nom: nom,
                    prenom : prenom,
                    password : hash,
                    adresse : adresse,
                    ville : ville,
                    pays : pays,
                    telephone: telephone,
                    codePostal: 92220,
                    photo : '../../ImagesUser/profilUserJean.jpg',
                    verifier: false
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setEmail("");
                setDateBirth("");
                setNom("");
                setPrenom("");
                setPassword("");
                setAdresse("");
                setPays("");
                setTelephone("");
                setMessage("User created successfully");
                navigate('/');
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
        
    };

    return (
        <div className='page'>
            <div className='zone_navBar'>
                <NavBar />
            </div>
            <div className='reste'>
                <div className="container_form_inscription ">
                <h1>{langue.INSCRIPTION.inscription} </h1>
                    <form className='form_inscription' method="POST" onSubmit={handleSubmit}>
                    
                        <table>
                            <tr>
                                <td>
                                    <label>{langue.INSCRIPTION.email}</label>
                                    <input className="Input contour_bleu" type="email" placeholder="Entrer votre e-mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                                </td>
                                <td>
                                    <label>{langue.INSCRIPTION.dateNaissance}</label>
                                    <input className="contour_bleu" type="date" placeholder="Entrer votre date de naissance" name="dateBirth"  value={dateBirth} onChange={(e) => setDateBirth(e.target.value)} required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{langue.INSCRIPTION.nom}</label>
                                    <input className="contour_bleu" type="text" placeholder="Entrer votre nom" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} required></input>
                                </td>
                                <td>
                                    <label>{langue.INSCRIPTION.prenom}</label>
                                    <input className="contour_bleu" type="text" placeholder="Entrer votre prenom" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{langue.INSCRIPTION.mdp}</label>
                                    <input className="contour_bleu" type="password" placeholder="Entrer le mot de passe"  name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                                </td>
                                <td>
                                    <label>{langue.INSCRIPTION.mdpConfirmation}</label>
                                    <input className="contour_bleu" type="password" placeholder="Confirmer votre mot de passe" name="passwordConfirm" pattern={password} required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{langue.INSCRIPTION.adresse}</label>
                                    <input className="contour_bleu" type="text" placeholder="Entrer votre adresse" name="adress" value={adresse} onChange={(e) => setAdresse(e.target.value)} required></input>
                                </td>
                                <td>
                                    <label>{langue.INSCRIPTION.ville}</label>
                                    <input className="contour_bleu" type="text" placeholder="Entrer votre ville" name="ville" value={ville} onChange={(e) => setVille(e.target.value)} required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{langue.INSCRIPTION.pays}</label>
                                    <input className="Input contour_bleu" type="text" placeholder="Entrer votre pays" name="pays" value={pays} onChange={(e) => setPays(e.target.value)} required></input>
                                </td>
                                <td>
                                    <label>{langue.INSCRIPTION.numTel}</label>
                                    <input className="Input contour_bleu" type="tel" placeholder="Entrer votre numéros de téléphone" name="phoneNumber" value={telephone} onChange={(e) => setTelephone(e.target.value)} required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{langue.INSCRIPTION.ci}</label>
                                    <input className="contour_bleu" type="file" name="CI" required></input>
                                </td>

                                <td>
                                    <label>{langue.INSCRIPTION.photo}</label>
                                    <input className="contour_bleu" type="file" name="Image"></input>
                                </td>
                            </tr>
                            <tfoot>
                                <tr>
                                    <td className="submitBouton" colspan="2">
                                        <input className='connexion' type="submit" id='submit' value={langue.INSCRIPTION.inscrire}></input>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Inscription;