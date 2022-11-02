import { 
  BrowserRouter, 
  Routes, 
  Route } from 'react-router-dom';

  ///paginas 
  import Login from './Pages/Login'
  import AcercaDe from './Pages/Acercade'
  import Contactanos from './Pages/Acercade'
  import OlvideClave  from './Pages/OlvideClave'
  import Registro from './Pages/Registro'
  import Layout from './layout/Layout';
   
  import '../src/assets/css/index.css';



function App() {

  return (
   
      <BrowserRouter>
       {/* rutas publicas  */}
          <Routes>
                <Route path='/' element={<Layout/>}>
                <Route index element={<Login/>}/>
                <Route path='acerca-de' element={<AcercaDe/>}/>
                <Route path='contactanos' element={<Contactanos/>}/>
                <Route path='olvide-clave' element={<OlvideClave/>}/>
                <Route path='registro' element={<Registro/>}/>
                </Route>
          </Routes>
          {/* Rutas privadas */}
      </BrowserRouter>

   
  )
}

export default App
