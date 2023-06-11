import "./App.css"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Program } from "./pages/Program"
import { Volunteer } from "./pages/Volunteer"
import { ProgramDetail } from "./pages/ProgramDetail"

function App() {
  return (
    <>

      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/program" element={<Program />} />
            <Route path="/program/:id" element={<ProgramDetail />} />
            <Route path="/program/2" element={<Volunteer />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </Router>
      
  </>
  );
}

export default App;