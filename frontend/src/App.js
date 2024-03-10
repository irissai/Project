import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditBiomechanicalConsideration from "./content/sample_case/Biomechanical_consideration/Edit_Biomechanical_consideration";
import ViewBiomechanicalConsideration from "./content/sample_case/Biomechanical_consideration/View_Biomechanical_consideration";
import ViewListBiomechanicalConsideration from "./content/sample_case/Biomechanical_consideration/Vdo_List";
import BiomechanicalConsideration from "./content/sample_case/Biomechanical_consideration/Biomechanical_consideration";
import PossibleMovementOfRPD from "./content/sample_case/Possible_movement_of_RPD/Possible_movement_of_RPD";
import ViewRPDSampleCase from "./content/sample_case/RPD_sample_case/View/View_RPD_sample_case";
import RPDSampleCase from "./content/sample_case/RPD_sample_case/View/RPD_sample_case";
import Navbar from "./navbar/Navbar";
import EditRPD from "./content/sample_case/RPD_sample_case/View/Edit_RPD";
import AddRPD from "./content/sample_case/RPD_sample_case/View/RPD_sample_case";
import Model from "./content/sample_case/RPD_sample_case/View/ViewModel";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ViewRPDSampleCase />} />
          <Route path="/Edit-RPD/:name/edit" element={<EditRPD />} />
          <Route path="/Add-RPD" element={<AddRPD />} />
          <Route path="/Edit-Biomechanical-consideration/:id" element={<EditBiomechanicalConsideration />} />
          <Route path="/Biomechanical-consideration" element={<ViewBiomechanicalConsideration />} />
          <Route path="/Vdo-List" element={<ViewListBiomechanicalConsideration />} />
          <Route path="/Add-Biomechanical-consideration" element={<BiomechanicalConsideration />} />
          <Route path="/Possible-movement-of-RPD" element={<PossibleMovementOfRPD />} />
          <Route path="/RPD-sample-case" element={<RPDSampleCase />} />
          <Route path="/Model/:name/view" element={<Model />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
