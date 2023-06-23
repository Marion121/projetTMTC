import './profil.css'
import '../css_general.css'
import NavBar from '../../Components/navBar/navbar'
import { useAppStore } from '../../donness.js'
import { français } from '../../langues/français'
import { anglais } from '../../langues/anglais'
import { useEffect, useState } from 'react'


function Profil() {
    const [langue, setLangue] = useState(français);
    let [utilisateur, setUtilisateur] = useState(JSON.parse(localStorage.getItem("User")));
    const [nom, setNom] = useState(utilisateur.nom);
    const [pays, setPays] = useState(utilisateur.pays);
    const [mail, setMail] = useState();
    var mailTest = "";

    window.onpopstate = (event) => {
        console.log("on revient en arrière");
        save();
    };


    async function save(){
        console.log(utilisateur);
        
        let res = await fetch(`http://localhost:8080/api/user?id=${utilisateur.id}`, {
                method: "PATCH",
                headers: {    
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify(utilisateur)
            });
    }

    function editMail(newMail) {
        utilisateur = {...utilisateur, email : newMail};
        localStorage.setItem("User", JSON.stringify(utilisateur));
        console.log(localStorage.getItem("User"));
        save();
    }

    function editNomPrenom(newNom, newPrenom) {
        console.log("newNom :",newNom);
        console.log("newPrenom :",newPrenom);
        utilisateur = {...utilisateur, nom : newNom, prenom:newPrenom};
        console.log(utilisateur);
        localStorage.setItem("User", JSON.stringify(utilisateur));
        console.log(localStorage.getItem("User"));
        save();
    }

    function editDateNaissance(newDate) {
        console.log("NewDate", newDate);
        utilisateur = {...utilisateur, dateNaissance : newDate};
        console.log(utilisateur);
        localStorage.setItem("User", JSON.stringify(utilisateur));
        console.log(localStorage.getItem("User"));
        save();
    }

    function editPays(newPays) {
        utilisateur = {...utilisateur, pays : newPays};
        localStorage.setItem("User", JSON.stringify(utilisateur));
        console.log(localStorage.getItem("User"));
        save();
    }

    return (
        <div className='page'>
            <div className='zone_navBar'>
                <NavBar save={save}/>
            </div>
            <div className="block_general">

                <div className="block_photo_nom_tot">

                    <div className="photo_nom">
                        <img className="PhotoProfil" src={utilisateur.photo} alt='Schémas' />
                        <div className="b_modif_photo">
                            <Bmodif isActive={false} name="image" type_I='image'></Bmodif>
                        </div>
                        <div className="nom_prenom">
                            <span id={"text_nom_prenom"}>{utilisateur.nom} {utilisateur.prenom}</span>
                            <Bmodif isActive={false} name="text_nom_prenom" nom={utilisateur.nom} prenom={utilisateur.prenom} editNomPrenom={editNomPrenom} type_I='text'></Bmodif>
                        </div>
                        <div className="tot_gangne">
                            <p className="tot_text"> {langue.PROFIL.total}</p>
                            <p className="tot_valeur">532,00 €</p>
                        </div>
                    </div>
                </div>
                <div className="block_info_modif">
                    <h3>{langue.PROFIL.mail}</h3>
                    <span className="info" id={"text_mail"}>{utilisateur.email}</span>
                    <span id={"B_text_mail"}>
                        <Bmodif isActive={true} name="text_mail" type_I='email' editMail={editMail}></Bmodif>
                    </span>
                    <h3>{langue.PROFIL.dateNaissance}</h3>
                    <span className="info" id={"text_date"}>{utilisateur.dateNaissance}</span>
                    <span id={"B_text_date"}>
                        <Bmodif isActive={true} editDateNaissance={editDateNaissance} name="text_date" type_I='date'></Bmodif>
                    </span>
                    <h3>{langue.PROFIL.pays}</h3>
                    <span className="info" id={"Pays"}>{utilisateur.pays} </span>
                    <span id={"B_Pays"}>
                        <Bmodif isActive={true} editPays={editPays} name="Pays" type_I='text'></Bmodif>
                    </span>
                    <h3>{langue.PROFIL.CoordoneesBanque}</h3>
                    <span className="info" id={"text_cb"}>{utilisateur.CoordonneesBancaires}</span>
                    <span id={"B_text_cb"}>
                        <Bmodif className={"b_modif_info"} isActive={true} name="text_cb" type_I='text'></Bmodif>
                    </span>
                </div>
            </div>
        </div>
    );
}


function Bmodif(props) {
    const updateTest = useAppStore((state) => state.updateTest);
    let [utilisateur, setUtilisateur] = useState(JSON.parse(localStorage.getItem("User")));
    const [nom, setNom] = useState(utilisateur.nom);
    const [prenom, setPrenom] = useState(utilisateur.prenom);
   
    
    let valeur;
    let nomrecup ;
    let prenomrecup;
    let nomIDSpan = "B_" + props.name;
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
        valeur = document.getElementById(props.name).innerHTML
        document.getElementById(nomID).style.display = "none"
        document.getElementById(nomIDBV).style.display = "inline"
        document.getElementById(nomIDBR).style.display = "inline"
        if(props.name == "text_nom_prenom"){
            document.getElementById(props.name).innerHTML = "<input id='input_" + props.name +"1"+ "'type=" + props.type_I + "  /> <input id='input_" + props.name +"2"+ "'type=" + props.type_I + "  />";
            document.getElementById("input_" + props.name +"1").value = nom ;
            document.getElementById("input_" + props.name +"2").value = prenom;
        }else {
            document.getElementById(props.name).innerHTML = "<input id='input_" + props.name + "'type=" + props.type_I + "  />";
            document.getElementById("input_" + props.name).value = valeur;
        }
    }

    const test = useAppStore((state) => state.test);

    function valider() {
        const name = props.name;
        document.getElementById(nomID).style.display = "inline"
        document.getElementById(nomIDBR).style.display = "none"
        document.getElementById(nomIDBV).style.display = "none"
        if(props.name == "text_nom_prenom"){
            nomrecup = document.getElementById("input_" + props.name +"1").value
            prenomrecup = document.getElementById("input_" + props.name +"2").value
            setNom(nomrecup)
            setPrenom(prenomrecup)
            valeur = nomrecup + " " + prenomrecup;
            document.getElementById(props.name).innerHTML = valeur;
            props.editNomPrenom(nomrecup, prenomrecup);
        }else {
            valeur = document.getElementById("input_" + props.name).value
            document.getElementById(props.name).innerHTML = valeur;
            if(props.name == "text_mail"){
                props.editMail(valeur);
            }else if(props.name == "text_date"){
                props.editDateNaissance(valeur);
            }else if(props.name == "Pays"){
                props.editPays(valeur);
            }
        }
    }

    function retour() {
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

export default Profil;