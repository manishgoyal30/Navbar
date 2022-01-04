import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const User=() => {
    const {fname, lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    
    return(
        <>
        <h1> User {fname} {lname} Page</h1>
        <p>My current Location {location.pathname} </p>
        {location.pathname === `/user/Manish/Goyal` ? (<button onClick={()=> history.push("/")}> Home Page </button> ) : null}
        </>
    ) 
};

export default User; 