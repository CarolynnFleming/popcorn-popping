import React from 'react'
import EmailContactForm from './EmailContactForm'

export default function Contact() {
  return (
    <div style={{ fontFamily:'Comfortaa', color:'green', textAlign: 'center'}}>
      <h1 style={{paddingTop: '90px', flexDirection: 'column'}}>You can reach us at</h1>
      <h4 style={{paddingTop: '50px'}}>EMAIL:</h4>
      <h2>Admin@whatspoppingpopcorn.com</h2>
      <h4 style={{paddingTop: '50px'}}>PHONE NUMBER:</h4>
      <h2>708-897-9757</h2>
      <h4 style={{paddingTop: '50px'}}>LOCATION:</h4>
      <h2> 11517 S. Pulaski Rd, Alsip, IL 60803</h2>
      <EmailContactForm/>
      </div>
  )
}

