//REQUIRE LIBRARIES
import inquirer from 'inquirer';
import fs from "fs";
import {MyDatabaseInterface} from './helpers/server.js';
import db from './config/connection.js';
//GLOBAL VARIABLES
var server = new MyDatabaseInterface;
var roles = [];

//// QUESTIONS THAT ARE REQUIRED BY USER STORY HERE
//MAIN MENU QUESTIONS
const mainMenuQuestions =[
    {
        type: "list",
        message: "What would you like to do today?",
        name: "menu",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", 'I want to leave'],
    },
  
]

//QUESTIONS FOR ADDING A DEPT
const departmentQuestions = [
    {
        type: "input",
        message: "What is the name of your new department?",
        name: "department_name",
        default: "Department Name Missing"
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
        choices: []
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
        name: "employee_role",
        choices: [roles], 
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
        message: "Which employee are we updating?",
        name: "employee_name",
        choices: [roles],
    },
    {
        type: "list",
        message: "What is the new role?",
        name: "employee_role",
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
        //SHOWING THINGS
        case "View all departments":
            server.showAllDepartments();
            setTimeout(() => {
                init();
            }, 1000);
            break;
        case "View all roles":
            server.showAllRoles();
            setTimeout(() => {
                init();
            }, 1000);
            break;
        case "View all employees":
            server.showAllEmployees();
            setTimeout(() => {
                init();
            }, 1000);
            break;
            //ADDING THINGS
        case "Add a department":
            inquirer
            .prompt(departmentQuestions)
            .then(answers =>{  
                server.addDepartment(answers);
                setTimeout(() => {
                    init();
                }, 1000);
            });
           
        break;
        case "Add a role":    
        getDeptForRole();
        break;
        case "Add an employee":
        getRolesForEmployee();
        break;
            //UPDATING THINGS
        case "Update an employee role":
        getRolesAndEmployeesForQuestioning();
        break;
            //ABANDON SHIP
        case "I want to leave":
            console.log('But the world is quiet here...')
            process.exit();
        break;
    }

})
};
//GETTING DEPARTMENT CHOICES FOR THE ROLE QUESTIONS
async function getDeptForRole () {
    const departmentData = await db.query('SELECT * FROM departments;')
    const deptChoices = departmentData.map((department) =>  {
        return {
            name: department.department_name,
            value: department.id
        }
    })
    console.log(deptChoices);

        const answers = await inquirer
        .prompt([
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
                choices: deptChoices
            },
        ])
        .then(answers =>{  
            server.addRole(answers);
            setTimeout(() => {
                init();
            }, 1000);
        });
       

    }
//GETTING ROLE CHOICES FOR EMPLOYEE QUESTIONS
  async function getRolesForEmployee() {
    const roleData = await db.query('SELECT * FROM role;')
    const roleChoices = roleData.map((role) => {
        return {
            name: role.role_title,
            value: role.id
        }
    })
    console.log(roleChoices);

    const answers = await inquirer
    .prompt([
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
            name: "employee_role",
            choices: roleChoices, 
        },
        {
            type: "input",
            message:"What is the manager ID?",
            name: "manager_id",
            default: "Missing manager id",
        },
    
    ])
    .then(answers =>{  
        server.addEmployee(answers);
    });
    setTimeout(() => {
        init();
    }, 1000);
  }

  //GET ROLE CHOICES FOR UPDATE AND ALL THE EMPLOYEES TO UPDATE
  async function getRolesAndEmployeesForQuestioning() {
    const roleData = await db.query('SELECT * FROM role;')
    const roleChoices = roleData.map((role) => {
        return {
            name: role.role_title,
            value: role.id
        }
    })
    console.log(roleChoices);

    const employeeData = await db.query(`SELECT * FROM employee;`)
    const employeeChoices = employeeData.map((employee) => {
        return {
            name: employee.first_name, 
            value: employee.id

        }
    })
    console.log(employeeChoices)
   

    const answers = await inquirer
    .prompt([
        {
            type: "list",
            message: "Which employee are we updating?",
            name: "employee_name",
            choices: employeeChoices,
        },
        {
            type: "list",
            message: "What is the new role?",
            name: "employee_role",
            choices: roleChoices,
    
        }
    ])
    .then(answers =>{  
        server.updateEmployee(answers);
    });
        setTimeout(() => {
            init();
        }, 1000);
  }
//ACTION 👏 CODE 👏
init()




// the steps for adding a role:
// 1. get the departments
// 2. link the ids from the depatments to the role?? somehow??
// 3. put the input/user input into a pretty sql command