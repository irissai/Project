// import React, { Component } from "react";
// // import * as THREE from "three";
// // import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// // import AR7Model from "../../model/untitled1.glb"; // นำเข้าโมเดลเป็นตัวแปร AR7Model

// class TRIANGULAR_TRIPOD extends Component {
//   componentDidMount() {
//     // ตั้งค่า Three.js scene
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xffffff);  // เปลี่ยนสีพื้นหลังเป็นสีขาว

//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById('3d-container').appendChild(renderer.domElement);

//     let model;  // เก็บโมเดลไว้ในตัวแปร global เพื่อให้เข้าถึงได้ทั้งใน componentDidMount และ animate

//      // ฟังก์ชันตรวจจับการเคลื่อนไหวของเมาส์
//      const onMouseMove = (event) => {
//       if (!model) return;

//       const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//       const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

//       const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
//       vector.unproject(camera);

//       const raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
//       const intersects = raycaster.intersectObject(model, true);

//       if (intersects.length > 0) {
//         // ปรับการหมุนโมเดลตามการเคลื่อนไหวของเมาส์
//         model.rotation.y += 0.005 * event.movementX;
//         model.rotation.x += 0.005 * event.movementY;
//       }
//     };

//     // โหลด 3D model
//     const loader = new GLTFLoader();
//     loader.load(
//       AR7Model,
//       (gltf) => {
//         model = gltf.scene;
//         scene.add(model);

//         // เมื่อโมเดลโหลดเสร็จ
//         // ตั้งค่าตำแหน่งของกล้อง
//         camera.position.z = 5;

//         // เพิ่มการตรวจจับการเคลื่อนไหวของเมาส์
//         document.addEventListener('mousemove', onMouseMove);

//         // ตั้งค่า animation
//         const animate = () => {
//           requestAnimationFrame(animate);

//           // ไม่ต้องใส่การหมุนโมเดลตรงนี้

//           renderer.render(scene, camera);
//         };

//         // เริ่ม animation
//         animate();
//       },
//       undefined,
//       (error) => {
//         console.error(error);
//       }
//     );
//   }

//   render() {
//     return (
//       <div className="Content">
//         <h1>Possible movement of RPD</h1>
//         <div className='title'>การวางตำแหน่งของ REST และ RETAINER เพื่อป้องกัน การเคลื่อนที่ของ RPD </div>
//         <div id="3d-container" className='Frame'></div>
//       </div>
//     );
//   }
// }

// export default TRIANGULAR_TRIPOD;
