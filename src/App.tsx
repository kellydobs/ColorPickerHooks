import React from 'react'
import { useState } from 'react'
import { ColorPicker } from './components/ColorPicker'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div>
      <p>Display Color</p>
      <ColorPicker />
    </div>
  )
}
export default App
