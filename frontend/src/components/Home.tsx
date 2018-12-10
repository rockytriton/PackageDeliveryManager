import * as React from 'react';

export default class Home extends React.Component<any, any> {
  render() {
	  return <div>
              <div className="home-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Drone Delivery Manager</h1>
                <p className="lead">This is a sample application for React + Typescript.  
                    You will manage a drone delivery operation, where packages can be delivered using drones.
                </p>
              </div>
              
              <div className="container">
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 shadow-sm">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Packages</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title home-card-title">Packages to be delivered</h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>View Packages</li>
                        <li>Add Packages</li>
                        <li>Track Packages</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block btn-outline-primary">Manage Packages</button>
                    </div>
                    </div>
                    <div className="card mb-4 shadow-sm">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Drones</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title home-card-title">Drones that deliver packages</h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>View Drones</li>
                        <li>Add/Remove Drones</li>
                        <li>Track Drones</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block btn-outline-primary">Manage Drones</button>
                    </div>
                    </div>
                    <div className="card mb-4 shadow-sm">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Drone Types</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title home-card-title">Drone models in the system</h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>View Drone Types</li>
                        <li>Add Drone Types</li>
                        <li>Remove Drone Types</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block btn-outline-primary">Manage Drone Types</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>;
  }
}
