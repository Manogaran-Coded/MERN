import React,{useState, useRef, useEffect} from 'react'
import Swal from 'sweetalert2';

function Add({employees, setEmployees, setIsAdding}) {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [salary, setSalary] = useState('');
    const [age, setAge] =  useState('');
    const [address, setAddress] = useState('');

    const textInput=useRef(null);

    useEffect(()=> {
        textInput.current.focus();
    },  [])

    const handleAdd=e=>{
        e.preventDefault();
        if (!first_name || !last_name || !salary || !age || !address){
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });

        }
        const id = employees.length + 1;
        const newEmployee = {
          id ,
          first_name,
          last_name,
          salary,
          age,
          address
        
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
          icon: 'success',
          title: 'Added!',
          text: `${first_name},${last_name}'s data has been AudioDestinationNode.`,
          showConfirmButton: false,
          timer: 1500
        });
    }

  return (
      <div className="small-container">
            <form onSubmit={handleAdd}>
              <h1>Add Employee</h1>
              <label htmlFor="first_name">First Name</label> 
              <input
                  id="first_name"
                  type="text"
                  ref={textInput}
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
                    <input type="submit" value="Add"/>
                    <input
                        style={{marginLeft: '12px'}}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={()=> setIsAdding(false)}
                    />
              </div>
        </form>
      </div>

  );
}

export default Add