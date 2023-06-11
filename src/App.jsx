import "./App.css"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Donasi } from "./pages/Donasi";



function App() {
  return (
    <>

      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donasi" element={<Donasi />} />
          </Routes>
        </div>

        <Footer />
      </Router>
      
  </>
  );
}

export default App;