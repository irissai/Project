import React, { useState, useEffect } from 'react';
import { ref, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { storage } from '../../../../config/firebase';
import { useLocation } from 'react-router-dom';


function Edit_RPD() {
  const location = useLocation();
  const [fileModel, setFileModel] = useState(null);
  const [newModelName, setNewModelName] = useState("");
  const [notification, setNotification] = useState("");
  const [modelURL, setModelURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!location.state || !location.state.name) {
          console.error("Model name is not defined.");
          return;
        }

        const modelName = location.state.name;
        setNewModelName(modelName);

        const modelRef = ref(storage, `models/${modelName}`);
        const url = await getDownloadURL(modelRef);
        setModelURL(url);
      } catch (error) {
        console.error("Error fetching model data:", error);
      }
    };

    fetchData();
  }, [location.state]);

  const handleFileChange = (event) => {
    setFileModel(event.target.files[0]);
  };

  const handleModelNameChange = (event) => {
    setNewModelName(event.target.value);
  };

  const handleUpdateModel = async () => {
    if (!newModelName || !fileModel) {
      console.error("Model name and file are required.");
      return;
    }
  
    try {
      // Delete the old file (if any)
      const oldModelRef = ref(storage, `models/${location.state.name}`);
      await deleteObject(oldModelRef);
  
      // Upload the new file
      const storageRef = ref(storage, `models/${newModelName}`);
      await uploadBytes(storageRef, fileModel, {
        contentType: 'model/gltf-binary'
      });
  
      // Update the new URL
      const url = await getDownloadURL(storageRef);
      setModelURL(url);
      setNotification("Model updated successfully!");
      alert("Model updated successfully!");
    } catch (error) {
      console.error("Error saving model:", error);
    }
  };
  
  return (
    <div className="Content" style={{ backgroundColor: '#fff' }}>
      <h1>Edit Model</h1>
      {notification && <p>{notification}</p>}
      <form>
        <label htmlFor="modelName">Model Name:</label><br />
        <input type="text" id="modelName" value={newModelName} onChange={handleModelNameChange} />
        <br /><br />
        <label htmlFor="fileModel">Choose File:</label><br />
        <input type="file" name="fileModel" className="choose-file" id="fileModel" onChange={handleFileChange} /><br />
        <input type="button" value="Save" className="save-button" onClick={handleUpdateModel} />
      </form>
    </div>
  );
}

export default Edit_RPD;
