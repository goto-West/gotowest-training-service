import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
export default function Check() {
    const params = useParams();
    const location = useLocation();
    const p = location.state.p; 
    
  return (
    <div className='container'>
      <div className='display'>
        <div className='checkContainer'>
          {/* {params.programId} */}
        <audio
          autoplay="autoplay"
          src={require('../assets/audio/audio_2.mp3')}>
        </audio>
        <div className='cd'>
          <p>해당 과정으로</p>
          <p>운동을</p>
          <p>진행하시겠습니까?</p>
        </div>
        <div className='programContainer'>
          <img className="pimg" src={require('../assets/lecimgsample.png')}></img>
          {/* <img className="pimg" src={p.image}></img> */}
          <div className='pinfo'>
            <p className='pn'>{p.name}</p>
            <p className='pd'>설명: {p.detail}</p>
            <p className='pt'>소요 시간: {p.time}</p>
            <p className='pl'>진행자: {p.lecturer}</p>
          </div>
        </div>        
        {/* <Footer></Footer> */}
        </div>
        <div className='btnContainer'>
          {/* <Link to={`/traindetail/${p.id}`} state={{p:p}} >
            <div className='btnY'>
              <p className='bl'>예</p>
            </div>
          </Link> */}
          <Link to={`/description/${p.id}`} state={{p:p}}>
            <div className='btnY'> 
              <p className='bl'>예</p>
            </div>
          </Link>
          <Link to={`/choose`} >
            <div className='btnN'>
              <p className='bl'>아니요</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
