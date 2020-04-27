import React from 'react';

export default class Forms extends React.Component{
    constructor(){
        super();
        this.state = {
            inputName : '',
            inputTwitter : '@',
            inputTearms : true
        }

    }

    handleSummit = (e) => {
        e.preventDefault();
        /*const name = this.inputName.value;
        const twitter = document.getElementById('twitter').value;
        console.log({name,twitter})*/
        console.log(this.state);
    }

    handleChange = (e) => {
        console.log(e.target.checked);
        this.setState({inputTearms : e.target.checked})
    }

    render(){
       
        return (
            <div>
            <h4>Forms</h4>
            <form onSubmit={this.handleSummit}>
                <p>
                <label htmlFor='name'>User: </label>
                <input
                    id= 'name'
                    name='userName'
                    onChange = {e=> this.setState({inputName : e.target.value})}
                    placeholder='type user name'
                    ref ={inputElement => this.inputName = inputElement}
                    value = {this.state.inputName}
                    />
                </p>
                <p>
                <label>Twitter: </label>
                <input
                    id= 'twitter'
                    name='TwitterAccount'
                    onChange = {e=> this.setState({inputTwitter : e.target.value})}
                    placeholder='Type Twitter Account'
                    value = {this.state.inputTwitter}
                    />
                </p>
                <p>
                    <label>
                        <input
                        checked = {this.state.inputTearms} 
                        onChange={this.handleChange}
                        type = 'checkbox' 
                        />
                        Accept Tearms
                        
                    </label>
                </p>
                <button /*onClick={this.handleClick}*/ >Send</button>
            </form>
            </div>
        )
    }
}