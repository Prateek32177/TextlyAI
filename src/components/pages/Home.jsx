import React from 'react'
import Header from '../Header'
import Benefit from '../Benefit'
import "../../App.css"

function Home() {
const iconStyle={
  width:"25px",
  height:"25px",
  filter: 'drop-shadow(2px 4px 6px black)',
  padding:"8px"
}

  return (
    <>
    <Header/>
    <Benefit/>

    </>
  )
}

export default Home