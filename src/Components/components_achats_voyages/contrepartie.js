import './contrepartie.css'

function Contrepartie() {
    return (
        <div className="contrepartie">
            <h3>Ma contrepartie</h3>
            <div id='pratique'>
                <div className={"div_boutton_text"}>
                    <button className={"bouton_logo_c"} > <i className="logo1 fa-solid fa-bag-shopping"></i>
                    </button><h1 className='prixContrepartie desactive'> 40 € </h1>
                </div>
                <div className={"div_boutton_text"}>
                <button className={"bouton_logo_c"} > <i className="logo2 fa-solid fa-plane-departure"></i>
                </button><h1 className='prixContrepartie active'> 40 € </h1>
                </div>
            </div>
            
        </div>
    )
}

export default Contrepartie;