import React from 'react';
import { useLocation } from 'react-router-dom';
import './RPD_sample_case.css';
import Viewer from './GLTFViewer';
// import {OrbitControls} from '@react-three/drei'
function ViewModel() {
  const location = useLocation();


  return (
    <div className="Content" style={{ backgroundColor: '#fff' }}>
      <h1>Possible movement of RPD</h1>
      <div className='title'>การวางตำแหน่งของ REST และ RETAINER เพื่อป้องกัน การเคลื่อนที่ของ RPD</div>
      <div className='Frame-View'>
        {/* <h3>เคสตัวอย่าง</h3> */}
      

      {/* <h2>Models</h2> */}

      {location.state && location.state.selectedModel && (
        <div>
          {/* แสดงรายละเอียดของโมเดลที่ถูกคลิก
          <p>Name: {location.state.selectedModel.name}</p>
           */}
          <Viewer url={location.state.selectedModel.url} />
        </div>
      )}
    </div>
    </div>
  );
}

export default ViewModel;
