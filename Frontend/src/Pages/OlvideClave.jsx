import React from 'react'
import { TextField } from '@mui/material'
import LockPersonIcon from '@mui/icons-material/LockPerson';
const OlvideClace = () => {
  return (
    <div id='ol'>
         <form className='f3'>
            <LockPersonIcon sx={{fontSize:177}} id='icono'/><br></br>
            <h1>Recuperar contraseña</h1>

            <TextField id="correo" label="CORREO ELECTRONICO" type="email" variant="standard"   required/><br></br><br></br>
            <button  id='btnenviar'className='btn-enviar'>Enviar</button><br></br><br></br>
         </form>

    </div>
  )
}

export default OlvideClace
