import React from 'react'

export default function Pose(props) {
  return (
    <div>
      <div className='pc'>
        <p>자세명: {props.name}</p>
        <br/>
        <p>설명: {props.description}</p>
        <br/>
        <img src={require('../../../src/assets/left_side_stretch_sample.gif')}></img>
      </div>
    </div>
  )
}
