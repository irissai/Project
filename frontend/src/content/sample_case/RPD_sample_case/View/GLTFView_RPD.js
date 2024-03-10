import React, { useState, useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import GLTFLoader
import * as THREE from 'three'; // Import THREE

function GLTFView_RPD({ url, onModelClick }) {
  const [scene, setScene] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (url) {
      const loadModel = async () => {
        const loader = new GLTFLoader();
        const model = await loader.loadAsync(url);
        setScene(model.scene);
      };

      loadModel();
    }
  }, [url]);

  useEffect(() => {
    if (scene) {
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio set to 1
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(300, 300); // Set canvas size to 300x300
      renderer.setClearColor(0xffffff); // Set background color to white
      canvasRef.current.appendChild(renderer.domElement);

      // Set model scale
      scene.scale.set(2, 2, 2);

      // Set model position to center of the scene
      const box = new THREE.Box3().setFromObject(scene);
      const center = new THREE.Vector3();
      box.getCenter(center);
      scene.position.sub(center);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(10, 10, 10);
      scene.add(directionalLight);

      camera.position.z = 10;

      const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();

      return () => {
      };
    }
  }, [scene]);

  return <div ref={canvasRef} onClick={onModelClick}></div>;
}

export default GLTFView_RPD;
