import Footer from "components/Footer";
import Header from "components/Header";
import Home from "pages/Home";
import Pokedex from "pages/Pokedex";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokedex" element={<Pokedex/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
