-- CREATE TABLE properties (
-- 	p_id SERIAL PRIMARY KEY,
-- 	country varchar NOT NULL,
-- 	city varchar NOT NULL,
-- 	street varchar NOT NULL,
-- 	house_num varchar NOT NULL,
-- 	zipcode varchar,
-- 	floor_num varchar NOT NULL,
-- 	apt_num varchar NOT NULL,
-- 	apt_size INT,
-- 	plot_size INT,
-- 	bedrooms INT,
-- 	active boolean NOT NULL,
-- 	notes text
-- )

-- CREATE TABLE owners (
-- 	o_id SERIAL PRIMARY KEY,
-- 	personal_id varchar,
-- 	fname VARCHAR NOT NULL,
-- 	lname VARCHAR,
-- 	dob DATE,
-- 	phone_num VARCHAR,
-- 	email VARCHAR,
-- 	active boolean NOT NULL,
-- 	notes text
-- )

-- CREATE TABLE property_ownership (
-- 	relation_id SERIAL PRIMARY KEY,
-- 	prop_id int REFERENCES properties(p_id) ON UPDATE CASCADE,
-- 	owner_id int REFERENCES owners(o_id) ON UPDATE CASCADE
-- )

-- CREATE TABLE transactions (
-- 	t_id SERIAL PRIMARY KEY,
-- 	t_date date NOT NULL,
-- 	prop_id int REFERENCES properties(p_id) NOT NULL,
-- 	debit_credit int NOT NULL,
-- 	trans_type varchar NOT NULL,
-- 	payment_method varchar NOT NULL,
-- 	amount int NOT NULL,
-- 	active boolean NOT NULL DEFAULT true,
-- 	trans_reference VARCHAR,
-- 	notes text
-- )

select * from properties

-- insert into properties (country,city,street,house_num,zipcode,floor_num, apt_num,apt_size,plot_size,bedrooms,active,notes)
-- values('Hungary','Budapest', 'Liszt Ferenc ter', '4', '1061',3,2,86,0,3,true,'none');
-- insert into properties (country,city,street,house_num,zipcode,floor_num, apt_num,apt_size,plot_size,bedrooms,active,notes)
-- values('Hungary','Budapest', 'Hunyadi ter', '9', '1067',0,1,25,0,1,true,'none');

-- select * from owners
-- insert into owners (personal_id,fname,lname,dob,phone_num,email,active,notes)
-- values ('000000001', 'John', 'Doe', '1980-11-10', '050-6607700', 'jd0000@gmail.com', true, 'investor'),
-- ('000000002', 'Jane', 'Dodo', '1962-10-09', '050-6607755', 'jdo0005@gmail.com', true, 'none');

-- alter table properties add img_src text;

-- update properties set img_src='http://rustynail77.com/budapest-apartments/images/lft4.jpg' where p_id=1;
-- update properties set img_src='http://rustynail77.com/budapest-apartments/images/ht09.jpg' where p_id=2;