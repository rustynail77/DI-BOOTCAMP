-- Exercise 1: DVD Rental
-- 1. Get a list of all film languages.
SELECT name FROM language;

-- 2. Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
SELECT title, description, name FROM film INNER JOIN language ON film.language_id=language.language_id;
-- 		a. Get all films, even if they don’t have languages.
SELECT title, description, name FROM film LEFT JOIN language ON film.language_id=language.language_id;
-- 		b. Get all languages, even if there are no films in those languages.
SELECT title, description, name FROM film RIGHT JOIN language ON film.language_id=language.language_id;

-- 3. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film
(
	id SERIAL,
	name VARCHAR(30)
);
-- ALTER TABLE new_film ADD CONSTRAINT id PRIMARY KEY (id);
INSERT INTO new_film(name) VALUES 
	('Fight Club'),
	('The Matrix'),
	('Back to the Future');
SELECT * FROM new_film;
-- 4. Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- It should have the following columns:
-- 		review_id – a primary key, non null, auto-increment.
-- 		film_id – references the new_film table. The film that is being reviewed.
-- 		language_id – references the language table. What language the review is in.
-- 		title – the title of the review.
-- 		score – the rating of the review (1-10).
-- 		review_text – the text of the review. No limit on the length.
-- 		last_update – when the review was last updated.
CREATE TABLE customer_review (
	review_id SERIAL PRIMARY KEY,
	film_id SMALLINT REFERENCES new_film(id) ON DELETE CASCADE,
	language_id SMALLINT REFERENCES language(language_id),
	title VARCHAR(50),
	score SMALLINT,
	review_text TEXT,
	last_update DATE
);
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review(film_id,language_id,title,score,review_text,last_update) VALUES 
	(1, 1, 'My review of Fight Club', 9, 'Yeah its a great movie bla bla bla', CURRENT_TIMESTAMP),
	(2, 1, 'My review of The Matrix', 9, 'Yeah its a great movie bla bla bla', CURRENT_TIMESTAMP)
RETURNING *;
	
-- Delete a film that has a review from the new_film table, what happens to the customer_review table? ANSWER: The record of review is also deleted
DELETE FROM new_film WHERE id=1;

-- Exercise 2 : DVD Rental
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film SET language_id=3 WHERE film_id IN (1,3);

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- address_id and store_id are foreign keys. we must insert values that match existing values in the address table and the store table

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking? ANSWER: No other table depends on it, so it's pretty easy
DROP TABLE customer_review;

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet). ANSWER: 183
SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT title, rental_rate FROM film 
JOIN inventory ON film.film_id=inventory.film_id
JOIN rental ON rental.inventory_id=inventory.inventory_id
WHERE rental.return_date is null 
ORDER BY film.rental_rate DESC LIMIT 30;

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title, description FROM film WHERE description ILIKE '%sumo wrestler%' AND film_id IN 
(SELECT film_id FROM film_actor WHERE actor_id = (SELECT actor_id FROM actor WHERE first_name='Penelope' AND last_name='Monroe'));

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT * FROM film WHERE rating='R' AND length < 60 
AND film_id IN (SELECT film_id FROM film_category WHERE category_id=(SELECT category_id FROM category WHERE name='Documentary'));

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT title from film WHERE film_id = (SELECT film_id FROM inventory WHERE inventory_id=(SELECT inventory_id FROM rental WHERE rental_id IN
(SELECT rental_id FROM payment WHERE amount > 4.0 AND customer_id=(SELECT customer_id FROM customer WHERE first_name='Matthew' AND last_name='Mahan'))
AND return_date BETWEEN '2005-07-28' AND '2005-08-01'));

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT title,description,replacement_cost FROM film 
JOIN inventory ON inventory.film_id=film.film_id 
JOIN rental ON rental.inventory_id=inventory.inventory_id
JOIN customer ON customer.customer_id=rental.customer_id
WHERE
title ILIKE '%boat%' OR 
description ILIKE '%boat%' AND
customer.first_name='Matthew' AND
customer.last_name='Mahan'
ORDER BY replacement_cost DESC;