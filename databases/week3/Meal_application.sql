
-- Create these queries- Meal

create database meal_application;
use meal_application;

SET NAMES utf8mb4;



CREATE TABLE `Meal` (
 
`id` int (10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  
`title` varchar(255) NOT NULL,
  
`description` text NOT NULL,
  
`location` varchar(255) NOT NULL,
  
`when` datetime DEFAULT CURRENT_TIMESTAMP,
  
`max_reservations` int (10) unsigned NOT NULL,
  
`price` decimal (4) NOT NULL,
  
`created_date` date
 NOT NULL
);



CREATE TABLE `Reservation` (
  
`id` int (10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  
`number_of_guests` int (10) unsigned NOT NULL,
  
`meal_id` int (10) unsigned NOT NULL,
  
`created_date` date
 NOT NULL
);



CREATE TABLE `Review` (
  
`id` int (10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  
`title` varchar(255) NOT NULL,
  
`description` text NOT NULL,
  
`meal_id` int(10) unsigned  NOT NULL,
  
`stars` int (5) unsigned  NULL,
  
`created_date` date NOT NULL
);



ALTER TABLE `Reservation` ADD FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`);



ALTER TABLE `Review` ADD FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`);


------------------------------------

--meal data and values

insert into meal (title, description, location, `when`, max_reservations, price, created_date) 

values ('Kebbeh', 'Kebbet Burgul', 'København', '2021-03-16 18:30:00', 5, 5, '2020-03-11 00:00:00');

insert into meal (title, description, location, `when`, max_reservations, price, created_date) 

values ('Hummus', 'chickpeas in tahini', 'København', '2020-05-18 14:00:00', 2, 10, '2020-05-17 00:00:00');
insert into meal (title, description, location, `when`, max_reservations, price, created_date) 

values ('Labneh', 'Strained yogurt', 'København', '2020-04-10 17:00:00', 10, 20, '2020-04-08 00:00:00');

--------------------------------------------


--reservation data and values

insert into reservation (number_of_guests, meal_id, created_date) 
values (4, 3,'2020-02-11 12:41:00');
insert into reservation (number_of_guests, meal_id, created_date) 
values (6, 2,'2020-02-14 20:00:00');
insert into reservation (number_of_guests, meal_id, created_date) 
values (2, 6,'2020-02-11 17:00:00');


--------------------------------------------

--review data
insert into review (title, description, meal_id, stars, created_date) 
values ('Excellent', 'Waaaw', 5, 3,'2020-07-07 00:00:00');

insert into review (title, description, meal_id, stars, created_date) 
values ('Delicious!!', 'Thanks', 3, 4, '2020-09-03 00:00:00');

insert into review (title, description, meal_id, stars, created_date) 
values ('Very good', 'will come again soon', 2, 4, '2020-02-12 00:00:00');


---------------------------------------------

-- Meal Queries to write

-- Get all meals...

SELECT * FROM Meal;

-- Add a new meal...

INSERT INTO Meal (Title, `Description`, Location, `When`, Max_reservations, Price, Created_date) 
VALUES ('Tabouleh', 
'persille', 
'København H', 
'2021-01-10 14:30:00', 
'6',
29, 
'2020-01-08 00:00:00'
); 

-- Get a meal with any id

SELECT * FROM meal 
WHERE id = 6;

-- Update a meal with any id

UPDATE Meal 
SET Title = "Kabab", `Description` = "Yammiii", Location = "Nakskov", `When` = "2020-07-16 13:00:00" , Max_reservations = "15", Price = 40, Created_date = "2020-07-15 18:00:00" 
WHERE Id = 3;

-- Delete a meal with any id, fx 1
DELETE FROM Meal WHERE Id = 3;   


----------------------------------------------------
 
-- Reservation Queries to write


-- Get all reservations
select * from reservations


-- Add a new reservation

INSERT INTO Reservation (Number_of_guests, Meal_id, Created_date) 
VALUES (
"2",
"2", 
'2020-01-15'
);

-- Get a reservation with any id...

SELECT * FROM Reservation
WHERE id = 1;


-- Update a reservation with any id...

UPDATE Reservation 
SET Number_of_guests = 4, Meal_id = 2, Created_date = '2020-01-07'
WHERE id = 2; 

-- Delete a reservation with any id...

DELETE FROM Reservation 
WHERE id = 2; 

-------------------------------------------

-- Review Queries to write...

-- Get all Reviews

SELECT * FROM Review;

-- Add a new Review
INSERT INTO Review (Title, `Description`, Meal_id, Stars, Created_date) 
VALUES (
'Excellent', 
'incredible food',
'2', 
4, 
'2020-02-14'
);

-- Get a Review with any id...

SELECT * FROM Review
WHERE id = 1; 

-- Update a Review with any id...

UPDATE Review 
SET Title = 'Fatoush', `Description` = 'great salad ever' , Meal_id = 4, Stars = 5, Created_date = '2020-02-012'
WHERE Id = 2; 

-- Delete a Review with any id
DELETE FROM Review 
WHERE Id = 3; 


-------------------------------------------

-- Additional queries...


INSERT INTO Meal (Title, `Description`, Location, `When`, Max_reservations, Price, Created_date) 
VALUES ('Meal001', 
'With tomat', 
'København H', 
'2021-01-10 14:30:00', 
'6',
29, 
'2020-01-08 00:00:00'
); 
INSERT INTO Meal (Title, `Description`, Location, `When`, Max_reservations, Price, Created_date) 
VALUES ('Meal002', 
'without tomat', 
'København H', 
'2021-01-10 14:30:00', 
'6',
29, 
'2020-01-08 00:00:00'
); 

INSERT INTO Reservation (Number_of_guests, Meal_id, Created_date) 
VALUES (
"2",
"2", 
'2020-01-11'
);
INSERT INTO Reservation (Number_of_guests, Meal_id, Created_date) 
VALUES (
"5",
"1", 
'2020-01-10'
);

INSERT INTO Review (Title, `Description`, Meal_id, Stars, Created_date) 
VALUES (
'Excellent', 
'Excellent food',
'2', 
4, 
'2020-02-14'
);INSERT INTO Review (Title, `Description`, Meal_id, Stars, Created_date) 
VALUES (
'Very good', 
'Very good food',
'1', 
3, 
'2020-02-14'
);

-- Get meals that has a price smaller than a specific price fx 90

select * from meal where price < 90


-- Get meals that still has available reservations...

select Meal.Id,Meal.Title, Meal.max_reservation ,sum(Reservation.number_of_guests) as total
from Meal
inner join Reservation on Reservation.meal_id = Meal.Id
having total < max_reservation;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde...

SELECT * from meal   
where Meal.Title like '%Rød grød med%';

--Get meals that has been created between two dates...
SELECT * FROM meal 
WHERE created_date BETWEEN '2020-01-10' AND '2020-01-11';

-- Get only specific number of meals fx return only 5 meals
select * from meal
limit 5;

-- Get the meals that have good reviews...
select meal.*, review.title, review.stars
from meal 
inner join review on review.review_meal_id = meal.id
where review.stars > 3;

-- Get reservations for a specific meal sorted by created_date...
select meal.*, reservation.created_date 
from reservation
inner join meal on meal.id = reservation.meal_id
where meal.id = 2
ORDER by reservation.created_date ASC;

-- Sort all meals by average number of stars in the reviews
select meal.title, AVG(review.stars) from meal 
inner join review on review.review_meal_id = meal.id
group by meal.title
ORDER by review.stars asc;
