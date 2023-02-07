import React from "react";
import "./Randomizer.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Randomizer = () => {
  const [randomLoadout, setRandomLoadout] = useState();

  const clickHandler = () => {
    axios
      .get("/randomizer")
      .then((res) => {
        setRandomLoadout(
          res.data.map((element) => {
            return (
              <div id="randomizer-display">
                <section id="randomizer-legend-container">
                  <div id="randomizer-legend-card">
                    <div id="legend-img-container">
                      <img
                        src={element.legend.imgURL}
                        alt="legend jpeg"
                      />
                    </div>
                    <section id="legend-titles-container">
                      <h1 className="legend-card-name">
                        {element.legend.name}
                      </h1>
                      <h2 className="legend-class_name">
                        {element.legend.class_name}
                      </h2>
                    </section>
                    <nav>
                      <Link to={`/legend/${element.legendId}`}>
                        <button className="details-btn">Details</button>
                      </Link>
                    </nav>
                  </div>
                </section>
                <section id="weapon-card-container">
                  <div id="randomizer-weapon-card">
                    <div id="weapon-img-container">
                      <img
                        src={element.weaponOne.imgURL}
                        alt="weapon jpeg"
                      />
                    </div>
                    <section id="randomizer-weapon-titles-container">
                      <h1 id="randomizer-weapon-card-name">{element.weaponOne.name}</h1>
                      <h1 id="randomizer-weapon-ammo_type">
                        {element.weaponOne.ammoType}
                      </h1>
                    </section>
                  </div>
                  <div id="randomizer-weapon-card">
                    <div id="weapon-img-container">
                      <img
                        src={element.weaponTwo.imgURL}
                        alt="weapon jpeg"
                      />
                    </div>
                    <section id="randomizer-weapon-titles-container">
                      <h1 id="randomizer-weapon-card-name">{element.weaponTwo.name}</h1>
                      <h1 id="randomizer-weapon-ammo_type">
                        {element.weaponTwo.ammoType}
                      </h1>
                    </section>
                  </div>
                </section>
              </div>
            );
          })
        );
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="randomizer-screen">
      <section id="randomizer-titles">
        <h1 id="randomizer-title">Loadout Randomizer</h1>
        <button id="random-loadout-button" onClick={clickHandler}>
          Get A Random Loadout
        </button>
      </section>
      <div className="card-display">{randomLoadout}</div>
    </div>
  );
};

export default Randomizer;
