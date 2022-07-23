import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import RecipesSearch from "./components/RecipesSearch";
import Trend from "./components/Trend";
import Recommand from "./components/Recommand";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/recipes-search" element={<RecipesSearch />}></Route>
        <Route path="/recipe" element={<Home />} />
        <Route path="/recommand" element={<Recommand />} />
        <Route path="/trend" element={<Trend />} />
      </Routes>
    </div>
  );
}

export default App;
