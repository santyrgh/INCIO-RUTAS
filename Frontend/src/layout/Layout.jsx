import { Outlet} from 'react-router-dom';

//// componet
import Header from '../components/Header';
import Navegacion from '../components/Navegacion';
import Footer from '../components/Footer';


const Layout = () => {
  return (
    <>
   <Header/>
   <Navegacion/>
   {/* CONTENIDO CENTRAL */}
   <div className='main'>
      <Outlet/>
   </div>
      {/*  fin CONTENIDO CENTRAL */}
  <Footer/> 
    </>
  )
}

export default Layout