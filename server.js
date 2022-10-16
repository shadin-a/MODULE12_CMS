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
          database: "ASSIGNMENT"
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
