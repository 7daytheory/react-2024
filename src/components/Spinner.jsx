import { ClipLoader } from 'react-spinners'
import React from 'react'

const Spinner = () => {
  const override = {
    display: 'block',
    margin: '100px auto'
  }
  return (
    <ClipLoader 
        color='red'
        loading={loading}
        cssOverride={override}
        size={150}
    />
  )
}

export default Spinner