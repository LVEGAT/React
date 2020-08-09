import React from 'react';

export default class Button extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }


    render() {
        return (
            <button style={{ borderColor: this.props.borderColor, display: 'block' }}>
                {this.props.label}
            </button>
        )
    }
}

Button.defaultProps= {
    borderColor : '#09f'
}



