import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ModelViewer({ url }) {
  const containerRef = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  containerRef.current.appendChild(renderer.domElement);

  useEffect(() => {
    const loader = new THREE.GLTFLoader();
    loader.load(url, (gltf) => {
      scene.add(gltf.scene);
    });
  }, [url]);

  const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();

  return <div ref={containerRef} />;
}

export default ModelViewer;
