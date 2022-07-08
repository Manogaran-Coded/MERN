let mongoose = require("mongoose");
let Employee = require("../models/employee");

/*
 * GET /employee route to retrieve all the employee.
 */
function getEmployees(req, res) {
  //Query the DB and if no errors, send all the employee
  let query = Employee.find({});
  query.exec((err, employees) => {
    if (err) res.send(err);
    //If no errors, send them back to the client
    res.json(employees);
  });
}

/*
 * POST /employee to save a new employee.
 */
function postEmployee(req, res) {
  //Creates a new employee
  var newEmployee = new Employee(req.body);
  //Save it into the DB.
  newEmployee.save((err, employee) => {
    if (err) {
      res.send(err);
    } else {
      //If no errors, send it back to the client
      res.json({ message: "Employee successfully added!", employee });
    }
  });
}
/*
/*
 * GET /employee/:id route to retrieve a employee given its id.
 */
function getEmployee(req, res) {
  Employee.findOne({_id: req.params.id}, (err, employee) => {
    if (err) res.send(err);
    //If no errors, send it back to the client
    res.json(employee);
  });
}

/*
 * DELETE /Employee/:id to delete a Employee given its id.

function deleteBook(req, res) {
  Book.remove({ _id: req.params.id }, (err, result) => {
    res.json({ message: "Book successfully deleted!", result });
  });
}
 */
function deleteEmployee(req, res) {
    Employee.remove({ _id: req.params.id }, (err, result) => {
    res.json({ message: "Employee successfully deleted!", result });
  });
}

/*
 * PUT /Employee/:id to updatea a employee given its id
 */
function updateEmployee(req, res) {
    Employee.findById({ _id: req.params.id }, (err, employee) => {
    if (err) res.send(err);
    Object.assign(employee, req.body).save((err, employee) => {
      if (err) res.send(err);
      res.json({ message: "Employee updated!", employee });
    });
  });
}

//export all the functions
module.exports = { getEmployees, postEmployee, getEmployee, deleteEmployee, updateEmployee };