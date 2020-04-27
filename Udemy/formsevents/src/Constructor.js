import React from 'react';

export default class Constructor extends React.Component{
    constructor(props){
        super(props);
            this.state = {mensajeInicial: 'mensje inicial' 
        }
    }

    handleClick(){
        this.state.mensajeInicial = 'new intinial message';
    }

    render () {
      return(
        <div className="App">
            <h4>Ciclo de montaje: constructor</h4>
            {this.state.mensajeInicial}
            <button onClick={this.handleClick}>
                cambiar mensaje
            </button>
        </div>
    );
  }
}