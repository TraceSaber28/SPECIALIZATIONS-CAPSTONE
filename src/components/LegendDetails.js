import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './LegendDetails.css'

const LegendDetails = () => {
  const {id} = useParams()
  const [legendDetails, setLegendDetails] = useState([])

  const getLegendDetails = () => {
    axios.get(`/legend/${id}`)
    .then(res => {
      console.log(res.data)
      setLegendDetails(res.data)
    })
  }

  useEffect(() => {
    getLegendDetails()
  }, [])

  return (
    <div id='details-screen'>
      <div id='details-display'>
        <div id='legend-details-header'>
        <h1 className='legend-header-titles'>{legendDetails.name}</h1>
        <h2 className='legend-header-titles'>{legendDetails.class_name}</h2>
        </div>
        <div id='legend-details-container'>
          <div id='passive-container'>
          <h1 className='details-title'>Passive(s)</h1>
          <h2 className='details-name'>{legendDetails.passive_name}</h2>
          <h2 className='details-description'>{legendDetails.passive_description}</h2>
          </div>
          <div id='tactical-container'>
          <h1 className='details-title'>Tactical</h1>
          <h2 className='details-name'>{legendDetails.tactical_name}</h2>
          <h2 className='details-description'>{legendDetails.tactical_description}</h2>
          </div>
          <div id='ultimate-container'>
          <h1 className='details-title'>Ultimate</h1>
          <h2 className='details-name'>{legendDetails.ultimate_name}</h2>
          <h2 className='details-description'>{legendDetails.ultimate_description}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LegendDetails