import React, { Component } from 'react';


class InputField extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleChangeText(event) {
        console.log(event.target.value);
        this.setState(state => ({
            value : event.target.value,
        }))
    }
    
    render() {
        return(
            <div className="InputField">
                <h2>Binding value</h2>
                <p id="binding-block">Hello, {this.state.value}</p>
                <input onChange={this.handleChangeText} id="typing-area" type="text" placeholder="Nhap ten cua ban" />
            </div>
        );
    }
}

export default InputField;