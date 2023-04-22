import '../css_general.css'
import './admin.css'
import NavBar from '../../Components/navBar/navbar'
import Valide_id from "../../Components/components_admin/valide_id";

function Admin() {

    const data = [{key:1 , nom:"Comte", prenom : "Leo", idFace : "valise_avion.pnf", idDos : "valise_ouverte.png"},
        {key:2 , nom:"Flamain", prenom : "Vincent", idFace : "valise_avion.pnf", idDos : "valise_ouverte.png"},
        {key:3 , nom:"Lansade", prenom : "Jeanne", idFace : "valise_avion.pnf", idDos : "valise_ouverte.png"},
        {key:4 , nom:"Balzo", prenom : "Tom", idFace : "valise_avion.pnf", idDos : "valise_ouverte.png"},]


    return(<div className='page'>
        <div className='zone_navBar'>
            <NavBar/>
        </div>
        <div className='div_body' >
            <div className='div_validationCarte' >
                <p>validation des cartes bleu : </p>
                {data.map(dataprop => <Valide_id  nom={dataprop.nom} prenom={dataprop.prenom} idFace={dataprop.idFace} idDos={dataprop.idDos} ></Valide_id>)}
            </div>
        </div>
    </div>)
}

export default Admin;