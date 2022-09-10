import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Training from "./screens/Training";
import TrainingDetail from "./screens/TrainingDetail";
import Choose from "./screens/Choose";
import Check from "./screens/Check";
import Mypage from "./screens/Mypage"; 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/train" element={<Training />} />
        <Route path="/traindetail/:programId" element={<TrainingDetail />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/check/:programId" element={<Check />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </div>
  );
}

export default App;