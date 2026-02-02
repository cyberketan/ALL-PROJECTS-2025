
import React from 'react'
import { useEffect } from "react";


const Practicle = () =>{
       useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error("Api Error:",err));
  }, []); 
  

    return (
        <div>
            <h1>HEllo Guys!</h1>

         


        </div>
    )

}
export default Practicle
