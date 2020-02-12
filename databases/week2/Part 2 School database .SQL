-- Create a new database containing the following tables:
Class: with the columns: id, name, begins (date), ends (date)
Student: with the columns: id, name, email, phone, class_id (foreign key)

create database hyf_homework_DB2;
use hyf_homework_DB2;

SET NAMES utf8mb4;

CREATE TABLE `class1` (
  
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  
`name` varchar(255) NOT NULL,
  
`begins` timestamp,
  
`ends` timestamp,
  
PRIMARY KEY (`id`)
),
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

----------------------------------------------

-- Student: with the columns: id, name, email, phone, class_id (foreign key)



CREATE TABLE `student2` (

`id` int(10) unsigned NOT NULL AUTO_INCREMENT,

`name` varchar(255) NOT NULL,

`email` varchar(255) NOT NULL,

`phone` varchar(255) NULL,

`classid` int(10),
PRIMARY KEY (id),

FOREIGN KEY (classid) REFERENCES class(id) 
);


-------------------------------------------------

-- Create an index on the name column of the student table.

CREATE INDEX thenameindx

ON student (name);

-----------------------------------

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

ALTER TABLE student
ADD status ENUM ('not-started', 'ongoing', 'finished');



