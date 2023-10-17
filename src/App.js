import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import Program from "./components/Program";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/program" element={<Program/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

