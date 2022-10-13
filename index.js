//REQUIRE LIBRARIES
import inquirer from 'inquirer';
import fs from "fs";
import {MyDatabaseInterface} from './server.js';
const db = new MyDatabaseInterface();
//GLOBAL VARIABLES
var roles = [];

//// QUESTIONS THAT ARE REQUIRED BY USER STORY HERE
//MAIN MENU QUESTIONS
const mainMenuQuestions =[
    {
        type: "list",
        message: "What would you like to do today?",
        name: "menu",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
    },
  
]

//QUESTIONS FOR ADDING A DEPT
const departmentQuestions = [
    {
        type: "input",
        message: "What is the name of your new department?",
        name: "department_name",
        default: "Deperatment Name Missing"
    },

]
//QUESTIONS TO ADD A ROLE
const roleQuestions =[
    {
        type: "input",
        message:"What is the name of the new role?",
        name: "role_name",
        default: "Missing role name",
    },
    {
        type: "input",
        message:"What is the salary for the new role?",
        name: "role_salary",
        default: "Missing salary",
    },
    {
        type: "list",
        message:"What department does this new role belong to?",
        name: "role_department",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    },
]
//QUESTIONS TO ADD AN EMPLOYEE
const employeeQuestions = [
    {
        type: "input",
        message:"What is the first name of the new employee?",
        name: "employee_first_name",
        default: "Missing employee first name",
    },
    {
        type: "input",
        message:"What is the last name of the new employee?",
        name: "employee_last_name",
        default: "Missing employee last name",
    },
    {
        type: "list",
        message:"What is the role of the new employee?",
        name: "employee_first_name",
        choices: [roles], // TO DO: create variable to hold roles...database
    },
    {
        type: "input",
        message:"Who is the manager of the new employee?",
        name: "manager_first_name",
        default: "Missing manager name",
    },

]

//QUESTIONS TO UPDATE AN EMPLOYEE
const employeeUpdateQuestions = [
    {
        type: "list",
        name: "new_role",
        choices: [roles],
    }
]

//// FUNCTION TO LINK THE QUESTIONS
//INITIALIZING FUNCTION
function init() {
    
    inquirer.prompt(mainMenuQuestions)
        .then(answer => {
            //console.table(answer);
        
    //USE SWITCH SYNTAX TO SELECT OPTIONS
    switch(answer.menu){
        case "View all departments":
            db.showAllDepartments();
        case "View all roles":
            db.showAllRoles();
    }

})
};
//FUNCTIONS TO SHOW EACH OPTIONS (SO MANY)
// if (they want to fetch all emplyoees) {
//     allEmployees = dbInterface.getAllEmployees();
//     // maybe you wanna format htat
//     console.log(allEmployees);

//FUNCTIONS TO ADD EACH OPTIONS

//ACTION 👏 CODE 👏
init()