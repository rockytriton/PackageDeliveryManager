import * as React from 'react';

import axios from 'axios';
import DroneType from '../model/droneType';
import Drone from '../model/drone';

import {confirmAlert} from 'react-confirm-alert';

export default class Drones extends React.Component<any, any> {
	droneTypes = new Map<number, string>();
	
	constructor(props : any) {
		super(props);
		this.state = {
			droneList: [],
			droneTypes: []
		};
	}

	componentDidMount() {
		var me = this;

		axios.get('http://localhost:3000/api/droneTypes').then(
			response => {
				console.log('resp1: ', response);

				for (var obj of response.data as Array<DroneType>) {
					this.droneTypes.set(obj.id, obj.name);
				}
				
				this.mergeDroneTypes();
			}, resp => {
				console.log('rejected', resp);
			}
		);

		this.reload();
	}

	reload() {
		axios.get('http://localhost:3000/api/drones').then(
			response => {
				console.log('resp2: ', response);
				var newState = {...this.state};
				newState.droneList = response.data;
				this.setState(newState);
				
				this.mergeDroneTypes();
			}
		);
	}

	mergeDroneTypes() {
		if (this.state.droneList.length > 0 && this.droneTypes.size > 0) {
			for (var drone of this.state.droneList) {
				drone.typeName = this.droneTypes.get(drone.fk_type_id);
			}

			this.setState(this.state);
		}
	}

	editDrone(id : number) {

	}

	deleteDrone(id : number) {
		console.log('deleting', id);

		confirmAlert({
			title: 'Delete Drone',
			message: 'Delete this drone?',
			buttons:[
				{
					label: 'Yes',
					onClick: () => {
						axios.delete('http://localhost:3000/api/drones/' + id).then(
							response => {
								this.reload();
						});
					}
				}, {
					label: 'No',
					onClick: () => {

					}
				}
			]
		});
	}

	iterateItems() {
		var rows = [];

		for (var drone of this.state.droneList as Array<Drone>) {
			rows.push(
			<tr>
				<td scope="row">{drone['id']}</td>
				<td scope="row">{drone['typeName']}</td>
				<td scope="row">{drone['location_lat']} / {drone['location_lon']}</td>
				<td scope="row">{drone['weight']}</td>
				<td scope="row">{drone['status']}</td>
				<td scope="row">
					<button onClick={() => this.editDrone(drone.id)}>Edit</button>
					<button onClick={() => this.deleteDrone(drone.id)}>Delete</button>
				</td>
			</tr>
			);
		}
		return rows;
	}

  	render() {
	  return <div> 
				<h1>Edit Drones</h1>
				<table className="table table-hover">
				<thead className="thead-light">
					<tr>
						<td scope="col">ID</td>
						<td scope="col">Model</td>
						<td scope="col">Location</td>
						<td scope="col">Weight</td>
						<td scope="col">Status</td>
						<td scope="col">Actions</td>
					</tr>
				</thead>
				<tbody>
					{this.iterateItems()}
				</tbody>
				</table>
			</div>;
  	}
}
