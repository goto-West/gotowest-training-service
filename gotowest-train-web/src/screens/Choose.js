import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import programData from "../data/programData.json";
export default function Choose() {
  const [isReady, setIsReady] = useState(false);
  const [programs, setPrograms] = useState([]);
  
  useEffect(()=>{
    setPrograms(programData.programs);
    setIsReady(true);
  },[]);

  //후에 벡앤드 연동 후 코드복구 
  // useEffect(()=>{
  //   const response = await fetch("http://localhost:8080/programs") // GET programs list  
  //   const json = await response.json();
  //   setPrograms(json);
  //   setLoading(false); 
  // }, []);

  return (
    <div>
      {isReady && (
        <div className='ccontainer'>
          <div className='display'>
            <h1 className='chooseText'>프로그램 둘러보기👀</h1>
            <div className='ptcontainer'>
              {programs.map((p)=>(
                <div>
                  <Link to={`/check/${p.id}`} state={{p:p}} className='link'>
                    <div className='programContainer'>
                        <img className="pimg" src={require('../assets/lecimgsample.png')}></img>
                        <div className='pinfo'>
                          <p className='pn'>{p.name}</p>
                          <p className='pd'>설명: {p.detail}</p>
                          <p className='pt'>소요 시간: {p.time}</p>
                          <p className='pl'>진행자: {p.lecturer}</p>
                        </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <Footer></Footer>
          </div>
        </div>
      )
      }
    </div>
  )
}
