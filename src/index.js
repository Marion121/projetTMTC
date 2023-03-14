
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Accueil from './screens/Accueil/accueil.js';
import reportWebVitals from './reportWebVitals';
import Profil from './screens/Profil/profil';
import Annonces from "./screens/Annonces/annonces";
import Connexion from './screens/Connexion/connexion';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Inscription from './screens/Inscription/inscription.js';
import MesAchatsEtVoyages from './screens/MesAchatsEtVoyages/mesAchatsEtVoyages.js'
import MesAnnonces from './screens/MesAnnonces/mesAnnonces.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Accueil />} />
                <Route path='/Connexion' element={<Connexion />} />
                <Route path='/Inscription' element={<Inscription />} />
                <Route path='/Annonces' element={<Annonces />} />
                <Route path='/monProfil' element={<Profil />} />
                <Route path='/MesAchatsEtVoyages' element={<MesAchatsEtVoyages />} />
                <Route path='/MesAnnonces' element={<MesAnnonces/>} />
            </Routes>

        </BrowserRouter>
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
