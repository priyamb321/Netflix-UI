import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homee from "./Components/Home/Homee";
import Headers from "./Components/Header/Headers";

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Homee />} />
      </Routes>
    </Router>
  );
}

export default App;
