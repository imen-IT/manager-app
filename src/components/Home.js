import React, { Component, useEffect ,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../index.css';

const Home=(props)=>{
    const [users,setUser]=useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])

    useEffect(()=>{
      loadUsers()
    },[props]);

  const loadUsers = async()=>{
      const result=await axios.get(`http://localhost:3030/users`);
      setUser(result.data.reverse());
      setFilteredData(result.data.reverse());
  };
  //DELETE USER
  const deleteUser= (id)  =>{
      axios.delete(`http://localhost:3030/users/${id}`)
      .then(() => {loadUsers()});
  };
//FILTER
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = users.filter(item => {
        const startsWith =
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.username.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.username.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase())
        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  } 

return (
    <div className="container ">  
    
        <Link className="btn btn-primary btnAdd" to="/users/add">add User</Link>
        <div className="py-4">
          <input type="text" className="form-control form-control-lg"
                        placeholder="Search..."
                        name="name"
                        value={searchValue}
                        onChange={handleFilter}/>
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
               {filteredData.map((users,index) => (
              <tr>
                <th scope ="row">{index+1}</th>
                <td>{users.name}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/users/${users.id}`}>View</Link>
                  <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${users.id}`}>Edit</Link>
                  <button className="btn btn-danger" onClick={()=>deleteUser(users.id)}>Delete</button>
                </td>
              </tr>    
          ))}
          </tbody>
          </table>
        </div>

    </div> 
)
};

export default Home;