//INVOKE SQL

//CONNECT SQL TO DATABASE




export class MyDatabaseInterface {

    //     // private funciton, this only gets called WITHIN this class
    // function getConnection() {
    //     return mysql.createConnection({
    //       host: "localhost",
    //       user: "yourusername",
    //       password: "yourpassword",
    //       database: "mydb"
    //     });
    // }

    //     // public function -> clients of this class can call this function
    // function getAllEmployees() {
    //     con = self.getConnection()
    //     con.connect();
    //     result = con.query('SELECT * FROM MYDATABASE WHERE ROLE == EMPLYOEE');
    //     console.log(result);
    //     return result;
    // }

    getAllDepartments() {
        return "hello world";
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
