import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';

export default function Home() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/choose");
    }    
  return (
    <div className='container'>
        <div className='display'>
            <audio
                autoplay="autoplay"
                src={require('../assets/audio/audio_0.mp3')}>
            </audio>
            <h1 className='homeText'>으라차차 운동교실</h1>
            {/* <img className='logoImg' src={require('../assets/logo.png')}></img> */}
            <img className='logoImg' src={require('../assets/chacha.png')}></img>
            <br/>
            <button className='startBtn' onClick={onClick}>
                시작하기
            </button>
            {/* <Footer></Footer> */}
        </div>
    </div>
  )
}
