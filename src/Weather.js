import React from 'react';
const Weather = (props) => {
  return(
    <div>
      { props.city && <p>ciudad: {props.city}</p>}
      {props.description && <p>clima:  {props.description}</p>}
      {props.temperatura && <p>temperatura: {props.temperatura}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  )
}
export default Weather;

