import React, { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '../../../../config/firebase';
// import axios from 'axios';

function RPD_sample_case() {
  const [modelName, setModelName] = useState(""); 
  const [fileModel, setFileModel] = useState(null);
  const [models, setModels] = useState([]);
// Then use 'modelName' instead of 'name' throughout your component


  useEffect(() => {
    const fetchModels = async () => {
      try {
        const modelsRef = ref(storage, 'models/');
        const modelsList = await listAll(modelsRef);
        
        const modelsData = await Promise.all(modelsList.items.map(async (item) => {
          const url = await getDownloadURL(ref(storage, `models/${item.name}`));
          return { id: item.name, name: item.name, url: url };
        }));
        
        setModels(modelsData);
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    };
    
    fetchModels();
  }, []);


  const handleFileChange = (event) => {
    setFileModel(event.target.files[0]);
  };

  const handleSaveModel = async () => {
    if (!modelName || !fileModel) {
      console.error("Model name and file are required.");
      return;
    }
  
    try {
      const storageRef = ref(storage, `models/${modelName}`);
      await uploadBytes(storageRef, fileModel, {
        contentType: 'model/gltf-binary'
      });
  
      const newModelRef = ref(storage, `models/${modelName}`);
      const url = await getDownloadURL(newModelRef);
      const newModel = { id: modelName, name: modelName, url: url };
  
      setModels([...models, newModel]);
  
      alert("Model saved successfully!");
    } catch (error) {
      console.error("Error saving model:", error);
    }
  };
  

  
  
  return (
    <div className="Content" style={{ backgroundColor: '#fff' }}>
      <h1>Possible movement of RPD</h1>
      <div className='title'>การวางตำแหน่งของ REST และ RETAINER เพื่อป้องกัน การเคลื่อนที่ของ RPD</div>
      <div className='Frame'>
        <h3>เคสตัวอย่าง</h3>
        <form encType="multipart/form-data">
          <label htmlFor="modelName">Model Name:</label>
          <input type="text" id="modelName" value={modelName} onChange={(e) => setModelName(e.target.value)} />

          <br /><br />
          <label htmlFor="fileModel">Choose File:</label>
          <input type="file" name="fileModel" id="fileModel" onChange={handleFileChange} /><br />
          <input type="button" className='save-button' value="Save" onClick={handleSaveModel} />
        </form>
      </div>
      {/* <h2>Models</h2>
      <ul>
        {models.map((model) => (
          <li key={model.name}>
            <span>{model.name}</span>
            <a href={model.url} target="_blank" rel="noopener noreferrer">Download</a>
          </li>
        ))}
      </ul> */}
    </div>
  );
  
}

export default RPD_sample_case;
