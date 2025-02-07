const members = [
    {first_name:"John", last_name: "Doe", email:"johndoe@example.com", birthdate:"1999-12-31", salary:80000},
    {first_name:"Jane", last_name: "Smith", email:"janesmith@example.com", birthdate:"2015-09-01", salary:75000}
];



//OLD WAY DEMO - CONSTRUCTOR FUNCTION
function Employee(firstName, lastName, email, birthdate, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthdate = birthdate;
    this.salary = salary;
  }

  Employee.addEmployee = function(firstName, lastName, email, birthdate, salary) {
    return new Employee(firstName, lastName, email, birthdate, salary);
  };

  Employee.prototype.editEmployee = function(updates) {
    Object.assign(this, updates);
  };

  // Usage example:
  const bill = Employee.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
  console.log(bill);

  bill.editEmployee({ salary: 7777777, email: "xxxxxxx@example.com" });
  console.log(bill);


//ES6 way - CLASSES - Create a new Employee class that adds a new employee and console logs them
// Goals:
// 1. Create a new Employee class with a constructor for Employee giving them a firstname, lastname, email, and birthdate

class Employee {
  constructor(firstName, lastName, email, birthdate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthdate = birthdate;
    Employee.members.push(this);
  }

   getEmployee() {
    return this;
  }
  static addEmployee(employee) {
    if (employee instanceof Employee) {
      members.push(employee);
    }
    else {
      console.log("Not a validd Employee!!!")
    }
    return members;
  
}
editEmployee(data) {
  Object.assign(this, data);
  return this;
  }
}

// 2. Instantiate (i.e. create a new instance) of an Employee with your info and save it to a const with your first name
const employee = new Employee("John", "Doe", "johndoe@example.com", "09/09/2002")

// 3. After step 2, console log your const and then try to console.log parts of the object
console.log(employee)
console.log(employee.firstName) 
console.log(employee.lastName)

// 4. Then create a const array that creates many "new Employee" objects and says to an array.  Console this object as a whole and parts of it

const employees = [
  new Employee("John", "Deer", "jD@example.com", "09/09/2002"),
  new Employee("karla", "Stambaugh", "ks@gmail.com", "01/01/1990"),
  new Employee("Bob", "John", "Bob@example.com", "12/31/1995")
]
// 5. Add methods to your class to "getEmployees" which just returns all the fields in the object.


//    Also add methods to addEmployee (this will be static) and a method to editEmployee
//    Test your methods using JS









// 6. Try to get instances of your class object to display in the table.  You can set the innerhtml of the
//    of the table to be empty and then replace it with the looped-through values of your object





//Try to output 3 instances of your class object into the table

let char1 = Employee("Karl", "John", "kj@gmail.com", "09/09/2002")
console.log(char1.getEmployee())
let char2 = Employee("Karl", "Jo", "kj@gmail.com", "09/09/2002")
console.log(char2.getEmployee())
let char3 = Employee("Karl", "J", "kj@gmail.com", "09/09/2002")
console.log(char3.getEmployee())

