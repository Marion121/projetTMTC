import NavBar from '../../Components/navBar/navbar';
import './inscription.css'
import '../css_general.css'

import {useNavigate} from 'react-router-dom';

function Inscription() {
    return (
        <div className='page'>
            <div className='zone_navBar'>
                <NavBar />
            </div>
            <div className='reste'>
                <div className="container_form_inscription">

                    <form className='form_inscription' method="POST">
                        <h1>Inscription</h1>
                        <table>
                            <tr>
                                <td>
                                    <label>E-mail</label>
                                    <input className="Input" type="email" placeholder="Entrer votre e-mail" name="email" required></input>
                                </td>
                                <td>
                                    <label>Date de naissance</label>
                                    <input className="Input" type="date" placeholder="Entrer votre date de naissance" name="dateBirth" required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Nom</label>
                                    <input className="Input" type="text" placeholder="Entrer votre nom" name="nom" required></input>
                                </td>
                                <td>
                                    <label>Prenom</label>
                                    <input className="Input" type="text" placeholder="Entrer votre prenom" name="nom" required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Mot de passe</label>
                                    <input className="Input" type="password" placeholder="Entrer le mot de passe" name="password" required></input>
                                </td>
                                <td>
                                    <label>Confirmation de mot de passe</label>
                                    <input className="Input" type="password" placeholder="Confirmer votre mot de passe" name="passwordConfirm" required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Adresse</label>
                                    <input className="Input" type="text" placeholder="Entrer votre adresse" name="adress" required></input>
                                </td>
                                <td>
                                    <label>Ville</label>
                                    <input className="Input" type="text" placeholder="Entrer votre ville" name="ville" required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Pays</label>
                                    <input className="Input" type="text" placeholder="Entrer votre pays" name="pays" required></input>
                                </td>
                                <td>
                                    <label>Numéros de téléhone</label>
                                    <input className="Input" type="tel" placeholder="Entrer votre numéros de téléphone" name="phoneNumber" required></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Pièce d'identité</label>
                                    <input className="Input" type="file" name="CI" required></input>
                                </td>

                                <td>
                                    <label>Photo</label>
                                    <input className="Input" type="file" name="Image"></input>
                                </td>
                            </tr>
                            <tfoot>
                            <tr>
                                <td className="submitBouton"colspan="2">
                                    <input type="submit" id='submit' value='LOGIN'></input>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Inscription;