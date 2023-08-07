import {Route} from 'wouter'

import NavBar from "./components/navBar/NavBar"
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import SobreMi from './pages/SobreMi/SobreMi'
import Contacto from './pages/Contacto/Contacto'
import { LenguageContextProvider } from './context/languageContext'

function App() {

  return (
    <>
      <LenguageContextProvider>
        <NavBar/>
        <Route path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/about%20me" component={SobreMi}/>
        <Route path="/contact" component={Contacto}/>
      </LenguageContextProvider>  
    </>
  )

}
export default App
