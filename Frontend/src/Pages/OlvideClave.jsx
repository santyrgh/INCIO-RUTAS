import React from 'react'
import { TextField } from '@mui/material'
import LockPersonIcon from '@mui/icons-material/LockPerson';
const OlvideClace = () => {
  return (
    <div id='ol'>
      <LockPersonIcon sx={{fontSize:177}}/><br></br>
      <h1>Recuperar contraseña</h1>

      <TextField id="correo" label="CORREO ELECTRONICO" type="email" variant="standard" color="secondary" /><br></br><br></br>
      <button className='btn-enviar'>Enviar</button><br></br><br></br>
    </div>
  )
}

export default OlvideClace
