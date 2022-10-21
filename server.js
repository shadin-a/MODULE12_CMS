//INVOKE SQL
import mysql from 'mysql2';

//CONNECT SQL TO DATABASE
export class MyDatabaseInterface {

    //// private funciton, this only gets called WITHIN this class
     getConnection() {
        return mysql.createConnection({
            host: "localhost",
            user: "shadin",
            password: "password",
            database: "TEAMS_DB"
          });
        }
 //// public function -> clients of this class can call this function
    showAllDepartments() {
        var connection = this.getConnection()
        var sql = 'SELECT * FROM departments';
        connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.table(results);
    });
    
    }
    showAllRoles(){
        var connection = this.getConnection()
        var sql = 'SELECT * FROM role';
        connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.table(results);
    });

    }
    showAllEmployees(){
        var connection = this.getConnection()
        var sql = 'SELECT * FROM employee';
        connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.table(results);
    });

    }
    addDepartment(answers){
        var newDeptName = answers.department_name;
        var connection = this.getConnection()
        var sql = 'INSERT INTO departments (department_name) VALUES (?)'
        connection.query(sql, [newDeptName], (err, results) => {
            if (err) {throw err}
        });
       
    }
    
   

    addRole(answers){
        

        var newRoleName = answers.role_name;
        var newSalary = answers.role_salary;
        var roleDept = answers.role_department;
        var connection = this.getConnection()
        var sql = `INSERT INTO role (role_title, role_salary, department_id) VALUES  (?,?,?);`
        connection.query(sql, [newRoleName, newSalary, roleDept], (err, results) => {
            if (err) {throw err}
        });
    }

    addEmployee(answers){
        var newEmployeeFirst = answers.employee_first_name;
        var newEmployeeLast = answers.employee_last_name;
        var newRole = answers.employee_role;
        var newManagerName = answers.manager_first_name;

        var connection = this.getConnection()
        var sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES  (?,?,?,?);`
        connection.query(sql, [newEmployeeFirst, newEmployeeLast, newRole, newManagerName], (err, results) => {
            if (err) {throw err}
        });
       
        
    }

    updateEmployee(answers){
        var selectedEmployee = answers.employee_name;
        var newRole = answers.employee_role;

        var connection = this.getConnection()
        var sql = `UPDATE employees SET role_id = ? WHERE first_name = ?';`
        connection.query(sql, [newRole, selectedEmployee],  (err, results) => {
            if (err) {throw err}
        });
    }
    //UPDATE SQL TABLES FOR ID

    // updateEmployee(){
    //     var connection = this.getConnection()
    //     var sql = 'INSERT INTO departments (dept_name) VALUES (?)'
    //     //1. get employees
    //     //2. get all roles.
    //     //use inquirer which they want to chnage emp or role?
    //     //4. insert new role id/title into 
    // }

//     function insertEmployee(name, role, etc....){
//     con = self.getConnection()
//     con.connect();
//     result = con.query(insert into my table (bla the data i forget the syntax));
//     }
// }

    // test 1 -> empty database, run this, it should call it w/o error and return an empty array
    // test 2 -> put in employees, run this, it should return an arra of employee data
    // test 3 -> put in an employee and a deparartment (or soemthing else), it should still ONLY reutnr employees


}
