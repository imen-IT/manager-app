import  axios  from "axios";
import React, { useEffect } from "react";
import {useState} from 'react';
import { useHistory ,useParams} from "react-router-dom";

const EditUser=()=>{
    let history=useHistory();
    const{id}=useParams();
    const [user ,setUser]= useState({
        name: "",
        username :"",
        email :""
    });
    const {name,username,email}=user;
    const onInputChange = e=>{
    setUser({...user,[e.target.name]:e.target.value})
    };

    useEffect(()=>{
        loadUser();
    },[])

    //EDIT USER
    const onSubmit= async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3030/users/${id}`,user);
        history.push("/");

    }
    //LOADING USER
    const loadUser=async ()=>{
        const result =await axios.get(`http://localhost:3030/users/${id}`);
        setUser(result.data);
    }
    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
                <form onSubmit={e=>onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                        placeholder="Enter your name"
                        name="name"
                        value={name}
                        onChange={e=>onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                        placeholder="Enter your lastName"
                        name="username"
                        value={username}
                        onChange={e=>onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                        placeholder="Enter your Email"
                        name="email"
                        value={email}
                        onChange={e=>onInputChange(e)}/>
                    </div>
                    <button className="btn btn-primary btn-block">Edit User</button>
                </form>
            </div>
        </div>
    )
}
export default EditUser;