import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import {
  Routes,
  Route
} from "react-router-dom"
import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBug, faFileCode } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'

library.add(fab, faEnvelope, faBug, faFileCode)

function App() {

  return (
    <div>
      <div style={{minHeight: "80vh"}}>
      <Header searchbar={false}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </div>
      
      <Footer/>
    </div>
  )
}

export default App;
