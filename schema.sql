--SYNTAX TO CREAT DB IN COMMAND LINE
DROP DATABASE IF EXISTS teams_db;
CREATE DATABASE teams_db;
USE teams_db;

--SYNTAX TO CREAT TABLE IN COMMAND LINE
CREATE TABLE `departments` (
  `department_id` INT NOT NULL,
  `department_name` VARCHAR(255),
  PRIMARY KEY (department_id)
) 

--SYNTAX TO CREAT ROLE IN COMMAND LINE
CREATE TABLE `role` (
  `role_id` INT,
  `role_title` VARCHAR(30),
  `role_salary` INT,
  `department_id` INT NOT NULL
)
--SYNTAX TO CREAT EMPLOYEE IN COMMAND LINE
CREATE TABLE `employee` (
  `employee_id` INT,
  `first_name` VARCHAR(30),
  `last_name` VARCHAR (30),
  `role_id` INT NOT NULL,
  `manager_id` INT
)

--SYNTAX TO INSERT
-- In command line:
-- 1. mysql
-- 2. SHOW DATABASES;
-- 3. USE assignments 
-- 4. SHOW TABLES
-- 5. enter your sql 
-- 6. DESC ROLE

INSERT INFO
INSERT INTO ROLE (role_id, role_title, role_salary, department_id)
VALUES (101, "Manager", 5, 100) 

INSERT INTO EMPLOYEE (employee_id, first_name, last_name, role_id, manager_id)
VALUES  (001, "Violet", "Baudelaire", 111, 101)
        (002, "Sunny", "Baudelaire", 112, 101),