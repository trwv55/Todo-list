import React from "react";
import './input.css';
import Button from "../button/button";

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        }
    }

    addTask = () => {
        const { inputValue } = this.state;

        if(inputValue) {
            this.props.addTask(inputValue);
            this.setState({ inputValue: '' })
        }
    }

    onChangeInput = event => {
        this.setState({
            inputValue: event.target.value
        });
    }

    // handleEnter = event => {
    //     if(event.key === 'Eneter') this.addTask();
    // }

    render() {
        const { inputValue } = this.state;

        return (
            <div className='input-wrapper'>
                <input
                    className='input'
                    type='text'
                    placeholder='Add a task'
                    value={inputValue}
                    // onKeyPress={this.handleEnter}
                    onChange={this.onChangeInput}
                />
                <Button
                    customClass='button-input'
                    name=''
                    onClick={this.addTask}
                />
            </div>


        )
    }
}

export default Input;