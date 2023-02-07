import React from 'react'
import WeaponCard from './WeaponCard'
import './WeaponsScreen.css'
import { useState } from 'react'
import axios from 'axios'

const WeaponsScreen = () => {
 const [name, setName] = useState("")
 const [ammoType, setAmmoType] = useState("")
 const [imgURL, setImgURL] = useState("")

  const handleSubmit = (e) => {
    axios
      .post("/weapons", {
        name,
        ammoType,
        imgURL,
      }).then(() => {
        setName('')
        setAmmoType('')
        setImgURL('')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div id='weapons-screen'>
      <h1 className="screen-titles">Weapons</h1>
        <WeaponCard/>
        <div id="form-container">
        <h1 id="add-weapon-title">Missing a Weapon? Add One Here</h1>
        <form id="add-weapon-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Weapon Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="add-weapon-input"
          />
          <input
            type="text"
            placeholder="Ammo Type(s)"
            value={ammoType}
            onChange={(e) => setAmmoType(e.target.value)}
            className="add-weapon-input"
          />
          <input
            type="text"
            placeholder="imgURL"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
            className="add-weapon-input"
          />
           <button className="form-btn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default WeaponsScreen