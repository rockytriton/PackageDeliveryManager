import * as React from 'react';

export default class Toolbar extends React.Component<any, any> { 
    render() {
        return <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">Drone Delivery Manager</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/packages">Packages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/drones">Drones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/drone-types">Drone Types</a>
            </li>
          </ul>
        </div>
      </nav>;
    }
}

export class Toolbar2 extends React.Component<any, any> {
  render() {
	  return <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">Drone Delivery Manager</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="btn btn-outline-primary ml-4" href="/">Packages</a>
                    <a className="btn btn-outline-primary ml-4" href="/drones">Drones</a>
                    <a className="btn btn-outline-primary ml-4" href="#">Drone Types</a>
                </nav>
            </div>;
  }
}
