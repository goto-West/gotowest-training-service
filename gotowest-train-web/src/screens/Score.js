import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
export default function Score() {
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
};
  return (
    <div className='container'>
      <div className='display'>
        <audio
          autoplay="autoplay"
          src={require('../assets/audio/audio_6.mp3')}>
        </audio>
        <div className='cdcentermain'>
          <p>오늘의 활동점수</p>
        </div>
        <img src={require('../assets/scoreImg.png')} className='scoreImg'></img>
        
        <div className='scoreContainer'>
        {
          state.programDetail.pose.map(x=>
            <div className='scoreDetail'>
              <div>{x.name}</div>
              <div>점</div>
            </div>
            )
        }
        </div>
        
        <div className='resetBtnContainer'>
            <button className='startBtn' onClick={onClick}>
                처음화면
            </button>
        </div>

      </div>
    </div>
  )
}
