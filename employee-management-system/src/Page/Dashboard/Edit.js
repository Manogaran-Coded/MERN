import React,{useState} from 'react'
import { employeesData } from '../../data'
import Swal from 'sweetalert2';

function Edit({employees, selectedEmployee, setEmployees, setIsEditing}) {

const id = selectedEmployee.id;
const [first_name, setFirstName] = useState(selectedEmployee.first_name);
const [last_name, setLastName] = useState(selectedEmployee.last_name);
const [salary, setSalary] = useState(selectedEmployee.salary);
const [age, setAge] =  useState(selectedEmployee.age);
const [address, setAddress] = useState(selectedEmployee.address);

const handleUpdate=e=>{
  e.preventDefault();
  if (!first_name || !last_name || !salary || !age || !address){
    return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
    });

}

const employee={
  id,
  first_name,
  last_name,
  salary,
  age,
  address
};

for (let i=0; i<employeesData.length; i++) {
    if (employees[i].id===id){
        employees.splice(i,1,employee);
        break;
    }
}
setEmployees(employees);
setIsEditing(false);

Swal.fire({
  icon: 'success',
  title: 'Updated',
  text: `${employee.first_name} ${employee.last_name}'s data has been Updated.`,
  showConfirmButton: false,
  timer: 1500,
});
}
  return (
    <div className="small-container">
    <form onSubmit={handleUpdate}>
      <h1>Edit Employee</h1>
      <label htmlFor="first_name">First Name</label> 
      <input
          id="first_name"
          type="text"
          name="first_name"
          value={first_name}
          onChange={e => setFirstName(e.target.value)}
      />

      <label htmlFor="last_name">Last Name</label> 
      <input
          id="last_name"
          type="text"
          name="last_name"
          value={last_name}
          onChange={e => setLastName(e.target.value)}
      />

      <label htmlFor="salary">Salary</label> 
      <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
      />

      <label htmlFor="age">Age</label> 
      <input
          id="age"
          type="number"
          name="age"
          value={age}
          onChange={e => setAge(e.target.value)}
      />

      <label htmlFor="address">Address</label> 
      <input
          id="address"
          type="text"                  
          name="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
      />

      <div style={{marginTop: '30px'}}>
            <input type="submit" value="Update"/>
            <input
                style={{marginLeft: '12px'}}
                className="muted-button"
                type="button"
                value="Cancel"
                onClick={()=> setIsEditing(false)}
            />
      </div>
</form>
</div>
  );
}

export default Edit