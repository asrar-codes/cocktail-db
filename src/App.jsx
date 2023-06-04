import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import SingleCocktail from "./Pages/singleCocktail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="cocktail/:id" element={<SingleCocktail />} />
          <Route path="about" element={<h2>about</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
