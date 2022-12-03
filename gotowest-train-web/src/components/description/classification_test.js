import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

//test code


export default function classification_test(props) {

    //결과
    let poseResults;
    //const navigate = useNavigate();
    let test = "경서";

    const labelA = 'arm'; //자세1의 라벨 
    const labelB = 'left side '; //자세2의 라벨
    const labelC = 'right side'; //자세3의 라벨
    const labelD = 'harry'; //자세4의 라벨
    
    //------------------------------------------------------------------------------------

    const afinal = [];
    const bfinal = [];
    const cfinal = [];
    const dfinal = []; 

    //매개변수 e인 이벤트 함수 onClick
    const onClick = async(e) => {

        const response 
            = await axios('http://localhost:3001/test', { angles: test, });
            
        console.log(response.data);

        // score.js
        navigate("/score", {
            state: {
                programDetail: props.programDetail,
                poseResults : poseResults,
            },
        });
    };

    
    
  return (
    <div>
        <audio
          autoplay="autoplay"
          src={require('../../assets/audio/audio_5.mp3')}>
        </audio>

        <div className='doneContainer'>
            <div className='cd'>
                <p>수고하셨습니다!</p>
                <p>오늘의 운동이 종료되었습니다.</p>
                <p>다음 버튼을 눌러</p>
                <p>오늘의 점수를 확인해주세요.</p>
            </div>
        </div>

        <div>
            <button className='startBtn' onClick={(event) => onClick(event)}>
                다음
            </button>
        </div>

        <img src={require('../../assets/thanks.png')} className='thanksImg'></img>
    </div>
    
  )
}