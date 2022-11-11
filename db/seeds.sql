--SEEDS FOR THE APPLICATION TO RUN

INSERT INTO ROLE (role_id, role_title, role_salary, department_id)
VALUES (101, "Manager", 5, 100) 

INSERT INTO EMPLOYEE (employee_id, first_name, last_name, role_id, manager_id)
VALUES  (001, "Violet", "Baudelaire", 111, 101)
        (002, "Sunny", "Baudelaire", 112, 101),