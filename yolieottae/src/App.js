import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import RecipesSearch from "./components/RecipesSearch";
import Trend from "./components/Trend";
import Recommand from "./components/Recommand";

import Vegan from "./components/Vegan"
import Diet from "./components/Diet"
import Snack from "./components/Snack"
import Baby from "./components/Baby"
import Pet from "./components/Pet"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/recipes-search" element={<RecipesSearch />}></Route>
        <Route path="/recommand" element={<Recommand />} />
        <Route path="/trend" element={<Trend />} />

        <Route path="/vegan" element={<Vegan />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/snack" element={<Snack />} />
        <Route path="/baby" element={<Baby />} />
        <Route path="/pet" element={<Pet />} />
      </Routes>
    </div>
  );
}

export default App;
