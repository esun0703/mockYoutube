import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyA_kxxNpnW_FWTVp-L99yMrg9qdAh2IRn0';


// Create a new component. This component should produce some HTML
const App = () => {
	// same way of writing a function (ES6), except term 'this' is a little different
	return (
		<div>
			<SearchBar />
		</div>);
};




// Take compoent's generated HTML and put it on the DOM
// ReactDOM.render(<componentInstance/>, targetContainer);
ReactDOM.render(<App/>, document.querySelector('.container'));
// React.render(App);




