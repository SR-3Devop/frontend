import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bgc text-white p-4",
  children
}) => (
  <div>
    <Menu />
    <div  className="container-fluid ">
      <div  style={{backgroundColor:"#ccffff"}} className="jumbotron bgc text-dark text-center">
        <h2  className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer style={{backgroundColor:"#ccffff"}} className="footer mt-auto py-3">
      <div className="container-fluid bgc text-primary text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4> <a style={{ fontSize: "30px"}} href="https://www.facebook.com/khemkadelights/" className="fa fa-facebook pr-3"></a>

      </div>
      <div  className="container text-center">
        <span className="text-muted ">
          <span className="text-dark ">Khemka Delights &copy; </span>
      
        </span>
      </div>
    </footer>
  </div>
);

export default Base;