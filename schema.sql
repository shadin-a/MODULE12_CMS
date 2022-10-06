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
  `role_salary` DECIMAL,
  `department_id` INT NOT NULL,
)
--SYNTAX TO CREAT EMPLOYEE IN COMMAND LINE
CREATE TABLE `employee` (
  `employee_id` INT,
  `first_name` VARCHAR(30),
  `last_name` DECIMAL,
  `role_id` INT NOT NULL,
  `manager_id` INT,
)