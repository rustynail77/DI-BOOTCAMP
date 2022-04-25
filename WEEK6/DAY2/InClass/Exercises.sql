-- Database: Exercises_In_Class

-- DROP DATABASE IF EXISTS "Exercises_In_Class";

-- CREATE DATABASE "Exercises_In_Class"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- -- Use aggregate functions
-- 1. What is the average dust index in the city of Boston between 01/03/2015 and 05/03/2015?
SELECT ROUND(AVG(dust),2) AS average_dust FROM city_info 
WHERE city='Boston' AND event_datetime BETWEEN '2015-03-01' AND '2015-03-05';

-- 2. How many rows does the table have about the city "San Francisco" ?
SELECT COUNT(*) FROM city_info WHERE city = 'San Francisco';

-- 3. Where and when (only hour) it's the noisiest in the world?.
SELECT city, EXTRACT(HOUR from event_datetime) FROM city_info
WHERE sound=(SELECT MAX(sound) FROM city_info);

-- 4. How many rows per city does the table have (display the name of the city)? 
SELECT city, COUNT(city) FROM city_info GROUP BY city;