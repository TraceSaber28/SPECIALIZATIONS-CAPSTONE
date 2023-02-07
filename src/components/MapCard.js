import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const MapCard = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    axios
      .get("/maps")
      .then((res) => {
        setMaps(
          res.data.map((element) => {
            return (
              <div id="map-card">
                <div id="map-img-container">
                  <img src={element.imgURL} alt="map jpeg" />
                </div>
                <section id="map-title-container">
                  <h1 id="map-name">{element.name}</h1>
                </section>
              </div>
            );
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="card-display">{maps}</div>
    </div>
  );
};

export default MapCard;
