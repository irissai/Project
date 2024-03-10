import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Biomechanical_consideration.css";
import { useParams } from "react-router-dom";

function Edit_Biomechanical_consideration() {
  const { id } = useParams(); // ใช้ useParams เพื่อดึงค่า id จาก URL

  const [newAnimationName, setNewAnimationName] = useState("");
  const [newAnimationDescription, setNewAnimationDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // เพิ่ม selectedImage เพื่อเก็บข้อมูลรูปภาพ

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/getAnimationById/${id}`)
        .then(response => {
          const { Ani_name, Ani_description, Ani_animation,Ani_image } = response.data;
          console.log("Ani_name:", Ani_name);
          console.log("Ani_description:", Ani_description);
          console.log("Ani_animation:", Ani_animation);
          console.log("Ani_image:", Ani_image);
          setNewAnimationName(Ani_name);
          setNewAnimationDescription(Ani_description);
          setSelectedFile(Ani_animation);
          setSelectedImage(Ani_image);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      console.error('ID is null or undefined');
    }
  }, [id]);
  
  const handleAnimationNameChange = (event) => {
    setNewAnimationName(event.target.value);
  };

  const handleAnimationDescriptionChange = (event) => {
    setNewAnimationDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // เพิ่ม handleImageChange เพื่อจัดการการเลือกไฟล์รูปภาพ
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpdateAnimation = () => {
    if (!id) {
      console.error("ID is null or undefined");
      return;
    }

    const formData = new FormData();
    formData.append("Ani_name", newAnimationName);
    formData.append("Ani_description", newAnimationDescription);
    formData.append("Ani_animation", selectedFile);
    formData.append("Ani_image", selectedImage); // เพิ่มรูปภาพใน FormData

    axios
      .put(`http://localhost:3001/updateAnimation/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("Animation updated successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to update animation.");
      });
  };

  return (
    <div className="Content">
      <h1>Biomechanical consideration</h1>
      <div className="title">Mechanical force</div>
      <div className="Frame">
        <div className="Content" style={{ backgroundColor: "#fff" }}>
          <h1>Edit Animation</h1>
          <form>
            <label htmlFor="Ani_Name">Animation Name:</label>
            <br />
            <input
              type="text"
              id="Ani_name"
              value={newAnimationName}
              onChange={handleAnimationNameChange}
            />
            <br />
            <br />
            <label htmlFor="Ani_description">Animation Description:</label>
            <br />
            <input
              type="text"
              id="Ani_description"
              value={newAnimationDescription}
              onChange={handleAnimationDescriptionChange}
            />
            <br />
            <br />
            <label htmlFor="Ani_Animation">Choose Animation File:</label>
            <br />
            <input
              type="file"
              name="Ani_Animation"
              className="choose-file"
              id="Ani_Animation"
              accept="video/*"
              onChange={handleFileChange}
            />
            <br />
            <label htmlFor="Ani_image">Choose Image File:</label>
            <br />
            <input
              type="file"
              name="Ani_image"
              className="choose-file"
              id="Ani_image"
              accept="image/*"
              onChange={handleImageChange}
            />
            <br />
            <input
              type="button"
              value="Save"
              className="save-button"
              onClick={handleUpdateAnimation}
            />
          </form>
        </div>
      </div>
    </div>
  );
  
}

export default Edit_Biomechanical_consideration;
