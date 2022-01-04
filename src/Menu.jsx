import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return(
        <>
        <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/"> 
        About Us </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact"> Contact Us </NavLink>  
        <NavLink exact activeClassName="active_class" to="/user/Manish/Goyal"> User </NavLink> 
        <NavLink exact activeClassName="active_class" to="/services"> Services </NavLink>  
        
        {/* <a href="/"> About us</a>
        <a href="/contact"> Contact us</a> */}
        </div>
        </>
    )
};
export default Menu;