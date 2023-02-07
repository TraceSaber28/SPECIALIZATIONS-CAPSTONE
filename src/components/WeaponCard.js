import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const WeaponCard = () => {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    axios
      .get("/weapons")
      .then((res) => {
        setWeapons(
          res.data.map((element) => {
            return (
              <div id="weapon-card">
                <div id="weapon-img-container">
                  <img src={element.imgURL} alt="weapon jpeg" />
                </div>
                <section id="weapon-titles-container">
                  <h1 id="weapon-card-name">{element.name}</h1>
                  <h1 id="weapon-ammo-type">{element.ammoType}</h1>
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
      <div className="card-display" >{weapons}</div>
    </div>
  );
};

export default WeaponCard;
