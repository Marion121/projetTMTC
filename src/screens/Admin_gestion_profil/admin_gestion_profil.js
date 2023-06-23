import NavBar from "../../Components/navBar/navbar";
import {useEffect, useState} from "react";
import {français} from "../../langues/français";
import { anglais } from '../../langues/anglais';
import '../css_general.css'
import './admin_gestion_profil.css'
import {useNavigate} from "react-router-dom";
import {useAppStore} from "../../donness";

function Admin_gestion_profil() {
    const [langue, setLangue] = useState(français);
    let [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("Admin")));
    let navigate = useNavigate();

    function goAdmin() {
        navigate('/Admin');
    }

    function editMail(newMail) {
        admin = {...admin, email : newMail};
        localStorage.setItem("Admin", JSON.stringify(admin));
        console.log(localStorage.getItem("Admin"));
        save();
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
                    <button className={'boutonOK addAdmin'} > {langue.ADMIN_GESTION_PROFIL.boutonAjoutAdmin} </button>
                </div>
            </div>
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