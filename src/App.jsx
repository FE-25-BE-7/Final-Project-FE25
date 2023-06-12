import "./App.css"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import { Article } from "./pages/Article";
import { About } from "./pages/About";
import  ArticleDetail  from "./pages/ArticleDetail";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";



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
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>

        <Footer />
      </Router>
      
  </>
  );
}

export default App;