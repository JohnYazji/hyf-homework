-- Part 1 Working with tasks

-- Add a task with these attributes: title, description, created, 

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Database', 'to be done', '2020-02-07 14:04:12', '2020-02-07 14:58:58', '2040-02-07 15:09:18', 2, 5 );


-- Change the title of a task

UPDATE task
SET title = 'database002'
WHERE id = 1;

-- Change a task due date

UPDATE task
SET due_date = '2040-02-09 00:00:00'
WHERE id = 2;


-- Change a task status

UPDATE task
SET status_id = 2
WHERE id = 2;


-- Mark a task as complete
UPDATE task 
SET status_id = 3 
WHERE id = 2;

-- Delete a task
DELETE FROM task
WHERE id = 1;


