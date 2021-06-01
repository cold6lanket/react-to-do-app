/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const {text} = this.state;

        if (text.length === 0) return;

        this.props.onAdd(text);
        this.setState({
            text: ''
        });
    }
    
    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <input 
                    type="text"
                    placeholder="What do you want to do?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button 
                    className="btn btn-outline-secondary"
                    type="submit"
                >
                Add ToDo</button>
            </form>
        )
    }

}

