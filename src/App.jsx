import "./App.css"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import { Article } from "./pages/Article";
import { Program } from "./pages/Program";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Donasi } from "./pages/Donasi";
import { DetailArtikel } from "./pages/DetailArtikel";
import { DetailProgram } from "./pages/DetailProgram";



function App() {
  return (
    <>

      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artikel" element={<Article />} />
            <Route path="/program" element={<Program />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/donasi" element={<Donasi />} />
            <Route path="/artikel/detailartikel" element={<DetailArtikel />} />
            <Route path="/program/detailprogram" element={<DetailProgram />} />
          </Routes>
        </div>

        <Footer />
      </Router>
      
  </>
  );
}

export default App;