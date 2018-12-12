import * as React from 'react';

import axios from 'axios';

export default class Drones extends React.Component<any, any> {
	componentDidMount() {
		console.log('did mountx');
		axios.get('http://localhost:3000/api/drones').then(
			response => {
				console.log('resp: ', response);
			}
		);
	}

  render() {
	  return <div> 
						<h1>Edit Drones</h1>
					</div>;
  }
}
