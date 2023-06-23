import NavBar from "../../Components/navBar/navbar";
import './connexion.css'
import '../css_general.css'
import { useNavigate } from 'react-router-dom';
import { useAppStore } from "../../donness";
import { useState, useEffect } from "react";
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'

const Swal = require('sweetalert2')

function Connexion() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mdpRate, setMdpRate] = useState(false);
    const [coadmin, setCoadmin]= useState(false);
    const [langue, setLangue] = useState(français);

    useEffect(() => {
        setLangue(anglais);
    })

    function goAnnonces() {
        navigate('/Annonces');
    }

    function modifUserCo(){
        setCoadmin(!coadmin)
    }

    function goInscription() {
        navigate('/Inscription');
    }

    let handleSubmitAdmin = async (e) => {
        e.preventDefault();
        setMdpRate(false);
        const textAsBuffer = new TextEncoder().encode(password);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hash = hashArray
            .map((item) => item.toString(16).padStart(2, "0"))
            .join("");
        console.log("ici admin : ")
        console.log(hash)
        let res = await fetch(`http://localhost:8080/api/admin/connexion?email=${email}&password=${hash}`);
        console.log(hash)
        console.log(`http://localhost:8080/api/admin/connexion?email=${email}&password=${hash}`)
        if (res.status == 200) {
            const jsonData = await res.json();
            console.log(jsonData);
            localStorage.setItem("Admin", JSON.stringify(jsonData));
            localStorage.setItem("Langue", "anglais");
                navigate('/Admin');
        } else {
            setMdpRate(true);
        }

    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        setMdpRate(false);
        const textAsBuffer = new TextEncoder().encode(password);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hash = hashArray
            .map((item) => item.toString(16).padStart(2, "0"))
            .join("");
        console.log("ici : ")
        console.log(hash)
        let res = await fetch(`http://localhost:8080/api/user/connexion?email=${email}&password=${hash}`);
        console.log(hash)
        console.log(`http://localhost:8080/api/user/connexion?email=${email}&password=${hash}`)
        if (res.status == 200) {
            const jsonData = await res.json();
            console.log(jsonData.verifier);
            if (jsonData.verifier) {
                localStorage.setItem("User", JSON.stringify(jsonData));
                localStorage.setItem("Langue", "anglais");
                navigate('/Annonces');
            }else{
                profilNonValid();
            }
        } else {
            setMdpRate(true);
        }

    };

    if(!coadmin){
        return (
            <div className="page">
                <div className="zone_navBar">
                    <NavBar />
                </div>
                <div className={"zone_admin"} onClick={modifUserCo}>
                    <i className="icon_admin fa-solid fa-user-lock"></i>
                </div>
                <div className="container_form">
                    <form id="formConnexion" method="GET" onSubmit={handleSubmit}>
                        <h1>{langue.CONNEXION.connexion}</h1>

                        <label>{langue.CONNEXION.email}</label>
                        <input className="Input contour_bleu" type="email" placeholder={langue.CONNEXION.emailPH} name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>

                        <label>{langue.CONNEXION.mdp}</label>
                        <input className={`${mdpRate ? 'mdpRate' : ''} Input contour_bleu`} type="password" placeholder={langue.CONNEXION.mdpPH} autoComplete="current-password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>

                        <input className="connexion boutonOK" type="submit" id={"bouton_valider_co"} value='LOGIN'></input>

                    </form>
                </div>
            </div>
        );
    }else if (coadmin){
        return (
            <div className="page">
                <div className="zone_navBar">
                    <NavBar />
                </div>
                <div className={"zone_admin"} onClick={modifUserCo}>
                    <i className=" icon_admin fa-solid fa-user"></i>
                </div>
                <div className="container_form">
                    <form id="formConnexion_admin" method="GET" onSubmit={handleSubmitAdmin}>
                        <h1>{langue.CONNEXION.connexion_ad}</h1>

                        <label>{langue.CONNEXION.email}</label>
                        <input className="Input contour_bleu" type="email" placeholder={langue.CONNEXION.emailPH} name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>

                        <label>{langue.CONNEXION.mdp}</label>
                        <input className={`${mdpRate ? 'mdpRate' : ''} Input contour_bleu`} type="password" placeholder={langue.CONNEXION.mdpPH} autoComplete="current-password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                        <input className="connexion boutonOK" type="submit" id={"bouton_valider_co"} value='LOGIN'></input>

                    </form>
                </div>
            </div>
        );
    }

    function profilNonValid(){
        Swal.fire({
            title: "Impossible de se connecter",
            text: "Votre profil n'a pas encore été validé",
            icon: "error",
            confirmButtonColor: '#0093FF',
            confirmButtonText: 'OK'
            
          });
    };
}
export default Connexion;