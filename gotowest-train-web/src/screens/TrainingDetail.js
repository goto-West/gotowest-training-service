import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "../utilities";
import { useLocation } from "react-router-dom";

//1. check 페이지에서 선택한 프로그램 데이터를 받아온다.                                                     
//2. 프로그램 포즈 갯수만큼 반복된다. (*5개를 기준으로 진행한다.)
//3. 각 반복은 포즈 유지 시간(*5초로 설정) 만큼 진행된다. 
    //이 반복에선 posenet을 통해 skeletion array를 뽑아내어, state에 저장을 하게 된다. 
//4. 모든 포즈의 진행이 끝나면 이 결과값들을 벡앤드로 넘겨줌. 
//5. 점수에 대한 결과값을 다시 받아 useState로 관리한다.  

//특이점 
//거울에 비친 내 모습을 보니깐, 웹캠 컴포넌트는 화면에서 invisible하다. 

export default function TrainingDetail() {
    const location = useLocation(); 
    const p = location.state.p;  
    const [poseCnt, setPoseCnt] = useState(4); //한 프로그램의 자세 갯수 
    const [eachTime, setEachTime] = useState(5000); //한 자세의 유지 시간 
    const [skeletonArray, setSkeletonArray] = useState([[],[],[],[]]);

    //임시 데이터로 진행 
    const [programDetail, setProgramDetial] = useState(
        {
            id:"p1",
            count:4,
            pose:[
                {
                    name:"팔벌리기",
                    description:"양팔을 어깨 높이까지 벌려보아요",
                    image:"http://jtbcgolf.joins.com/news/data/4_16.jpg"
                },
                {
                    name:"옆구리 운동",
                    description:"옆구리를 늘려보아요",
                    image:"http://health.chosun.com/site/data/img_dir/2016/04/22/2016042201750_0.jpg"
                },
                {
                    name:"팔벌리기33",
                    description:"양팔을 어깨 높이까지 벌려보아요",
                    image:"http://jtbcgolf.joins.com/news/data/4_16.jpg"
                },
                {
                    name:"팔벌리기44",
                    description:"양팔을 어깨 높이까지 벌려보아요",
                    image:"http://jtbcgolf.joins.com/news/data/4_16.jpg"
                }
            ]
        }
    ); 

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    //  Load posenet
    const runPosenet = async () => {
        const net = await posenet.load({
        inputResolution: { width: 640, height: 480 },
        scale: 0.3, //높일수록 정확도 향상, but 느려짐 
        });
        //
        setInterval(() => {
        detect(net);
        }, 1000);   //시간 설정 가능 (몇초마다 detect할지) , 1초마다 디텍트 
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
          console.log(pose);
    
        //   drawCanvas(pose, video, videoWidth, videoHeight, canvasRef); 
        }
    };

    //좌표 그릴 필요 X 
    // const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    //     const ctx = canvas.current.getContext("2d");
    //     canvas.current.width = videoWidth;
    //     canvas.current.height = videoHeight;
    
    //     drawKeypoints(pose["keypoints"], 0.6, ctx);
    //     drawSkeleton(pose["keypoints"], 0.7, ctx);
    // };

    runPosenet(); 

  return (
    <div className="container">
        <div className="display">
            {programDetail.pose.map((p)=>(
                <div>
                    {p.name}
                    {p.description}
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
                            width: 640,
                            height: 480,
                        }}
                    />
                </div>
            ))
            }
        </div>
    </div>
  )
}
