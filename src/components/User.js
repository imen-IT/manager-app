import React, { Component, useEffect ,useState} from 'react';
import axios from 'axios';
import { useHistory ,useParams} from "react-router-dom";
import {Link} from 'react-router-dom';

    const User = () => {
     const[user,setUser]=useState({
         name:"",
         username:"",
         email:""
     });
     const {id}=useParams();
     useEffect(()=>{
         loadUser();
     },[]);
//GET USER BY ID 
     const loadUser =async()=>{
        const res =await axios.get(`http://localhost:3030/users/${id}`);
        setUser(res.data);
      };
      return (
          <div className="container py-4">
              <Link class="btn btn-primary btnBack" to="/">Go back</Link>

         <h3 className="display-20">User Id:{id}</h3>
              <hr></hr>
              <ul className="list-group w-50">
                  <li className="list-group-item">firstName :{user.name}</li>
                  <li className="list-group-item">lastName :{user.username}</li>
                  <li className="list-group-item">email :{user.email}</li>
              </ul>
          </div>
          
      )  
  
    }
    export default User;