import NavBar from '../../Components/navBar/navbar';
import './inscription.css'
import '../css_general.css'
import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../donness';
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'
import moment from "moment";
import Swal from "sweetalert2";

function Inscription() {
    const [password, setPassword] = useState("");
    const setIsConnecte = useAppStore((state)=>(state.setIsConnecte));
    const canvasRef = useRef(null);
    var images = new Image();

    const [dragOver, setDragOver] = useState(false);
    const [dataUrl, setDataUrl] = useState();
    const [dataUrlCIF, setDataUrlCIF] = useState();
    const [dataUrlCIB, setDataUrlCIB] = useState();
    const [dataUrlPP, setDataUrlPP] = useState();

    const [Canva2, setCanva2] = useState(false);
    const [Canva3, setCanva3] = useState(false);
    const [Canva4, setCanva4] = useState(false);

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
        setLangue(français);
    })

    function imageArempir(){
        Swal.fire({
            title: "Missing infromation",
            icon: "error",
            confirmButtonColor: '#0093FF',
            confirmButtonText: 'OK'

        });
    };


    function goAnnonces() {
        console.log(dateBirth);
        console.log(typeof dateBirth);
        var date = new Date(dateBirth);
        console.log(typeof date);
    }

    const handleDragOver = (event) => {
        event.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setDragOver(false);
    };

    const handleDrop = (nomCanvas ,event) => {
        event.preventDefault();
        setDragOver(false);
        const canvas = document.getElementById(nomCanvas);
        const ctx = canvas.getContext('2d');

        const file = event.dataTransfer.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            images.src = reader.result;
            console.log("chargé");
        };
        console.log("src :", images.src)

        images.onload = function () {
            console.log("entré");
            ctx.drawImage(images, 0, 0,canvas.width, canvas.height );
            console.log(file);
            const url = canvas.toDataURL('image/png');
            console.log("toDataUrl", url);
            setDataUrl(url);
            if(nomCanvas=="LeCanva2"){
                setDataUrlCIF(url)
                setCanva2(true)
                var  canvasManquant3 = document.getElementById("drop-zone2");
                canvasManquant3.style.borderColor = "#63B7E7";
                canvasManquant3.style.boxShadow = "0 0 10px #63B7E7";
            }else if(nomCanvas=="LeCanva3") {
                setDataUrlPP(url)
                setCanva3(true)
                var  canvasManquant3 = document.getElementById("drop-zone3");
                canvasManquant3.style.borderColor = "#63B7E7";
                canvasManquant3.style.boxShadow = "0 0 10px #63B7E7";
            } else if(nomCanvas=="LeCanva4"){
                setDataUrlCIB(url)
                setCanva4(true)
                var  canvasManquant3 = document.getElementById("drop-zone4");
                canvasManquant3.style.borderColor = "#63B7E7";
                canvasManquant3.style.boxShadow = "0 0 10px #63B7E7";
            }
        }
        reader.readAsDataURL(file)
    };

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
        var formattedDate = moment(dateBirth).format('YYYY/MM/DD')
        var date = new Date(formattedDate);
        if (Canva2 & Canva3 & Canva4 ) {
            try {
                let res = await fetch("http://localhost:8080/api/user", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        email: email,
                        dateNaissance: date,
                        nom: nom,
                        prenom: prenom,
                        password: hash,
                        adresse: adresse,
                        ville: ville,
                        pays: pays,
                        telephone: telephone,
                        codePostal: 92220,
                        ci: dataUrlCIF,
                        jd: dataUrlCIB,
                        photo: dataUrlPP,
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
        }else{
            console.log("Canva2 ", Canva2)
            console.log("Canva3 ", Canva3)
            console.log("Canva4 ", Canva4)
            if(!Canva2){
                var  canvasManquant2 = document.getElementById("drop-zone2");
                canvasManquant2.style.borderColor = "red";
                canvasManquant2.style.boxShadow = "0 0 10px red";
            }
            if(!Canva3){
                var  canvasManquant3 = document.getElementById("drop-zone3");
                canvasManquant3.style.borderColor = "red";
                canvasManquant3.style.boxShadow = "0 0 10px red";
            }
            if(!Canva4){
                var canvasManquant4 = document.getElementById("drop-zone4");
                canvasManquant4.style.borderColor = "red";
                canvasManquant4.style.boxShadow = "0 0 10px red";
            }
            imageArempir();
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
                                    <div className='divZoneImage'>
                                        <div>
                                            <label htmlFor='dropZone'>{langue.INSCRIPTION.ciF}</label><br />
                                            <div id="drop-zone2" className={`${dragOver ? 'drag-over' : ''} contour_bleu`} name='dropZone' onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={(event) => handleDrop("LeCanva2", event)}>
                                                {langue.CREER_ANNONCE_1.glisser}
                                            </div>
                                        </div>

                                        <div className='divImageDeposee contour_bleu'>
                                            <canvas id="LeCanva2" ref={canvasRef} ></canvas>
                                        </div>
                                    </div>
                                    <div className='divZoneImage'>
                                        <div>
                                            <label htmlFor='dropZone'>{langue.INSCRIPTION.ciB}</label><br />
                                            <div id="drop-zone4" className={`${dragOver ? 'drag-over' : ''} contour_bleu`} name='dropZone' onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={(event) => handleDrop("LeCanva4", event)}>
                                                {langue.CREER_ANNONCE_1.glisser}
                                            </div>
                                        </div>

                                        <div className='divImageDeposee contour_bleu'>
                                            <canvas id="LeCanva4" ref={canvasRef} ></canvas>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className='divZoneImage'>
                                        <div>
                                            <label htmlFor='dropZone'>{langue.INSCRIPTION.photo}</label><br />
                                            <div id="drop-zone3" className={`${dragOver ? 'drag-over' : ''} contour_bleu`} name='dropZone' onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={(event) => handleDrop("LeCanva3", event)}>
                                                {langue.CREER_ANNONCE_1.glisser}
                                            </div>
                                        </div>

                                        <div className='divImageDeposee contour_bleu'>
                                            <canvas id="LeCanva3" ref={canvasRef} ></canvas>
                                        </div>
                                    </div>
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