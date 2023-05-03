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
/*
    window.onpopstate = (event) => {
        console.log("on revient en arrière");
    };

    useEffect(() => {
        console.log(document.getElementById("text_mail").value);
        setLangue(anglais);
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            //localStorage.setItem("User", JSON.stringify(jsonData));
            console.log(document.getElementById("text_mail").value);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [])*/

    useEffect(() => {
        console.log(utilisateur);
        //console.log(mail);
    }, [])

    function editMail(newMail) {
        console.log(newMail);
        //setMail(newMail);
        mailTest = newMail;
        //setUtilisateur({...utilisateur, email : mailTest});
        utilisateur = {...utilisateur, email : mailTest};
        console.log("mail " ,mail);
        console.log("mailTest ", mailTest);
        localStorage.setItem("User", JSON.stringify(utilisateur));
        console.log(localStorage.getItem("User"));
    }

    return (
        <div className='page'>
            <div className='zone_navBar'>
                <NavBar />
            </div>
            <div className="block_general">
                <button className={"Bretour"}>
                    <span className="fontRetour">
                        <i className=" fa-solid fa-chevron-left"></i>
                    </span>

                    Retour
                </button>
                <div className="block_photo_nom_tot">

                    <div className="photo_nom">
                        <img className="PhotoProfil" src={utilisateur.photo} alt='Schémas' />
                        <div className="b_modif_photo">
                            <Bmodif isActive={false} name="image" type_I='image'></Bmodif>
                        </div>
                        <div className="nom_prenom">
                            <span id={"text_nom_prenom"}>{utilisateur.nom} {utilisateur.prenom}</span>
                            <Bmodif isActive={false} name="text_nom_prenom" nom={utilisateur.nom} prenom={utilisateur.prenom} type_I='text'></Bmodif>
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
                    <span className="info" id={"text_date"}>2001-08-08</span>
                    <span id={"B_text_date"}>
                        <Bmodif isActive={true} name="text_date" type_I='date'></Bmodif>
                    </span>
                    <h3>{langue.PROFIL.pays}</h3>
                    <span className="info" id={"Pays"}>{utilisateur.pays} </span>
                    <span id={"B_Pays"}>
                        <Bmodif isActive={true} name="Pays" type_I='text'></Bmodif>
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
   // const [newMail, setNewMail] = useState("");
   //  5e5476d7734bbbdb2e6c3694838780aa84bc9b15
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

    /*
    function handleChangeMail(e) {
        setNewMail(e.target.value);
      }*/

    function modif() {
        if (props.isActive) {
            nomClasse += ' B_info'
        }
        console.log(props.name)
        valeur = document.getElementById(props.name).innerHTML
        document.getElementById(nomID).style.display = "none"
        document.getElementById(nomIDBV).style.display = "inline"
        document.getElementById(nomIDBR).style.display = "inline"
        if(props.name == "text_nom_prenom"){
            document.getElementById(props.name).innerHTML = "<input id='input_" + props.name +"1"+ "'type=" + props.type_I + "  /> <input id='input_" + props.name +"2"+ "'type=" + props.type_I + "  />";
            document.getElementById("input_" + props.name +"1").value = nom ;
            document.getElementById("input_" + props.name +"2").value = prenom;
        }else {
            console.log(props.name)
            document.getElementById(props.name).innerHTML = "<input id='input_" + props.name + "'type=" + props.type_I + "  />";
            document.getElementById("input_" + props.name).value = valeur;
        }
    }

    const test = useAppStore((state) => state.test);

    function valider() {
        const name = props.name;
        document.getElementById(nomID).style.display = "inline"
        document.getElementById(nomIDBR).style.display = "none"
        if(props.name == "text_nom_prenom"){
            nomrecup = document.getElementById("input_" + props.name +"1").value
            prenomrecup = document.getElementById("input_" + props.name +"2").value
            setNom(nom)
            setPrenom(prenom)
            valeur = nomrecup + " " + prenomrecup;
            document.getElementById(props.name).innerHTML = valeur;

        }else {
            valeur = document.getElementById("input_" + props.name).value
            document.getElementById(props.name).innerHTML = valeur;
            props.editMail(valeur);
            console.log();
            // 5e5476d7734bbbdb2e6c3694838780aa84bc9b15
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