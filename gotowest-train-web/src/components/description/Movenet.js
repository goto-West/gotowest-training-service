import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { aDataAtom, bDataAtom, cDataAtom, dDataAtom } from "../../atoms";

export default function Movenet(props) {
  
    const aSkeletonData = useRecoilValue(aDataAtom);
    const bSkeletonData = useRecoilValue(bDataAtom);
    const cSkeletonData = useRecoilValue(cDataAtom);
    const dSkeletonData = useRecoilValue(dDataAtom);

    // console.log("movenet component");
    // console.log(props.type); 
    //props.ename (전달된 포즈 영어 분류)

    const setAState = useSetRecoilState(aDataAtom);
    const setBState = useSetRecoilState(bDataAtom);
    const setCState = useSetRecoilState(cDataAtom);
    const setDState = useSetRecoilState(dDataAtom); 

    const webcamRef = useRef(null);
    //  Load posenet
    const runPosenet = async () => {
        const net = await posenet.load({
        inputResolution: { width: 1280, height: 720 },
        scale: 0.1, //높일수록 정확도 향상, but 느려짐 
        });
        //
        setInterval(() => {
        detect(net);
        }, 2000);   //시간 설정 가능 (몇초마다 detect할지) , 2초마다 디텍트 
    };

    //detect 
    const detect = async (net) => {
        if (
          typeof webcamRef.current !== "undefined" &&
          webcamRef.current !== null &&
          webcamRef.current.video.readyState === 4
        ) {
          // Get Video Properties
          const video = webcamRef.current.video;
          const videoWidth = webcamRef.current.video.videoWidth;
          const videoHeight = webcamRef.current.video.videoHeight;
    
          // Set video width
          webcamRef.current.video.width = videoWidth;
          webcamRef.current.video.height = videoHeight;
    
          // Make Detections
          const pose = await net.estimateSinglePose(video);

          //획득한 데이터로 바로 angle_extraction 돌리기
          //돌리고 난 뒤 모델에 또 돌리기 
          //모델에 돌리고 난 뒤 최종 결과를 전달 및 표기 
          
          // 분기 
          if(props.type=="A"){
            setAState(x=>[...x,pose]);
          }else if(props.type=="B"){
            setBState(x=>[...x,pose]);
          }else if(props.type=="C"){
            setCState(x=>[...x,pose]);
          }else if(props.type=="D"){
            setDState(x=>[...x,pose]);
          }

          // console.log(pose);
        }
    };
  
    runPosenet(); 

  return (
    <div className="container">
        <div className="display">
                    <Webcam
                        ref={webcamRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zindex: 9,
                            width: 1280,
                            height: 720,
                        }}
                    />
        </div>
    </div>
  )
}
