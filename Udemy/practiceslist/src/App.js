import React from 'react';
import './App.css';
import cars from './data/cars.json'

class CarItem extends React.Component{
    render(){
    const {car, id} = this.props;
    return(
      <li>
        <p>key: {id} </p>
        <p><strong>name</strong> {car.name}</p>
        <p><strong>company</strong> {car.company}</p>
      </li>
    )
  }
}


class App extends React.Component {
  render(){
    const numbers = [1,1,3,4,5]
    return (
      <div className="App">
        <h4>Trabajando con Listas</h4>
        <ul>
        {
          cars.map(car => {
             
                return <CarItem id ={car.id} key={car.id} car={car}/>
           })
        }
        </ul>
      </div>
    );
  }
}

export default App;
