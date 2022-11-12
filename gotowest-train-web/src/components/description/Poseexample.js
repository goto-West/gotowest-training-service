import React from 'react'

export default function Poseexample() {
  return (
    <div className='container'>
      <div className='display'>
        <img src={require('../../../src/assets/bar1.png')} className='bar'></img>
        <p className='dt1'>첫번째 동작</p>
        <br/>
        <p className='dt2'>왼쪽 옆구리 스트레칭</p>
        <br/>
        
        <img src={require('../../../src/assets/left_side_stretch_sample.gif')} className='gifImg'></img>

        <div className='dt3Container'>
          <p className='dt3'>양손을 깍지 껴 머리위로 뻗고, 왼쪽 옆구리를 굽혀보아요</p>
        </div>

      </div>
    </div>
  )
}
