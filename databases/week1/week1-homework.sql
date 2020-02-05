-- 1. Find out how many tasks are in the task table
select count(*) 
from task;

-- 2.Find out how many tasks in the task table do not have a valid due date
select count(*)
from task
where due_date IS NULL;

-- 3.Find all the tasks that are marked as done
select * from task 
join status on task.status_id = status.id
where status.name LIKE 'done%';

-- 4. Find all the tasks that are not marked as done
SELECT task.*,status.name
FROM task INNER JOIN status ON task.status_id = status.id
WHERE NOT status.name = 'Done';

-- 5. Get all the tasks, sorted with the most recently created first
select * from task
order by created desc;

-- 6. Get the single most recently created task
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;

-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
FROM task
where title LIKE '%database%' OR description LIKE '%database%'; 

-- 8. Get the title and status (as text) of all tasks
SELECT task.title, status.name 
FROM task 
INNER JOIN status ON task.status_id = status_id;

-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(status.name) AS count 
FROM status INNER JOIN task ON task.status_id = status.id GROUP BY status.name;

-- 10. Get the names of all statuses, sorted by the status with most tasks first
select status.name, COUNT(status.name) AS count 
from status 
INNER JOIN task ON status.id = task.status_id 
GROUP BY status.name ORDER BY count DESC;

