import React, { Component } from 'react';

export class TodoCreator extends Component { // button

	constructor(props) {
		super(props);
		this.state = { newItemText: "" } // изначально ничего нет

	}

	updateNewTextValue = (event) => {
		this.setState({ newItemText: event.target.value});
	}

	createNewTodo = () => {
		this.props.callback(this.state.newItemText);
		this.setState({ newItemText: ""});
	}

	render = () =>
		<div className="my-1">
			<input className="form-control" value={ this.state.newItemText } onChange={ this.updateNewTextValue } />
			<button className="btn btn-primary mt-1" onClick={ this.createNewTodo }>Add</button>
		</div>

}