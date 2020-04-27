import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Forms from './forms';
//import Article from './box';
//import Constructor from './Constructor';
//import ComponentDidMount from './ExampleDidMount'
//import FechExample from './Fech';
import ComponentRecieveProps from './ComponentRecieveProps'

class App extends React.Component {

  constructor(){
    super()
    this.state = {mouseX : 0, mouseY:0}
   // this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handlerClick (e)  {
    alert('d');
    console.log(e);
    console.log(e.nativeEvent)
  }

  handleMouseMove = (e) =>{
    const {clientX, clientY} = e
    this.setState({mouseX: clientX, mouseY:clientY})
  }

  render() {
      return (
     /* <div className="App">
      <h4>Events</h4>
      <button onClick={this.handlerClick}>Click Me</button>
      <div
        onMouseMove ={this.handleMouseMove}
         style = {{border: '1px solid #000', marginTop: 10, padding: 10}}>
         <p>{this.state.mouseX},{this.state.mouseY}</p>
      
      </div>
      </div>*/
      /*<Forms/>*/
      /*
      <div className="App"> 
      <h4>Children Props</h4>
      <Article
      author = {true}
      date = {new Date().toLocaleDateString()}
      title = 'Articulo 1 sobre propiedades children'
      >
          <p>El contenido del articulo sera envuelto this.props.children</p>
          <strong>Y Mantiene las etiquetas que hayas anadido</strong>
      </Article>
      <Article
     
      date = {new Date().toLocaleDateString()}
      title = 'Articulo 2 sobre propiedades children'
      >
          <p>El contenido del articulo sera envuelto this.props.children</p>
          <strong>Y Mantiene las etiquetas que hayas anadido</strong>
      </Article>
      </div>*/

      // <div>
      //   <ComponentDidMount ></ComponentDidMount>
      // </div>
      <div>
        <ComponentRecieveProps/>
      </div>
    );
  }
}

export default App;
