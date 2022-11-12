import React from 'react'
//중간 안내 화면 (자세 전환)
export default function Middle() {
  return (
    <div>
      <audio
          autoplay="autoplay"
          src={require('../../assets/audio/audio_4.mp3')}>
      </audio>
      <div className='middleContainer'>
        <div className='cd'>
          <p>잘하셨습니다!</p>
          <p>잠시 뒤 </p>
          <p>다음 자세를 시작합니다</p>
          <p>호흡을 가다듬고 준비해주세요.</p>
        </div>
      </div>

      <img src={require('../../assets/break.png')} className='breakImg'></img>
    </div>
  )
}
