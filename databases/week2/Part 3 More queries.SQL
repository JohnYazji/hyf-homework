-- Part 3 More queries


-- Get all the tasks assigned to users whose email ends in @spotify.com

SELECT task.title, user.email FROM task 

JOIN user_task ON task.id = user_task.task_id

JOIN user ON user_task.user_id = user.id 

WHERE user.email LIKE '%@spotify.com';
-----------------------------------------------------



-- Get all the tasks for 'Donald Duck' with status 'Not started'



SELECT task.title, user.name, status.name FROM task
JOIN status ON status.id = task.status_id
JOIN user_task ON user_task.task_id = task.id
JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started';


------------------------------------------------------

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT task.title, task.created, user.name 
FROM task  
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows' AND month(created) = 09; 

-------------------------------------------------------

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT month(created), COUNT(*) FROM task

SELECT month(created), COUNT(*) FROM TASK
GROUP BY month(created);
--------------------------------------------------------















