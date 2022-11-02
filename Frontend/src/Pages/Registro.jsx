import React from 'react'
import { TextField } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import '../assets/css/index.css'
const Registro = () => {
  return (
    <div id='registro'>
      <br></br>

      <PersonAddIcon sx={{fontSize:175}}/>
      <h1>Registro</h1>
      <TextField id="outlined-basic" label="INGRESE USUARIO" variant="standard" /><br></br>
      <TextField id="outlined-basic" label="INGRESE CONTRASEÑA" type="password" variant="standard" /><br></br>
      <TextField id="outlined-basic" label="INGRESE TELEFONO" type="number" variant="standard" /><br></br>
      <TextField id="outlined-basic" label="DIRECCION" variant="standard" /><br></br>
      <TextField id="outlined-basic" label="CORREO ELECTRONICO" type="email" variant="standard" /><br></br><br></br>
      <button>Registro</button><br></br><br></br>

    </div>
  )
}

export default Registro
