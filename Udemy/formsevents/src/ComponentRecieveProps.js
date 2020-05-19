import React,  {Component, PureComponent} from 'react';
import PropTypes from 'prop-types'

const ANIMALS_CONST ={
    panda: 'https://www.nationalgeographic.com.es/medio/2018/02/27/panda__1280x720.jpg',
    cat : 'https://ichef.bbci.co.uk/news/320/cpsprodpb/AAE7/production/_111515734_gettyimages-1208779325.jpg',
    dolphin: 'https://images.unsplash.com/photo-1502894079506-97b0e4959603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
}

const ANIMALS = Object.keys(ANIMALS_CONST)

class AnimalImage extends React.PureComponent{
    state = {src: ANIMALS_CONST[this.props.animal]}

    componentWillReceiveProps(nextProps){
        console.clear();
        this.setState({src : ANIMALS_CONST[nextProps.animal] })
        console.log("1-Component Will Recieve Props");
        console.log(nextProps);
    }
   
    shouldComponentUpdate(nextProps){
        console.log("2-Should Component Update")
        console.log(this.props.animal);
        console.log(nextProps);
        return this.props.animal !== nextProps.animal ;
    }

    componentWillUpdate(nextProps, nextState)
    {
        console.log("3. component will updated")
        const img = document.querySelector('img');
        console.log(img);
        img.animate([{
        filter : 'blur(0px)'
        },
        {
        filter : 'blur(2px)'
        },
        {
        duration: 500,
        easing: 'ease'
        }
    ])
    }

    render(){
        console.log('Render->')
        return(
            <div>
                <p>Selected Image {this.props.animal}</p>
                <img
                    alt = {this.props.animal}
                    src = {this.state.src}
                    width = '250'
                    
                />
               <h1>{this.state.src}</h1>
            </div>
        )
    }
}


AnimalImage.propTypes ={
    animal: PropTypes.oneOf(['cat', 'dolphin', 'panda'])
}


export default class ComponentReceiveProps extends React.Component{
    state = { animal : 'panda'}

    _renderButton = (animal) =>{
        return(
            <button
            //disabled ={animal === this.state.animal} 
            key={animal} 
            onClick = {() => this.setState({animal})}> 
            {animal}
            </button>
        )
    }

    render(){
        return(
            <div> 
                <h1>Ciclo de actualizacion</h1>
                {ANIMALS.map(this._renderButton)}
                <AnimalImage animal ={this.state.animal}/>
            </div>
            
        )
    }
}