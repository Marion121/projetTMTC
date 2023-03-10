import './actions.css'

function Actions() {
    return (
        <div className="actions">
            <h3>Actions en attente</h3>
            <div className='pratique2'>
            <p className='p1'><i class="icon logoCheck fa-solid fa-circle-check"></i>Acheter le produit</p>
                <span><button id={"bouton_3pt"}><strong>...</strong></button> <span id={"span_text_produit"}>le produit avant le 12/01/2021</span></span>
            </div>
            
        </div>
    );
}

export default Actions;