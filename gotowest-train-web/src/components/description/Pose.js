import React from 'react'

export default function Pose(props) {
  return (
    <div>
      <div className='poseContainer'>
        {props.order=='첫'&&<img src={require('../../../src/assets/bar1.png')} className='bar'></img>}
        {props.order=='두'&&<img src={require('../../../src/assets/bar2.png')} className='bar'></img>}
        {props.order=='세'&&<img src={require('../../../src/assets/bar3.png')} className='bar'></img>}
        {props.order=='네'&&<img src={require('../../../src/assets/bar4.png')} className='bar'></img>}
        
        <p className='dt1'>{props.order}번째 동작</p>
        <br/>
        <p className='dt2'>{props.name}</p>
        <br/>
        
        <img src={require('../../../src/assets/left_side_stretch_sample.gif')} className='gifImg'></img>

        <div className='dt3Container'>
          <p className='dt3'>{props.description}</p>
        </div>
      </div>
    </div>
    
  )
}
