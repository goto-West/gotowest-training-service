import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { aDataAtom, bDataAtom, cDataAtom, dDataAtom, isAAtom, isBAtom, isCAtom, isDAtom, isEAtom } from "../../atoms";

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

    const isAValue = useRecoilValue(isAAtom);
    const isBValue = useRecoilValue(isBAtom);
    const isCValue = useRecoilValue(isCAtom);
    const isDValue = useRecoilValue(isDAtom); 
    const isEValue = useRecoilValue(isEAtom);

    const webcamRef = useRef(null);
    //  Load posenet
    const runPosenet = async () => {
        const net = await posenet.load({
        inputResolution: { width: 720, height: 720 },
        scale: 0.1, //높일수록 정확도 향상, but 느려짐 
        });
        //
        setInterval(() => {
        detect(net);
        }, 20000);   //시간 설정 가능 (몇초마다 detect할지)
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
          
          /*
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
          */

          //분기 (atom value를 사용한)
          if(isAValue){
            setAState(x=>[...x,pose]);
          }else if(isBValue){
            setBState(x=>[...x,pose]);
          }else if(isCValue){
            setCState(x=>[...x,pose]);
          }else if(isEValue){
            setDState(x=>[...x,pose]);
          }else if(isDValue){
            setDState(x=>[...x,pose]);
          }
        }
    };
  
    runPosenet(); 

  return (
    <div>
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
            // width: 1280,
            width: 720,
            height: 720,
            opacity: 0, //화면단에선 카메라 숨기기 
            }}
        />

    </div>
  )
}
