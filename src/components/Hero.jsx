import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="hero_coint">
        <p className="hero_title">Raid the best <span className='newsletter'>newsletter</span> out there!</p>
      </div>

      <p className="one_stop">One stop, for all your newsletters 🚀</p>

      <div className="search">
        <input type="text" name="search" id="search" placeholder="Categories, country, language..."/>
      </div>
    </div>
  )
}

export default Hero;