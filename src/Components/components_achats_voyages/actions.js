import './actions.css'

function Actions() {
    return (
        <div className="actions">
            <h3>Actions en attente</h3>
            <div className='div_conteneur_golbal'>
                <div className={"div_ligne"}>
                    <button id={"bouton_valide"}>
                        <i className="fa-solid fa-check"></i>
                    </button><p className='text_option'>Acheter le produit </p>
                </div>
                <div className={"div_ligne"}>
                    <button id={"bouton_3pt"}>
                        <strong>...</strong>
                    </button>
                    <p className='text_option'>le produit avant le 12/01/2021</p>
                </div>
            </div>
        </div>
    );
}

export default Actions;