
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

import CreerUneAnnonce from './screens/CreerUneAnnonce/creerUneAnnonce';
import CreerUneAnnonce2 from './screens/CreerUneAnnonce/2creerUneAnnonce';
import CreerUneAnnonce3 from './screens/CreerUneAnnonce/3creerUneAnnonce';

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
                <Route path='/mesAchatsEtVoyages' element={<MesAchatsEtVoyages />} />
                <Route path='/creerUneAnnonce' element={<CreerUneAnnonce />} />
                <Route path='/creerUneAnnonce2' element={<CreerUneAnnonce2 />} />
                <Route path='/creerUneAnnonce3' element={<CreerUneAnnonce3 />} />
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
