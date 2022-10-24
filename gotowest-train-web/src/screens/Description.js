import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Done from "../components/description/Done";
import Middle from "../components/description/Middle";
import Movenet from "../components/description/Movenet";
import Pose from "../components/description/Pose";
import Script from "../components/description/Script";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { aDataAtom, bDataAtom, cDataAtom, dDataAtom } from "../atoms";

export default function Description() {
  const location = useLocation(); 
    const p = location.state.p;  

    const aSkeletonData = useRecoilValue(aDataAtom);
    const bSkeletonData = useRecoilValue(bDataAtom);
    const cSkeletonData = useRecoilValue(cDataAtom);
    const dSkeletonData = useRecoilValue(dDataAtom);

    const [isScriptVisible, setIsScriptVisible] = useState(true); 
    const [isMidVisible, setIsMidVisible] = useState(false); 
    const [isPoseAVisible, setIsPoseAVisible] = useState(false);
    const [isPoseBVisible, setIsPoseBVisible] = useState(false);
    const [isPoseCVisible, setIsPoseCVisible] = useState(false);
    const [isPoseDVisible, setIsPoseDVisible] = useState(false);
    const [isDoneVisible, setIsDoneVisible] = useState(false);

    useEffect(() => {
      setTimeout(function() { //5초까지 설명문, 자세1시작 
        setIsScriptVisible(false); 
        setIsPoseAVisible(true);
      }, 5000);

      setTimeout(function() { //15초에 자세1 종료 
        setIsPoseAVisible(false);
        setIsMidVisible(true);
      }, 15000);

      setTimeout(function() { //20초부터 자세2 시작 
        setIsMidVisible(false);
        setIsPoseBVisible(true);
      }, 20000);

      setTimeout(function() { //30초에 자세2 종료 
        setIsPoseBVisible(false);
        setIsMidVisible(true);
      }, 30000);

      setTimeout(function() { //35초에 자세3 시작 
        setIsMidVisible(false);
        setIsPoseCVisible(true);
      }, 35000);

      setTimeout(function() { //45초에 자세3 종료
        setIsPoseCVisible(false);
        setIsMidVisible(true);
      }, 45000);

      setTimeout(function() { //50초에 자세4 시작 
        setIsMidVisible(false);
        setIsPoseDVisible(true);
      }, 50000);

      setTimeout(function() { //50초~60초  (자세3)
        setIsPoseDVisible(false);
        setIsDoneVisible(true);
      }, 60000);

    }, []);
    //임시 데이터로 진행 
    const [programDetail, setProgramDetial] = useState(
        {
            id:"p1", //프로그램 id: p1 
            count:4, //프로그램 내 자세 갯수 
            pose:[ //pose detail 
                {
                    name:"위로 손깍지",
                    description:"양손을 깍지껴 머리위로 올려보아요",
                    image:"../assets/left_side_stretch_sample.gif"
                },
                {
                    name:"왼쪽 옆구리 스트레칭",
                    description:"양손을 깍지 껴 머리위로 뻗고, 왼쪽 옆구리를 굽혀보아요",
                    image:"../assets/left_side_stretch_sample.gif"
                },
                {
                    name:"오른쪽 옆구리 스트레칭",
                    description:"양손을 깍지 껴 머리위로 뻗고, 왼쪽 옆구리를 굽혀보아요",
                    image:"../assets/left_side_stretch_sample.gif"
                },
                {
                    name:"만세",
                    description:"양손을 머리위로 쭉 뻗어주세요.",
                    image:"../assets/left_side_stretch_sample.gif"
                }
            ]
        }
    ); 
  return (
    <div>
        <div className="container">
          <div className="display">
            <div>
              {isScriptVisible&&<Script></Script>}
            </div>

            <div>
              {isMidVisible&&<Middle></Middle>}
            </div>
            
            <div>
              {isPoseAVisible&&
              <div>
                <Pose name={programDetail.pose[0].name} description={programDetail.pose[0].description}></Pose>
                <Movenet type="A"></Movenet>
              </div>
              }
            </div>

            <div>
              {isPoseBVisible&&
              <div>
                <Pose name={programDetail.pose[1].name} description={programDetail.pose[1].description}></Pose>
                <Movenet type="B"></Movenet>
              </div>
              }
            </div>

            <div>
              {isPoseCVisible&&
              <div>
                <Pose name={programDetail.pose[2].name} description={programDetail.pose[2].description}></Pose>
                <Movenet type="C"></Movenet>
              </div>
              }
            </div>

            <div>
              {isPoseDVisible&&
              <div>
                <Pose name={programDetail.pose[3].name} description={programDetail.pose[3].description}></Pose>
                <Movenet type="D"></Movenet>
              </div>
              }
            </div>

            <div>
              {isDoneVisible&&
                <Done></Done>
              }
            </div>          
          </div>
        </div>
    </div>
  )
}
