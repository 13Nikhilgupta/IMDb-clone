import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Pages/Home";
import Categories from "./Components/Pages/Categories";
import {RoutePaths} from "./Routes";
import "./styles.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePaths.home} element={<Home/>}/>
        <Route path={RoutePaths.category} element={<Categories/>}/>
        <Route path={RoutePaths.invalid} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
