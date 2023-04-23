import './valide_id.css';

function Valide_id(props) {
    return (
        <div className={'div_general'}>
            <p id={'titre'}><strong>{props.nom} {props.prenom}</strong></p>
            <div className={'div_img'} >
                <img className={'img_id'} src='/../../images/valise_fermé.png' alt='idDos'/>
                <img className={'img_id'} src='/../../images/valise_avion.png' alt='idDos'/>
            </div>
            <div>
                <button className={'boutonOK'}> Valider </button>
                <button className={'boutonRefuser'} > Reffuser </button>
            </div>
        </div>
    )
}
export default Valide_id;