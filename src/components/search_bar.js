// means pull React, then pull off property called Component and save that as a variable called Component
import React, { Component } from 'react';

class SearchBar extends Component {
	// This is where you define or intialize state
	constructor(props){
		// since class EXTENDS react's component, which has it's own constructor method, calling parent class by calling super.
		super(props);
		// saves properties we want to save.
		// only in constructor function do we change state in this format
		this.state = { term: ''};
	}
	// must need a render method for class-based
	render() {
		// onNameOfEvent = {this.eventHandler}
		// onChange is predefined, passed into event property in onInputChange;
		// single argument don't need paretheses around event
		// setting state of term.
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={event => this.setState({term: event.target.value})}
				/>			
			</div>	
		);
		
	}

	// event handler...how you want to name your event handler.
	// on...Element You're applying event to...your event you're listening for
	
}

// Needs event handler.
// Attach event handler to element
export default SearchBar; 

 // Pass into event (see in input element);
	/*onInputChange(event) {
	 	// code you want to run.
		// console.log(event);
		console.log(event.target.value);
	}*/
/*
				displaying what the term is
				referencing the term in the state.
				<p>Value Of The Input: {this.state.term}</p>
			*/

