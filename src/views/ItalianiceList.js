import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Itallian from '../assets/iice.jpeg'

export default function ItalianiceList() {
 
  return (
  
    <Box
    style={{ marginLeft: 200, marginTop:40 }}
      sx={{
        width: 1000,
        height: 600,
        backgroundColor: 'primary.main',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <img src={Itallian}/>
      <label>
      Choose A Flavor:
      marty
      dave
      <select name="flavor">
        <option value="1">Lemon</option>
        <option value="2">Lime</option>
        <option value="3">Grape</option>
        <option value="4">Mango</option>
        <option value="5">Cherry</option>
        <option value="6">Orange</option>
        <option value="7">Strawberry</option>
        <option value="8">Watermelon</option>
        <option value="9">Blue Rasberry</option>
        <option value="10">Kiwi Strawberry</option>
        <option value="11">Berry Rasberry</option>
        <option value="12">Sour Apple</option>
       
      </select>
      </label>
    </Box>
  );
}

