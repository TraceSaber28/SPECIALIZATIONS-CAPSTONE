import React from "react";
import MapCard from "./MapCard";
import "./MapScreen.css";
import { useState } from "react";
import axios from "axios";

const MapsScreen = () => {
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("");

  const handleSubmit = (e) => {
    axios
      .post("/maps", {
        name,
        imgURL,
      })
      .then(() => {
        setName("");
        setImgURL("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="map-screen">
      <h1 className="screen-titles">All Available Maps</h1>
      <MapCard />
      <div id="form-container">
        <h1 id="add-map-title">Missing a Weapon? Add One Here</h1>
        <form id="add-map-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Map Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="add-map-input"
          />
          <input
            type="text"
            placeholder="imgURL"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
            className="add-map-input"
          />
           <button className="form-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MapsScreen;
