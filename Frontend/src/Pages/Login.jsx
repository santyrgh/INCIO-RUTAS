import { TextField } from "@mui/material"
import { NavLink } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LockPersonIcon from '@mui/icons-material/LockPerson';


const Login = () => {
  return (
    <div id="ni">
        
        <div id="inicio">
<AccountCircleIcon sx={{fontSize:175}} />
            <h1>Inicio</h1>
            <TextField   id="outlined-basic"  label ="Tu usuario" color="secondary"variant="standard" /><br></br>
            <TextField id="outlined-basic"    color="secondary" type="password"label="Contraseña" variant="standard" /><br></br><br></br>
            <button>
                Ingresa
            </button><br></br><br></br>
            <button>
              <NavLink to="/registro"> <PersonAddIcon sx={{fontSize:40}}/> </NavLink>              
            </button>&nbsp;&nbsp;&nbsp;&nbsp;

            <button>
              <NavLink to="/olvide-clave">  <LockPersonIcon sx={{fontSize:40}}/></NavLink>
            </button><br></br><br></br>
            



         </div>

    
        


    </div>

  )
}

export default Login
