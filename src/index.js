import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyA_kxxNpnW_FWTVp-L99yMrg9qdAh2IRn0';



// Functional component. can contain class component
// Create a new component. This component should produce some HTML
	// const App = () => {
	// 	// same way of writing a function (ES6), except term 'this' is a little different
	// 	return (
	// 		<div>
	// 			<SearchBar />
	// 		</div>);
	// };
class App extends Component {
	constructor(props){
		super(props);
		// keys can be named anything, but should make sense. so we're calling it videos. 
		// It comes back as an array from data so we want to set it up as an array.
		this.state = {videos:[]};

		YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
			// callback function to update this.state.
			// this.setState({videos: videos});
			// since they the key and the value are named the same you can write it the way below. (ES6)
			this.setState({ videos });
		});
	}

	render(){
		return (
			<div>
				<SearchBar/>
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}




// Take compoent's generated HTML and put it on the DOM
// ReactDOM.render(<componentInstance/>, targetContainer);
ReactDOM.render(<App/>, document.querySelector('.container'));
// React.render(App);




