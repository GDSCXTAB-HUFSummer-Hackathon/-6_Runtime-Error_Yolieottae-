import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Trend from "./components/Trend";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Home />} />
        <Route path="/recommend" element={<Home />} />
        <Route path="/trend" element={<Trend />} />
      </Routes>
    </div>
  );
}

export default App;
