import React from 'react'
export default function Script() {
  return (
    <div className='scriptContainer'>
        <div className='cdcenter'>
          <p>안녕하세요.</p>
          <p>지금부터 운동을 시작하겠습니다.</p>
          <p>잠시 뒤 나오는 운동 자세를</p>
          <p>화면의 안내에 따라 잘 따라해주세요.</p>
        </div>
        <img src={require('../../assets/hello.png')} className='helloImg'></img>
    </div>        
  )
}

