import './valide_id.css';
import { useState, useEffect } from "react";
//import moment from 'moment';
import { français } from '../../langues/français';
import { anglais } from '../../langues/anglais';

function Valide_id(props) {

    const [validation, setvalidation] = useState(props.valider);
    const [langue, setLangue] = useState(français);

    useEffect(() => {
        if (localStorage.getItem("Langue") == "anglais") {
            setLangue(anglais);
        } else {
            setLangue(français);
        }
    })

    async function valider(event) {
        console.log("ha")
        const response = await fetch(`http://localhost:8080/api/user/verifier?id=${props.id}`, {
            method: "PATCH",
           headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
                'mode': 'no-cors',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }, /*
            headers: {
                'Content-Type': 'application/json',
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' },*/
            body: JSON.stringify({
             /*   offset: 0,
                limit: 100,*/
            })
        });
        const data = await response.json();
        console.log(data);
        setvalidation("validé");
    }

    function refuser(event) {
        setvalidation("refuser");
    }
    if(validation == "validé" ){
        return (<p> validé ! </p>)
    }else{
    return (
        <div className={'div_general'}>
            <p id={'titre'}><strong>{props.nom} {props.prenom} </strong>  </p>
            <p>{langue.ADMIN.dateNaissance} {props.dateN}</p>
            <div className={'div_img'} >
                <img className={'img_id'} src={props.idFace} alt='idFace' />
                <img className={'img_id'} src={props.idDos} alt='idDos' />
            </div>
            <div>
                <button className={'boutonOK'} onClick={valider}> {langue.ADMIN.valider} </button>
                <button className={'boutonRefuser'} onClick={refuser}> {langue.ADMIN.refuser} </button>
            </div>
        </div>
    )}
}
export default Valide_id;