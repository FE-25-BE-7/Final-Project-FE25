import "./App.css"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Article } from "./pages/Article"
import ArticleDetail from "./pages/ArticleDetail"
import { Program } from "./pages/Program"
import { ProgramDetail } from "./pages/ProgramDetail"
import Volunteer from "./pages/Volunteer"



function App() {
  return (
    <>

      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artikel">
              <Route index element={<Article />} />
              <Route path="/artikel/:id" element={<ArticleDetail />} />  
            </Route>
            <Route path="/program/:id" element={<ProgramDetail />}/> 
            <Route path="/program/2">
              <Route index element={<ProgramDetail />} />
              <Route path="/program/2/:id" element={<Volunteer />} />  
            </Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </Router>
      
  </>
  );
}

export default App;