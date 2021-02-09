import React from 'react'
import Base from "../core/Base"
import {isAuthenticated } from '../auth/helper'

const UserDashBoard = () => {
    const {user:{name,email,role,password}} =isAuthenticated()
console.log(name,email,role,password);
const adminRightSide = () => {
    return (
        <div className="card mb-4">
          <h4 className="card-header">User Information</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="badge badge-success mr-2">Name:</span> {name}
            </li>
            <li className="list-group-item">
              <span className="badge badge-success mr-2">Email:</span> {email}
            </li>
            <li className="list-group-item">
              <span className="badge badge-success mr-2">Role:</span> {role ? "Admin":""}
            </li>         
          </ul>
        </div>
      );
};
    return (
        <Base title="Welcome to Admin Area" description="manage your database here!" 
        className="container bg-light p-4">
            <div className="row">
                <div className="col-3" ></div> 
                <div className="col-9" >{adminRightSide()}</div> 
            </div>
    
   
        </Base>
    )
}


export default UserDashBoard
