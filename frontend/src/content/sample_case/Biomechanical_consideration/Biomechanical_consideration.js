import React, { useState } from "react";
import axios from "axios";
import "./Biomechanical_consideration.css";

function BiomechanicalConsideration() {
  const [Ani_name, setAniName] = useState("");
  const [Ani_animation, setAniAnimation] = useState(null);
  const [Ani_description, setAniDescription] = useState("");
  const [Ani_image, setAniImage] = useState(null);

  const handleAnimationNameChange = (event) => {
    setAniName(event.target.value);
  };

  const handleAnimationDescriptionChange = (event) => {
    setAniDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setAniAnimation(event.target.files[0]);
  };

  const handleImageChange = (event) => {
    setAniImage(event.target.files[0]);
  };

  const handleAddAnimation = () => {
    const formData = new FormData();
    formData.append("Ani_name", Ani_name);
    formData.append("Ani_description", Ani_description);
    formData.append("Ani_animation", Ani_animation);
    formData.append("Ani_image", Ani_image);

    axios
      .post(`http://localhost:3001/saveAnimation`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("Animation added successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to add animation.");
      });
  };

  return (
    <div className="Content">
      <h1>Biomechanical consideration</h1>
      <div className="title">Mechanical force</div>
      <div className="Frame">
        <div className="Content" style={{ backgroundColor: "#fff" }}>
          <h1>Add New Animation</h1>
          <form>
            <label htmlFor="Ani_Name">Animation Name:</label>
            <br />
            <input
              type="text"
              id="Ani_name"
              value={Ani_name}
              onChange={handleAnimationNameChange}
            />
            <br />
            <br />
            <label htmlFor="Ani_description">Animation Description:</label>
            <br />
            <input
              type="text"
              id="Ani_description"
              value={Ani_description}
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
              value="Add Animation"
              className="add-button"
              onClick={handleAddAnimation}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default BiomechanicalConsideration;
