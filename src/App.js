import logo from "./logo.svg";
import "./App.css";
import ClientsPage from "./components/ClientsPage";
import PoliciesPage from "./components/PoliciesPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <div className="header-item">
            <Link to="/policies">Policies</Link>
          </div>
          <div className="header-item">
            <Link to="/clients">Clients</Link>
          </div>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/clients" />} />
            <Route path="/clients" element={<ClientsPage />}></Route>
            <Route path="/policies" element={<PoliciesPage />}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
