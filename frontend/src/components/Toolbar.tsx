import * as React from 'react';

export default class Toolbar extends React.Component<any, any> {
  render() {
	  return <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">Drone Delivery Manager</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="btn btn-outline-primary ml-4" href="#">Packages</a>
                    <a className="btn btn-outline-primary ml-4" href="#">Drones</a>
                    <a className="btn btn-outline-primary ml-4" href="#">Drone Types</a>
                </nav>
            </div>;
  }
}
