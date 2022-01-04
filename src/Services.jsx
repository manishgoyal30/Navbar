import React from "react";
import { useEffect } from "react";

const Services = (props) => {
    useEffect(()=> {
        document.addEventListener("click", handleClick);

        return function cleanup() {
            document.removeEventListener("click", handleClick);
        };
    });
    function handleClick() {
        console.log("hii I am called again Service useEffect");
    };
    return (
        <>
        <h1> This is a service Page</h1>
        </>
    )
};

export default Services;
