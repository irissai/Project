// import React from "react";
// import axios from "axios";
// import { storage } from '../config/firebase';
// import { ref } from 'firebase/storage'; // Import ref from Firebase storage

// const EditModel = ({ id, name, setUpdateUI, updateMode }) => {
//   const removeModel = () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this model?"
//     );
//     if (confirmDelete) {
//       // Define the URL for deleting the model
//       const deleteModelRef = ref(storage, `models/${id}`); // เปลี่ยนชื่อตัวแปรเป็น deleteModelRef
//       axios
//         .delete(deleteModelRef) // เปลี่ยนจาก deleteModelURL เป็น deleteModelRef
//         .then(() => {
//           console.log("Deleted Successfully");
//           setUpdateUI((prev) => !prev);
//         })
//         .catch((error) => {
//           console.error("Error deleting model:", error);
//         });
//     }
//   };

//   return (
//     <li>
//       <div>
//         <div className="edit">
//           <button className="edit-button" onClick={() => updateMode(id, name)}>Edit</button>
//           <button className="delete-button" onClick={removeModel}>Delete</button>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default EditModel;
