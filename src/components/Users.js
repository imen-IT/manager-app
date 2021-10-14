import React from 'react';

    const Users = ({ users }) => {
      return (
        <div>
          <center><h1>Users List</h1></center>
          <table className="border table shadow">
          <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
               {users.map((users,index) => (
            
              <tr>
                <th scope ="row">{index+1}</th>
                <td>{users.name}</td>
                <td>{users.company.catchPhrase}</td>
                <td>{users.email}</td>
                <td>

                </td>
              </tr>    
          ))}
          </tbody>
          </table>
        </div>
      )
    };

    export default Users