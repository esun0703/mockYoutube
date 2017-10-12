//errors encountered
// React is not defined
	// This means you need to import React
// React is deprecated. use ReactDOM
	// Means you need to import ReactDOM from 'react-dom' as well
// Uncaught Error: ReactDOM.render(): Invalid component element. Instead of passing a component class, make sure to instantiate it by passing it to React.createElement.
	// This means that I'm passing a class and not an instance. I must pass a instance instead.
	// This is actually really easy. 
	// ReactDOM.render(<App/>);
// Target container is not a DOM element.