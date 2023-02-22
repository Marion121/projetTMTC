import './profil.css'
import '../css_general.css'
import NavBar from '../../Components/navBar/navbar'

function Profil() {
    return (
        <div className='page'>
            <div className='zone_navBar'>
                <NavBar/>
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
                        <img className="PhotoProfil" src='/../../images/photo_profil.png' alt='Schémas'/>
                        <div className="b_modif_photo">
                            <Bmodif isActive={false} name="image" type_I='image'></Bmodif>
                        </div>
                        <div className="nom_prenom">
                            <span id={"text_nom_prenom"}>Tom and Jerry </span>
                            <Bmodif isActive={false} name="text_nom_prenom" type_I='text'></Bmodif>
                        </div>
                        <div className="tot_gangne">
                            <p className="tot_text">Total gangé : </p>
                            <p className="tot_valeur">532,00 €</p>
                        </div>
                    </div>
                </div>
                <div className="block_info_modif">
                        <h3>Mail</h3>
                        <span className="info" id={"text_mail"}>text.numero1@gmail.com </span>
                        <span id={"B_text_mail"}>
                            <Bmodif  isActive={true} name="text_mail" type_I='email'></Bmodif>
                        </span>
                        <h3>Date de naissance</h3>
                        <span className="info" id={"text_date"}>2001-08-08</span>
                        <span id={"B_text_date"}>
                            <Bmodif  isActive={true} name="text_date" type_I='date'></Bmodif>
                        </span>
                        <h3>Pays de résidence</h3>
                        <span className="info" id={"text_pays"}>France </span>
                        <span id={"B_text_pays"}>
                            <Bmodif  isActive={true} name="text_pays" type_I='text'></Bmodif>
                        </span>
                        <h3>Coordonées banquaires</h3>
                        <span className="info" id={"text_cb"}>1837 4728 4937 8463 </span>
                        <span id={"B_text_cb"}>
                            <Bmodif className={"b_modif_info"} isActive={true} name="text_cb" type_I='text'></Bmodif>
                        </span>
                </div>
            </div>
        </div>
    );
}


function Bmodif(props) {
    let valeur;
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
        document.getElementById(props.name).innerHTML = "<input id='input_" + props.name + "'type=" + props.type_I + "  />";
        document.getElementById("input_" + props.name).value = valeur;
    }

    function valider() {
        valeur = document.getElementById("input_" + props.name).value
        document.getElementById(props.name).innerHTML = valeur;
        document.getElementById(nomID).style.display = "inline"
        document.getElementById(nomIDBV).style.display = "none"
        document.getElementById(nomIDBR).style.display = "none"
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