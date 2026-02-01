import { Link, Route, Routes } from "react-router-dom";
import Store from "../Store";
import { Provider } from "react-redux";
import List from "./List";
import Modification from "./Modification";
import Ajout from "./Ajout";
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Provider store={Store}>   
        <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            E-learning
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link active" to="/">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Nouveau tutoriel
                </Link>
              </li>
            </ul>
          </div>
        </nav>
   
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/add" element={<Ajout />}></Route>
          <Route path="/tuto/:code" element={<Modification />}></Route>
        </Routes>
       </BrowserRouter>
      </Provider>
    </div>
  );
}
