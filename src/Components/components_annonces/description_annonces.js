import './description_annonces.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Description_annonces(props) {
    let navigate = useNavigate();
    const id = props.id;

    async function goDetails() {
        console.log("oee");
        const response = await fetch(`http://localhost:8080/api/annonce?id=${id}`);
        const data = await response.json();
        console.log(data);
        //setAnnonce(data);
        //console.log(annonce);
        navigate(`/detailsAnnonce/${id}`, { state: { id: id } });
    }


    return (
        <div className={'div_description'}>
            <p id={'titre'} onClick={goDetails} ><strong>{props.titre}</strong></p>
            <p className={'text_lieu'}><i className="fa-solid fa-bag-shopping"></i> {props.lVente}</p>
            <p className={'text_lieu'}><i className="fa-solid fa-plane-departure"></i> {props.lAchat}</p>
            <p id={'description'}>{props.description} </p>
            <p id={'profil'}><strong>{props.profil}</strong></p>
        </div>
    )
}
export default Description_annonces;