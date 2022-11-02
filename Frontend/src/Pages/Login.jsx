import { TextField } from "@mui/material"
import { NavLink } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LockPersonIcon from '@mui/icons-material/LockPerson';


const Login = () => {
  return (
    <div id="ni">
      
        <div id="inicio">
           <form className="f1">
                  <AccountCircleIcon sx={{fontSize:175}}  id='icono'/>
                  <h1>Inicio</h1>
                  <TextField   id="outlined-basic"  label ="Tu usuario" variant="standard" required /><br></br>
                  <TextField id="outlined-basic"     type="password"label="Contraseña" variant="standard" required /><br></br><br></br>
                  <button id='btnenviar'>
                      Ingresa
                  </button><br></br><br></br>
                  <button id='btnenviar'>
                    <NavLink to="/registro"> <PersonAddIcon sx={{fontSize:40}}/> </NavLink>              
                  </button>&nbsp;&nbsp;&nbsp;&nbsp;

                  <button id='btnenviar'>
                    <NavLink to="/olvide-clave">  <LockPersonIcon sx={{fontSize:40}}/></NavLink>
                  </button ><br></br><br></br>
          </form>
      </div>

    
        


    </div>

  )
}

export default Login
