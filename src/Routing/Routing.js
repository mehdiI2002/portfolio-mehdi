import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Acceuil from '../Acceuil/Acceuil.js';
 import Propos from '../A_Propos/Propos.js';
 import Menu from '../Menu/Menu.js';
import Contact from '../Contact/Contact.js';

 export default function Routing(){
    return (
        <Router>
           <Menu />
            <Routes>
                <Route path="/" element={<Acceuil />} />
                <Route path="/A_propos" element={<Propos />} />
                <Route path = "/Contact" element = {<Contact />}/>
                
            </Routes>
        </Router>
        )
 }