--SYNTAX TO CREAT DB IN COMMAND LINE
DROP DATABASE IF EXISTS teams_db;
CREATE DATABASE teams_db;
USE teams_db;

--SYNTAX TO CREAT TABLE IN COMMAND LINE
CREATE TABLE `departments` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `department_name` VARCHAR(255)
) 

--SYNTAX TO CREAT ROLE IN COMMAND LINE
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role_title VARCHAR(30),
  role_salary INT,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) references departments(id)
)
--SYNTAX TO CREAT EMPLOYEE IN COMMAND LINE
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR (30),
  role_id INT NOT NULL,
  manager_id INT,
   FOREIGN KEY (role_id) references role(id)
)