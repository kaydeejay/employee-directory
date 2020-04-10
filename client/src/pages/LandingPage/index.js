import React, { useState, useEffect } from 'react'
import API from '../../utils/API';

export const CallBox = () => {
  const [box, setBox] = useState();

  useEffect(() => {
    API.searchTerms()
      .then(res => {
        setBox(res);
      });
  })

  return (
    <div>
      {box}
    </div>
  )
}

export default CallBox;