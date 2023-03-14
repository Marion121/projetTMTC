import './contrepartie_mon_annonce.css'

function Contrepartie_mon_annonce() {
    return (
        <div className="contrepartie">
            <h3>Ma contrepartie</h3>
            <div className='pratique'>
                <h1 className='prixContrepartieAchat desactive'><i class="logo1 fa-solid fa-bag-shopping"></i> 40 € </h1>
                <h1 className='prixContrepartieTransport active'><i class="logo2 fa-solid fa-plane-departure"></i> 40 € </h1>
            </div>
            
        </div>
    )
}

export default Contrepartie_mon_annonce;