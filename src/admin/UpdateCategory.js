import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { getCategory, updateCategory} from './helper/adminapicall'


const UpdateCategory = ({match}) => {
    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [success,setSuccess] =useState(false)

    const {token} =isAuthenticated();
    const preload = categoryId => {
        getCategory(categoryId).then(data => {
            console.log(data);
            if(error){
                setError(data.error)
            } else {
                setName(data.name)
            }
        })
    }
    useEffect(() => {
       preload(match.params.categoryId);
    }, [])

    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard">Admin dashboard</Link>
        </div>
    )
    const handleChange = (event) => {
        setError("");
        setName(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess(false);
        //Backend Api request 
        updateCategory(match.params.categoryId,token,name).then(data => {
            
            if(!data){
                setError(true);
            } else {
                setError("");
                setSuccess(true);
                setName("")
            }
        });
    };

    const successMessage = () => {
        if(success) {
            return <h4 className="text-success"> Updated created successfully</h4>
        }
    };

    const warningMessage = () => {
        if(error) {
            return <h4 className="text-danger">  Updation failed</h4>
        }
    }
    const myCategory = () => (
        <form>
            <div className="div form-group">
                <p className="lead">Enter the Category</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange}
                value={name}
                autoFocus
                required
                placeholder="for Milk Chocolate" />
                <button onClick={onSubmit} className="btn btn-outline-info"> Update</button>
            </div>
        </form>
    )



    return (
       <Base title="Update category here" description="Upadte Category" className="container bg-info p-4" >
       <div className="div row bg-white rounded">
           <div className="div col-md-8 offset-md-2">
               {successMessage()} {warningMessage()}
               {myCategory()} {goBack()}
           </div>
       </div>
       </Base>
    )
}
export default UpdateCategory;