
import React from 'react';
class Form extends React.Component{
 render(){
  return(
    <form onSubmit = {this.props.loadWeather}>
      <input type="text" name="city" placeholder="Ciudad"/>
      <button>Ver Clima</button>
    </form>
   )
 }
}
export default Form;