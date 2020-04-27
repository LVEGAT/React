import React from 'react';
import PropTypes from 'prop-types'

const animals ={
    cat : 'https://drive.google.com/open?id=10qSFhKgq2VC5w1Zl2m8s98klMgNoaxzT',
    dolphin: 'https://drive.google.com/open?id=1YKOmL4LxHKpqeiBbotAtq4Fzx4JFhihI',
    panda: 'https://drive.google.com/open?id=1o2A1DTLtRUR_X7itviceoPdIuLSO0Vf3'
}

class AnimalImage extends React.Component{
    state = {src: animals[this.props.animal]}
   
    render(){
        return(
            <div>
                <p>Selected Image</p>
                <img
                    alt = {this.props.animal}
                    src = {this.state.src}
                    width = '252'
                />
            </div>
        )
    }
}


AnimalImage.propTypes ={
    animal: PropTypes.oneOf(['cat', 'dolphin', 'panda'])
}

AnimalImage.defaultProps = {
    animal:'panda'
}

export default class ComponentReceiveProps extends React.Component{
   
    render(){
        return(
            <div> 
                <h1>Hola</h1>
                <AnimalImage/>
            </div>
        )
    }
}