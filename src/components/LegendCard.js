import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LegendCard = () => {
  const [legends, setLegends] = useState([]);
  
  useEffect(() => {
    axios
    .get("/legends")
    .then((res) => {
      setLegends(
        res.data.map((element) => {
            return (
              <div id="legend-card">
                <div id="legend-img-container">
                  <img src={element.imgURL} alt="legend jpeg" />
                </div>
                <section id="legend-titles-container">
                  <h1 className="legend-card-name">{element.name}</h1>
                  <h2 className="legend-class_name">{element.class_name}</h2>
                </section>
                <nav>
                  <Link to={`/legend/${element.id}`}>
                    <button className="details-btn">Details</button>
                  </Link>
                </nav>
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
      <div className="card-display">{legends}</div>
    </div>
  );
};

export default LegendCard;
