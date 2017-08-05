import React from 'react'

const DisplayMsg = ({ message }) =>
  <center>
    {message || 'Not Found'}
  </center>

export default DisplayMsg
