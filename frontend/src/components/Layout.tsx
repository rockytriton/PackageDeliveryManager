import * as React from 'react';

import Toolbar from './Toolbar'

export default class Layout extends React.Component<any, any> {
  render() {
	  return <div> 
						<Toolbar />
						<main>
							{this.props.children}
						</main>	
					</div>;
  }
}
