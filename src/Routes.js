import Footer from "components/Footer";
import Header from "components/Header";
import Error from "pages/Error";
import Home from "pages/Home";
import PaginaPadrao from "pages/PaginaPadrao";
import Pokedex from "pages/Pokedex";
import Pokemon from "pages/Pokemon";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Home/>}/>
          <Route path="pokedex" element={<Pokedex/>}/>
          <Route path="pokedex/:id" element={<Pokemon/>}/>
        </Route>
        
        <Route path="*" element={<Error/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
