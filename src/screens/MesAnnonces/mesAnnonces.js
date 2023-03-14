import './mesAnnonces.css'
import NavBar from "../../Components/navBar/navbar";
import Mon_annonce from "../../Components/mes_annonces/mon_annonce";

function MesAnnonces() {
    return (
        <div >
            <div className="zone_navBar">
                <NavBar />
            </div>
            <div className="container_mes_achats">
                <h1>Mes annonces</h1>
                <Mon_annonce />
            </div>
        </div>
    );
}

export default MesAnnonces;