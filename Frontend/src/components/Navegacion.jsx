import { Link} from "react-router-dom"
import {  NavLink } from "react-router-dom"

import HomeIcon from '@mui/icons-material/Home';

import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
const Navegacion = () => {
  return (
   <div id="barra">
    
     <div> <LocalHospitalIcon sx={{fontSize:30}}/>   Hospital Universitario Metropolitano &nbsp;&nbsp;&nbsp;&nbsp;
     <button id="btonesb"><div><Link to="/"><HomeIcon sx={{fontSize:30}} />Inicio</Link></div></button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button id="btonesb"><div><Link to="contactos"><ContactMailIcon sx={{fontSize:30}}/> Contactanos</Link></div></button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button id="btonesb"> <div><Link to="acerca-de"><PersonSearchIcon sx={{fontSize:30}}/>Acerca de</Link></div></button><br></br><br></br>
        
     </div>
   

   </div>
  
  )
}

export default Navegacion
