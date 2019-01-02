create table Drone(
	id serial,
	fk_type_id integer,
	location_lat float,
	location_lon float,
	weight integer,
	status integer
);

create table DroneType(
	id serial,
	name text,
	manufacturer text,
	max_weight integer,
	max_packages integer
);

create table Package(
	id serial,
	tracking text,
	weight integer,
	destination_lat float,
	destination_lon float,
	status integer,
	fk_drone_id integer
);

