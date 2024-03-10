import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Biomechanical_consideration.css";
import { useNavigate } from "react-router-dom";

function View_Biomechanical_consideration() {
  const [animations, setAnimations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAnimations(); // เรียกใช้ฟังก์ชั่นเมื่อคอมโพเนนท์ถูกโหลดเท่านั้น
  }, []); 

  const fetchAnimations = () => {
    // ดึงข้อมูล animation จาก API
    axios
      .get("http://localhost:3001/getAnimation")
      .then((response) => {
        setAnimations(response.data); // เก็บข้อมูล animation ใน state
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const goToEditPage = (id) => {
    // นำผู้ใช้ไปยังหน้าแก้ไข animation ที่เลือก
    navigate(`/Edit-Biomechanical-consideration/${id}`);
  };

  const removeAnimation = (id) => {
    // ลบ animation ที่เลือก
    axios
      .delete(`http://localhost:3001/deleteAnimation/${id}`)
      .then((response) => {
        // ลบ animation ออกจาก state
        setAnimations(animations.filter((animation) => animation._id !== id));
        alert("Animation deleted successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to delete animation.");
      });
  };

  const handleAddAnimation = () => {
    // นำผู้ใช้ไปยังหน้าแก้ไข animation ที่เลือก
    navigate(`/Add-Biomechanical-consideration`);
  };

  return (
    <div className="Content" style={{ backgroundColor: "#fff" }}>
      <h1>Biomechanical consideration</h1>
      <div className="title">Mechanical force</div>
      <div className="Frame">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {animations.map((animation) => (
            <div
              key={animation._id}
              style={{ width: "33%", marginBottom: "20px" }}
            >
              {/* แสดงภาพของ animation */}
              <img
                src={`data:${animation.Ani_image.contentType};base64,${animation.Ani_image.data}`}
                alt={animation.Ani_name}
                width="300"
                height="180px"
              />

              <h3>{animation.Ani_name}</h3>
              <p className="description">{animation.Ani_description}</p>
              <button
                className="button-edit"
                onClick={() => goToEditPage(animation._id)}
              >
                Edit
              </button>
              <button
                className="button-remove"
                onClick={() => removeAnimation(animation._id)}
              >
                Delete
              </button>
            </div>
          ))}

          <div style={{ width: "33%", marginBottom: "20px" }}>
            <button className="button-add" onClick={handleAddAnimation}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View_Biomechanical_consideration;
