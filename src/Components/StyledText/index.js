import React, { useEffect } from 'react';

function StyledText(props) {
  // this phrase shows on the browser console every time you change in the input field or change the color
  useEffect(() => {
    console.log('USE EFFECT CALLED');
  // by adding in [props.color], it calls useEffect only when the color changes  
  }, [props.color])

  const style = {
    color: props.color
  }

  return (
    <div className="styled-text">
      <p style={style}>{props.text}</p>
    </div>
  )
}

export default StyledText;