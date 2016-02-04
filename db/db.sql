-- table for parks

CREATE TABLE IF NOT EXISTS parks (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(500),
	park_type VARCHAR(500),
	contact_number VARCHAR(50),
	office_hours tsrange,
	contact_street_address VARCHAR(500),
	contact_county VARCHAR(200),
	contact_state VARCHAR(50),
	gps_lat SMALLINT,
	gps_lon SMALLINT,
	activities text,
	parking boolean,
	dog_friendly_hiking boolean,
	dog_friendly_camping boolean,
	deleted boolean DEFAULT false,
	last_modified TIMESTAMP
);

-- table for trails
CREATE TABLE IF NOT EXISTS trails (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(500),
	trail_color VARCHAR(50),
	trail_blaze VARCHAR(50),
	long_distance boolean DEFAULT false,
	park_id INTEGER REFERENCES parks(id),
	deleted boolean DEFAULT false,
	last_modified TIMESTAMP
);

-- table for hikes

CREATE TABLE IF NOT EXISTS hikes (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(500),
	description text,
	length_in_miles INTEGER,
	shape VARCHAR(50),
	time_estimate INTEGER,
	elevation_increase INTEGER,
	elevation_decrease INTEGER,
	terrain_grade SMALLINT,
	difficulty SMALLINT,
	number_of_features SMALLINT,
	guided_hike_available boolean,
	trailhead_location text,
	parking_location text,
	calories SMALLINT,
	popularity_score INTEGER,
	pets_allowed boolean,
	park_id INTEGER REFERENCES parks(id),
	trail_id INTEGER REFERENCES trails(id),
	deleted boolean DEFAULT false,
	last_modified TIMESTAMP
);

-- table for users/phone numbers 
CREATE TABLE IF NOT EXISTS users (
	id BIGSERIAL PRIMARY KEY,
	phone_number VARCHAR(100),
	activated boolean DEFAULT false,
	deleted boolean DEFAULT false
);

-- table for admin
CREATE TABLE IF NOT EXISTS admin (
	id BIGSERIAL PRIMARY KEY,
	username VARCHAR(100),
	password VARCHAR(100),
	salt VARCHAR(100),
	deleted boolean DEFAULT false
);

-- table for recommendations 
CREATE TABLE IF NOT EXISTS recommendations (
	id BIGSERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(id),
	hike_id INTEGER REFERENCES hikes(id),
	times_sent INTEGER,
	times_completed INTEGER,
	last_sent TIMESTAMP,
	deleted boolean DEFAULT false
);
