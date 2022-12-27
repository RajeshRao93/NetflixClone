import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Profiles from "./components/profiles/profiles";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/profiles" element={<Profiles />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
