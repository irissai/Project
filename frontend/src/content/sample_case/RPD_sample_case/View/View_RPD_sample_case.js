import React, { useState, useEffect } from "react";
import { ref, getDownloadURL, deleteObject, listAll } from "firebase/storage";
import { storage } from "../../../../config/firebase";
import GLTFViewer from "./GLTFView_RPD";
import { useNavigate } from "react-router-dom";
import "./RPD_sample_case.css";
// import axios from 'axios';

function View_RPD_sample_case() {
  const [models, setModels] = useState([]); // เปลี่ยน models เป็น modelsData
  const navigate = useNavigate();
  useEffect(() => {
    const fetchModels = async () => {
      try {
        const modelsRef = ref(storage, "models/");
        const modelsList = await listAll(modelsRef);
        const modelsData = await Promise.all(
          modelsList.items.map(async (item) => {
            const url = await getDownloadURL(
              ref(storage, `models/${item.name}`)
            );
            return { id: item.name, name: item.name, url: url };
          })
        );
        setModels(modelsData);
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    };
    fetchModels();
  }, []);

  const removeModel = async (modelName) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this model?"
    );
    if (confirmDelete) {
      try {
        const modelRef = ref(storage, `models/${modelName}`);
        await deleteObject(modelRef);
        console.log("Deleted Successfully");

        // หลังจากลบสำเร็จ ทำการอัปเดตรายการโมเดลใน state
        const updatedModels = models.filter(
          (model) => model.name !== modelName
        );
        setModels(updatedModels);
      } catch (error) {
        console.error("Error deleting model:", error);
      }
    } else {
      console.log("Deletion canceled");
    }
  };

  const goToEditPage = (name, url) => {
    console.log("Name sent to edit page:", name);
    console.log("URL sent to edit page:", url);
    navigate(`/Edit-RPD/${name}/edit`, { state: { name, url } });
  };

  const handleAddModel = () => {
    navigate(`/Add-RPD`);
  };

  const handleModelClick = (name, url) => {
    navigate(`/Model/${name}/view`, {
      state: { selectedModel: { name, url } },
    });
  };

  return (
    <div className="Content" style={{ backgroundColor: "#fff" }}>
      <h1>Possible movement of RPD</h1>
      <div className="title">
        การวางตำแหน่งของ REST และ RETAINER เพื่อป้องกัน การเคลื่อนที่ของ RPD
      </div>
      <div className="Frame">
        <h3>เคสตัวอย่าง</h3>
      </div>

      <h2>Models</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {models.map((model) => (
          <div key={model.name} style={{ width: "33%", marginBottom: "20px" }}>
            <span>{model.name}</span> {/* แสดงชื่อโมเดลแทนที่ชื่อไฟล์ */}
            <GLTFViewer
              url={model.url}
              onModelClick={() => handleModelClick(model.name, model.url)} // ส่งโมเดลที่ถูกคลิกไปยัง handleModelClick
            />
            <button
              className="button-edit"
              onClick={() => goToEditPage(model.name, model.url)}
            >
              Edit
            </button>
            <button
              className="button-remove"
              onClick={() => removeModel(model.name)}
            >
              Delete
            </button>
          </div>
        ))}

        <div style={{ width: "33%", marginBottom: "20px" }}>
          <button className="button-add" onClick={handleAddModel}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default View_RPD_sample_case;
