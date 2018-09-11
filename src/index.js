import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { DrumPad } from './drumPad.js';


class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="drum-machine">
				<h1 id="header">Drum Machine</h1>				
				<DrumPad />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
