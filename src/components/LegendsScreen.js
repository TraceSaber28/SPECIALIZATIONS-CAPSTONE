import React from "react";
import LegendCard from "./LegendCard";
import "./LegendsScreen.css";
import axios from "axios";
import { useState } from "react";

const LegendsScreen = () => {
  const [name, setName] = useState("");
  const [class_name, setClass_name] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [passive_name, setPassive_name] = useState("");
  const [passive_description, setPassive_description] = useState("");
  const [tactical_name, setTactical_name] = useState("");
  const [tactical_description, setTactical_description] = useState("");
  const [ultimate_name, setUltimate_name] = useState("");
  const [ultimate_description, setUltimate_description] = useState("");


  const handleSubmit = (e) => {
    axios
      .post("/legends", {
        name,
        class_name,
        imgURL,
        passive_name,
        passive_description,
        tactical_name,
        tactical_description,
        ultimate_name,
        ultimate_description,
      }).then(() => {
        setName('')
        setClass_name('')
        setImgURL('')
        setPassive_name('')
        setPassive_description('')
        setTactical_name('')
        setTactical_description('')
        setUltimate_name('')
        setUltimate_description('')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="legends-screen">
      <h1 className="screen-titles">All About The Legends</h1>
      <LegendCard />
      <div id="form-container">
        <h1 id="add-legend-title">Missing a Legend? Add One Here</h1>
        <form id="add-legend-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Legend Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="add-legend-input"
          />
          <input
            type="text"
            placeholder="Class Name"
            value={class_name}
            onChange={(e) => setClass_name(e.target.value)}
            className="add-legend-input"
          />
          <input
            type="text"
            placeholder="imgURL"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
            className="add-legend-input"
          />
          <input
            type="text"
            placeholder="Passive Name"
            value={passive_name}
            onChange={(e) => setPassive_name(e.target.value)}
            className="add-legend-input"
          />
          <input
            type="text"
            placeholder="Passive Description"
            value={passive_description}
            onChange={(e) => setPassive_description(e.target.value)}
            className="add-legend-input"
          />
          <input
            type="text"
            placeholder="Tactical Name"
            value={tactical_name}
            onChange={(e) => setTactical_name(e.target.value)}
            className="add-legend-input"
          />
          <input
            type="text"
            placeholder="Tactical Description"
            value={tactical_description}
            onChange={(e) => setTactical_description(e.target.value)}
            className="add-legend-input"
          />
          <input
            type="text"
            placeholder="Ultimate Name"
            value={ultimate_name}
            onChange={(e) => setUltimate_name(e.target.value)}
            className="add-legend-input"
          />
          <input
            type="text"
            placeholder="Ultimate Description"
            value={ultimate_description}
            onChange={(e) => setUltimate_description(e.target.value)}
            className="add-legend-input"
          />
            <button className="form-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LegendsScreen;
