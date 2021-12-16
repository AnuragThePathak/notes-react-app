import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import {
  Routes,
  Route
} from "react-router-dom"
import Home from "./MyComponents/Home";
import About from "./MyComponents/About";

function App() {

  return (
    <div>
      <Header searchbar={false}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App;
