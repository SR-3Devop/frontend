import React ,{Fragment} from 'react'
import{Link ,withRouter} from 'react-router-dom'
import {signout,isAuthenticated} from '../auth/helper'
import '../styles.css'

const currentTab = (history,path) => {
    if(history.location.pathname === path){
        return {color:"#ccffff"}
    } else {
        return {color:"#fff"}
    }
}
const Menu = ({history}) => (
  <div>
      <ul className="nav nav-tabs bg-dark">
          <li className="nav-item">
              <Link style = {currentTab(history,"/")} className="nav-link" to="/">
                  Home
              </Link>
          </li>
      
              <li className="nav-item">
              <Link style = {currentTab(history,"/cart")} className="nav-link" to="/cart">
                  Cart
              </Link>
          </li>

        {isAuthenticated() &&isAuthenticated().user.role === 1 && (
              <li className="nav-item">
              <Link style = {currentTab(history,"/admin/dashboard")} className="nav-link" to="/admin/dashboard">
                  Admin
              </Link>
          </li>
        )}
          <li className="nav-item">
              <Link style = {currentTab(history,"/user/dashboard")} className="nav-link" to="/user/dashboard">
                  User
              </Link>
          </li>
           {!isAuthenticated() && (
                <Fragment>
                <li className="nav-item">
                  <Link style = {currentTab(history,"/signup")} className="nav-link" to="/signup">
                      SignUP
                  </Link>
              </li>
              <li className="nav-item">
                  <Link style = {currentTab(history,"/signin")} className="nav-link" to="/signin">
                      Sign In
                  </Link>
              </li>
                </Fragment>
           )}
          
         {isAuthenticated() && (
             <li className="nav-item">
                 <span
                 className="nav-link text-warning"
                 onClick={() => {
                     signout(() => {
                         history.push("/")
                     })
                 }}
                 >SignOut</span>
             </li>
         )}
      </ul>
  </div>
)
export default withRouter(Menu)