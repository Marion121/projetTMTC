import NavBar from '../../Components/navBar/navbar';
import './inscription.css'
import '../css_general.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../donness';

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

    function goAnnonces() {
        console.log(dateBirth);
        setIsConnecte(true);
        navigate('/Annonces');
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        //useEffect()
        console.log(dateBirth.type);
        try {
            let res = await fetch("http://localhost:8080/api/user", {
                method: "POST",
                headers: {    
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify({
                    email: email,
                    dateBirth: dateBirth,
                    nom: nom,
                    prenom : prenom,
                    password : password,
                    adresse : adresse,
                    ville : ville,
                    pays : pays,
                    telephone: telephone,
                    codePostal: 92220,
                    photo : '../../ImagesUser/profilUserLeo.jpg'
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
            console.log(message);
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
                <div className="container_form_inscription">
                <h1>Inscription </h1>
                    <form className='form_inscription' method="POST" onSubmit={handleSubmit}>
                    
                        <table>
                            <tr>
                                <td>
                                    <label>E-mail</label>
                                    <input className="Input" type="email" placeholder="Entrer votre e-mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                                </td>
                                <td>
                                    <label>Date de naissance</label>
                                    <input className="Input" type="date" placeholder="Entrer votre date de naissance" name="dateBirth"  value={dateBirth} onChange={(e) => setDateBirth(e.target.value)} required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Nom</label>
                                    <input className="Input" type="text" placeholder="Entrer votre nom" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} required></input>
                                </td>
                                <td>
                                    <label>Prenom</label>
                                    <input className="Input" type="text" placeholder="Entrer votre prenom" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Mot de passe</label>
                                    <input className="Input" type="password" placeholder="Entrer le mot de passe"  name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                                </td>
                                <td>
                                    <label>Confirmation de mot de passe</label>
                                    <input className="Input" type="password" placeholder="Confirmer votre mot de passe" name="passwordConfirm" pattern={password} required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Adresse</label>
                                    <input className="Input" type="text" placeholder="Entrer votre adresse" name="adress" value={adresse} onChange={(e) => setAdresse(e.target.value)} required></input>
                                </td>
                                <td>
                                    <label>Ville</label>
                                    <input className="Input" type="text" placeholder="Entrer votre ville" name="ville" value={ville} onChange={(e) => setVille(e.target.value)} required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Pays</label>
                                    <input className="Input" type="text" placeholder="Entrer votre pays" name="pays" value={pays} onChange={(e) => setPays(e.target.value)} required></input>
                                </td>
                                <td>
                                    <label>Numéros de téléhone</label>
                                    <input className="Input" type="tel" placeholder="Entrer votre numéros de téléphone" name="phoneNumber" value={telephone} onChange={(e) => setTelephone(e.target.value)} required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Pièce d'identité</label>
                                    <input className="Input" type="file" name="CI" required></input>
                                </td>

                                <td>
                                    <label>Photo</label>
                                    <input className="Input" type="file" name="Image"></input>
                                </td>
                            </tr>
                            <tfoot>
                                <tr>
                                    <td className="submitBouton" colspan="2">
                                        <input type="submit" id='submit' value='LOGIN'></input>
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