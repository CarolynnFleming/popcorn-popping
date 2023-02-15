
import React from 'react'
import{ Link } from 'react-router-dom'

import popcorn from './assets/popcorn.gif';
export default function Home() {
  return (
    <div style={{ backgroundColor:'rgb(242,80,18)',
    background: 'linear-gradient(90deg, rgba(242,80,18,1) 0%, rgba(155,245,20,1) 65%, rgba(255,250,0,1) 100%)', width:1000, height: 550,
    borderRadius: 400, marginTop: 20, color:'green', marginLeft: 100, paddingTop:30, marginTop: 60}}>
        <img style={{marginTop:30, borderRadius: 20, height: 320, width:320, marginLeft: 350}}className='pop-img'alt="popcorn" src={popcorn}/>
        <h1 style={{display:'flex', flexDirection: 'column', xmarginBottom: 100, textAlign:'center', fontFamily: 'Comfortaa' }}>It all starts with the best popcorn seeds</h1>
        <h3 style={{textAlign:'center', fontFamily:'Comfortaa'}}> We serve Popcorn and Italian Ice</h3>
        <Link to="/Popcorn" style={{

/* CSS */

  backgroundColor: '#c2fbd7',
  borderRadius: 100,
  boxShadow: 'rgba(44, 187, 99, .2) 0 -25 18 -14 inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px',
  color: 'green',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: 'CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif',
  padding: '7px 20px',
  textAlign: 'center',
  textDecoration:'none',
  transition: 'all 250ms',
  border: 0,
  fontSize: 16,
  userSelect: 'none',
  webkitUserSelect: 'none',
  touchAction: 'manipulation',



  boxShadow: 'rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px',
  
  marginLeft: 400
}}>Welcome Click to Shop</Link>
        </div>
  )
}
