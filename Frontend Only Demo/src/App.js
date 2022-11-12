import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import ItemsPage from "./Components/ItemsPage";
import UsersPage from "./Components/UsersPage";

import "bootstrap/dist/css/bootstrap.min.css"; //Se agregó para que carguen los estilos de Bootstrap


function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/users-page" element={<UsersPage/>}/>
          <Route path="/items-page" element={<ItemsPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
