import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Training from "./screens/Training";
import TrainingDetail from "./screens/TrainingDetail";
import Choose from "./screens/Choose";
import Check from "./screens/Check";
import Mypage from "./screens/Mypage"; 
import Description from "./screens/Description";
import Score from "./screens/Score";
import Movenet from "./components/description/Movenet";
import { useRecoilValue } from "recoil";
import { aDataAtom, bDataAtom, cDataAtom, dDataAtom, aAngleAtom, bAngleAtom, cAngleAtom, dAngleAtom } from "./atoms";
import Script from "./components/description/Script";
import Middle from "./components/description/Middle";
import Poseexample from "./components/description/Poseexample";

function App() {
  
  const aSkeletonData = useRecoilValue(aDataAtom);
  const bSkeletonData = useRecoilValue(bDataAtom);
  const cSkeletonData = useRecoilValue(cDataAtom);
  const dSkeletonData = useRecoilValue(dDataAtom);

  const aAngleData = useRecoilValue(aAngleAtom);
  const bAngleData = useRecoilValue(bAngleAtom);
  const cAngleData = useRecoilValue(cAngleAtom);
  const dAngleData = useRecoilValue(dAngleAtom);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/train" element={<Training />} />
        <Route path="/traindetail/:programId" element={<TrainingDetail />} />
        <Route path="/description/:programId" element={<Description />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/check/:programId" element={<Check />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/score" element={<Score />} />
        <Route path='/movenet' element={<Movenet></Movenet>} />
        <Route path='/script' element={<Script></Script>} />
        <Route path='/middle' element={<Middle></Middle>} />
        <Route path='/poseexample' element={<Poseexample></Poseexample>} />
      </Routes>
    </div>
  );
}

export default App;