import React from 'react'
import popcornimage from './assets/popcorn-images.jpeg'
import Italainiceimage from './assets/Italian-ice.jpeg'
export default function About() {
  return (
    <div style={{ color:'green'}}>
      <h1 style={{textAlign:'center', fontFamily:'Comfortaa'}}>We’re a business dedicated to <br/> having the best Popcorn and <br/>Italian Ice flavors to choose <br/>from
</h1>
<img src={Italainiceimage} />
<img src={popcornimage} />
<h2 style={{textAlign:'center', fontFamily:'Comfortaa'}}>Our Mission</h2>
<p style={{textAlign:'center', fontFamily:'Comfortaa'}}>Build the best product that creates the most value <br/>for our customers, use business to inspire and <br/>implement environmentally friendly solutions.</p>
<h2 style={{textAlign:'center', fontFamily:'Comfortaa'}}>Our Vission</h2>
<p style={{textAlign:'center', fontFamily:'Comfortaa'}}>We strive to go above and beyond for our clients no <br/>matter the challenge. We aim to deliver our very <br/>best work every single day across our services.</p>
    </div>
   
  )
}
