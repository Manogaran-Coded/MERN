import React from 'react'

function List({employees,  handleEdit,  handleDelete}) {

    const formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
      
    });
  return (
    <div className='contain-table'>
      <table className='striped-table'>
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Address</th>
            <th colSpan={2} className="text-center">
                Actions
            </th>
          </tr>
        </thead>
        <tbody>
            {employees.length > 0? (
                employees.map((employee,i)=>(
                  <tr key={employee.id}>
                    <td>{i + 1}</td>
                    <td>{employee.first_name}</td>
                    <td>{employee.last_name}</td>
                    <td>{formatter.format(employee.salary)}</td>
                    <td>{employee.age}</td>
                    <td>{employee.address}</td>
                    <td className="text-right">
                      <button
                        onClick={() => handleEdit
                          (employee.id)}
                        className="button muted-button">
                        Edit
                      </button>
                    </td>
                    <td className="text-left">
                      <button
                        onClick={() => handleDelete
                          (employee.id)}
                        className="button muted-button">

                        Delete
                      </button>
                    </td>

                  </tr>
                ))
          ) : (
            <tr>
              <td colspan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default List