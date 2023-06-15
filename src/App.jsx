import { BrowserRouter as Router,  Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Article } from "./pages/Article"
import ArticleDetail from "./pages/ArticleDetail"
import { Program } from "./pages/Program"
import { ProgramDetail } from "./pages/ProgramDetail"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { Donasi } from "./pages/Donasi";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artikel" element={<Article/>} />
            <Route path="/artikel/:id" element={<ArticleDetail />} /> 
            <Route path="/program" element={<Program />}/>
            <Route path="/program/:id" element={<Donasi />}/> 
            <Route path="/program/2" element={<ProgramDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/donasi" element={<Donasi />} />
          </Routes>
        </div>
        <Footer />
      </Router> 
    </>
  );
}

export default App;