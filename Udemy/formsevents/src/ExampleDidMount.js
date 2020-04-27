import React from 'react';


class ComponentDidMount extends React.Component{
 
    constructor(props){
        console.log('constructor')
        super(props)
        this.state ={}
    }

    componentWillMount (){
        console.log('componentWillMount')
    }

    
    componentDidUpdate (){
        console.log('componentDidMount')
    }

    render(){
        console.log('Render')
        return(
            <div>
                <h1>Ciclo de vidad</h1>
                <p>this component is using </p>
            </div>
        )
    }
}
export default ComponentDidMount