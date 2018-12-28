import React, { Component } from 'react';
import Board from '../../components/Board/Board';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Board>
					<div className="cell"></div>
				</Board>


			</div>
		);
	}
}

export default App;
