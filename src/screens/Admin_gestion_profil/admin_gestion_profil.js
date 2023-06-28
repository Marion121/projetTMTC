import NavBar from "../../Components/navBar/navbar";
import React, {useEffect, useState} from "react";
import {français} from "../../langues/français";
import { anglais } from '../../langues/anglais';
import '../css_general.css'
import './admin_gestion_profil.css'
import {useNavigate} from "react-router-dom";
import {useAppStore} from "../../donness";
import Popup1 from "../../Components/components_annonces/popup";
import moment from "moment/moment";

function Admin_gestion_profil() {
    const [langue, setLangue] = useState(français);
    const [isOpen, setIsOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    let [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("Admin")));
    let navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [message, setMessage] = useState("");

    function goAdmin() {
        navigate('/Admin');
    }

    function editMail(newMail) {
        admin = {...admin, email : newMail};
        localStorage.setItem("Admin", JSON.stringify(admin));
        console.log(localStorage.getItem("Admin"));
        save();
    }

    const handlePopup = () => {
        setIsOpen(!isOpen);
        setIsChecked(false);
    }

    let handlePopupValidate = async (e) => {
        e.preventDefault();
        const textAsBuffer = new TextEncoder().encode(password);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hash = hashArray
            .map((item) => item.toString(16).padStart(2, "0"))
            .join("");
        console.log(hash)
            try {
                let res = await fetch("http://localhost:8080/api/admin", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        email: email,
                        nom: nom,
                        prenom: prenom,
                        password: hash,
                    }),
                });
                let resJson = await res.json();
                if (res.status === 200) {
                    setEmail("");
                    setNom("");
                    setPrenom("");
                    setPassword("");
                    setMessage("User created successfully");
                } else {
                    setMessage("Some error occured");
                }
            } catch (err) {
                console.log(err);
            }
        setIsOpen(!isOpen);
        setIsChecked(false);

    }

    async function save(){

        let res = await fetch(`http://localhost:8080/api/user?id=${admin.id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(admin)
        });
    }

    useEffect( () => {
        setLangue(anglais);
    })

    return(
        <div className='page'>
            <div className='zone_navBar'>
                <NavBar/>
            </div>
            <div id="div_body_admin_profil" >
                <div className='div_menu'>
                    <button className={'boutonRefuser boutonMenu'} onClick={goAdmin}> {langue.ADMIN_GESTION_PROFIL.menuValidation} </button>
                    <button className={'boutonOK boutonMenu '} > {langue.ADMIN_GESTION_PROFIL.menuGestionCompte} </button>
                </div>
            </div>
            <div id={"gestion_profil"}>
                <div id={"div_profil_admin"}>
                    <p className={"grand_titre_admin"}>{langue.ADMIN_GESTION_PROFIL.profil}</p>
                    <h4 className={"moyen_titre_admin"}>{langue.ADMIN_GESTION_PROFIL.mail}</h4>
                    <span className="info" id={"text_mail"}>{admin.email}</span>
                    <span id={"B_text_email"}>
                            <Bmodif isActive={true} name="text_mail" type_I='email' editMail={editMail}></Bmodif>
                        </span>
                    <h4 className={"moyen_titre_admin"}>{langue.ADMIN_GESTION_PROFIL.mdp}</h4>
                    <span className="info" id={"text_mdp"}>******</span>
                    <span id={"B_text_mdp"}>
                            <Bmodif isActive={true} name="text_mdp" type_I='password'></Bmodif>
                        </span>
                </div>
                <div id={"div_autre_profil"}>
                   <p className={"grand_titre_admin"}>{langue.ADMIN_GESTION_PROFIL.titreAutreAdmin}</p>
                    <button className={'boutonOK addAdmin'} onClick={handlePopup} > {langue.ADMIN_GESTION_PROFIL.boutonAjoutAdmin}  </button>

                </div>
            </div>

            {isOpen && <Popup1
                content={<>
                    <div id={"général"}>
                        <table>
                            <tr>
                                <td>
                                    <h4>{langue.ADMIN_GESTION_PROFIL.addAdmin}</h4>
                                </td>
                                <td>
                                    <label>{langue.INSCRIPTION.email}</label> <br></br>
                                    <input className="Input contour_bleu" type="email" placeholder="Entrer votre e-mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{langue.INSCRIPTION.nom}</label> <br></br>
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
                        </table>
                    </div>

                </>}
                handleClose={handlePopup}
                handleValidate={handlePopupValidate}
            />}
        </div>
        )
}

function Bmodif(props) {
    const updateTest = useAppStore((state) => state.updateTest);
    let [utilisateur, setUtilisateur] = useState(JSON.parse(localStorage.getItem("User")));
    const [langue, setLangue] = useState(français);
    useEffect( () => {
        setLangue(anglais);
    })

    let valeur;
    let nomID = "bouton_" + props.name;
    let nomIDBV = "bV" + props.name;
    let nomIDBR = "bR" + props.name;
    let nomClasse = 'B_modif';
    if (props.isActive) {
        nomClasse += ' B_info'
    }

    function modif() {
        if (props.isActive) {
            nomClasse += ' B_info'
        }

        document.getElementById(nomID).style.display = "none"
        document.getElementById(nomIDBV).style.display = "inline"
        document.getElementById(nomIDBR).style.display = "inline"
        if(props.name =="text_mdp"){
            valeur = "";
            document.getElementById("text_mdp").innerHTML = "<input id='input_" + props.name + "1'type= 'password'  /> <p></p> <input id='input_" + props.name + "2'type= 'password'  />" ;
        }else{
            valeur = document.getElementById(props.name).innerHTML
            document.getElementById(props.name).innerHTML = "<input id='input_" + props.name + "'type=" + props.type_I + "  />";
            document.getElementById("input_" + props.name).value = valeur;
        }
    }

    function valider() {
        if(props.name =="text_mdp") {
            valeur = "*****";
        }else {
            valeur = document.getElementById("input_" + props.name).value;
        }
        document.getElementById(nomID).style.display = "inline"
        document.getElementById(nomIDBR).style.display = "none"
        document.getElementById(nomIDBV).style.display = "none"
        document.getElementById(props.name).innerHTML = valeur;
        if(props.name == "text_mail"){
            props.editMail(valeur);
        }
    }

    function retour() {
        if(props.name =="text_mdp") {
            valeur = "*****";
        }
        document.getElementById(props.name).innerHTML = valeur;
        document.getElementById(nomID).style.display = "inline"
        document.getElementById(nomIDBV).style.display = "none"
        document.getElementById(nomIDBR).style.display = "none"
    }

    return (
        <span>
            <button className={nomClasse} id={nomID} onClick={modif}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button className={nomClasse} id={nomIDBV} onClick={valider} hidden={true}>
                <i className="fa-sharp fa-solid fa-check"></i>
            </button>
            <button className={nomClasse} id={nomIDBR} onClick={retour} hidden={true}>
                <i className="fa-sharp fa-solid fa-rotate-right"></i>
            </button>
        </span>


    )
}

export default Admin_gestion_profil;