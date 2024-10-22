import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Pokesearch } from "./pages/Pokesearch";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokesearch" element={<Pokesearch />} />
        <Route path="*" element={<Pokesearch />} />
      </Routes>
    </Router>
  );
}

export default App;
