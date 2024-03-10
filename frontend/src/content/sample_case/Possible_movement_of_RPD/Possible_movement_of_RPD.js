import React, { Component } from 'react'
// import Possible_movement from '../components/Possible_movement'
import './Possible_movement_of_RPD.css' 

class Possible_movement_of_RPD extends Component {
  render() {
    return (
        <div className="Content">
        <h1>Possible movement of RPD</h1>
        <div className='title'>การวางตำแหน่งของ REST และ RETAINER  เพื่อป้องกัน การเคลื่อนที่ของ RPD </div>
        <video controls width="600" height="400">
  {/* <source src={require("../../img/vdo.mp4")} type="video/mp4" /> */}
  Your browser does not support the video tag.
</video>


        <div className='Frame'>vvv</div>
        </div>
    )
  }
}

export default Possible_movement_of_RPD