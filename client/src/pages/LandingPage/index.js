import React, { useState, useEffect } from 'react'
import API from '../../utils/API';
import Container from '../../components/Container';

export const CallBox = () => {
  const [box, setBox] = useState();

  useEffect(() => {
    API.findAll()
      .then(res => {
        setBox(res);
      });
  })

  return (
    <div>
      <Container />
      {box}
    </div>
  )
}

export default CallBox;