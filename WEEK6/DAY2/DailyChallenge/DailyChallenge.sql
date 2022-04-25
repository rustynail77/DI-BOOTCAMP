-- -- Database: DailyChallenge

-- -- DROP DATABASE IF EXISTS "DailyChallenge";

-- CREATE DATABASE "DailyChallenge"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- );

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar');

-- SELECT * FROM FirstTab;

-- CREATE TABLE SecondTab (
--     id integer 
-- );

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL);


-- SELECT * FROM SecondTab;

-- Q1. What will be the OUTPUT of the following statement? ANSWER: it should count the records which id isn't null - should be 3. but the actual answer is 0. I don't understand why.
-- SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL);


-- Q2. What will be the OUTPUT of the following statement? ANSWER: it should count the records which id isn't 5 or null, so it will give 2
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );


-- Q3. What will be the OUTPUT of the following statement? ANSWER: it should count records which id does not exist in SecondTab - so should be 2. but the actual answer is 0.
-- I don't understand why.
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );

-- Q4. What will be the OUTPUT of the following statement? ANSWER: it should count the records which id isn't 5 and it won't count the null, so it will give 2
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL ); 