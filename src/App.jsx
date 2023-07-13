import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IndividualMeet from "./pages/IndividualMeet";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet/:meetId" element={<IndividualMeet />} />
      </Routes>
    </div>
  );
}

export default App;
