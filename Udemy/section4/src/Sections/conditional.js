import React, {Component} from 'react'

class LoginButton extends Component{
    render(){
        return <button>Iniciar Sesion</button>
    }
}

class LogoutButton extends Component{
    render(){
        return (
            <div>
                <p>Bienvenido Usuario</p>
                <button>Cerrar Sesion</button>
            </div>
        )
    }
}

/*
function useConditionalRendering (mostrarA){
    //console.log("useCoditionalRender Function");
    if(mostrarA){
        return <ComponentA/>
    }
    return <ComponentB/>
}*/

export default class ConditionalSection extends React.Component{
    constructor(){
        super()
        this.state = {isUserLogged: false}
      }
    render(){
        /*const conditionalComponent = this.state.mostrarA 
        ? <ComponentA/>
        : <ComponentB/>*/
        
        return (
            <div>
                <h4>Condional Rendering</h4>
                {/*useConditionalRendering(this.state.mostrarA)*/
                 this.state.isUserLogged 
                 ? <LogoutButton/>
                 : <LoginButton/>
                }
            </div>
        );
    }
}