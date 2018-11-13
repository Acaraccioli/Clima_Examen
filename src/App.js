import React from 'react';
import Titles from './Titles';
import Form from './Form';
import Weather from './Weather';
import { fetchLocationId } from './api_requests';
import { fetchWeather } from './api_requests';





class App extends React.Component{





  state = {
    temperatura: undefined,
    ciudad: undefined,
    clima: undefined,
    error: undefined
  }

  extraerClima = async (e) => {
    this.setState({
      temperatura: response.the_temp,
      ciudad: response.title,
      clima: response.weather_state_name,
   
      error: ""
    })

    e.preventDefault();

    const city = e.target.elements.city.value;
    console.log(city);
    const ciudad = await fetch(  `https://www.metaweather.com/api/location/search/?query=${city}`,);    
    const response = await fetch(`https://www.metaweather.com/api/location/${ciudad}/`, );
    console.log(response);
    const { title, consolidated_weather } = await response.json();
    const { weather_state_name, the_temp } = consolidated_weather[0];


  }


 
  render(){     
    return(



      
      <div>
        <Titles />
        <Form cargarClima={this.extraerClima} />
        <Weather
          temperatura={this.state.temperatura}
          ciudad={this.state.city}
          clima={this.state.humidity}
          error={this.state.error} />
      </div>
   )
  }



  

}





export default App;