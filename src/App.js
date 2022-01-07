import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBug, faEnvelope, faFileCode } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Route, Routes
} from "react-router-dom"
import About from "./MyComponents/About"
import Footer from "./MyComponents/Footer"
import Header from "./MyComponents/Header"
import Home from "./MyComponents/Home"

library.add(fab, faEnvelope, faBug, faFileCode)

function App() {

  return (

    <div>
      <div style={{ minHeight: "80vh" }}>
        <Header searchbar={false} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
