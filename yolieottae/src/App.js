import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import RecipesSearch from "./components/RecipesSearch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/recipes-search" element={<RecipesSearch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
