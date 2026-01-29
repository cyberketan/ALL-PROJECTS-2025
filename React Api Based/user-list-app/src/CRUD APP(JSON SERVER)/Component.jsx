import React from 'react'
import axios from 'axios';

import { useEffect, useState } from "react";

const Component = () => {
     const [data,setData] = useState({
        name:"",
        age:"",
        salary:"",
    });

    const [alldata,setAllData] = useState([]);
    const [id,setId] = useState("");

    const handlechange = (e) =>{
        const{name,value} = e.target;
        setData({
           ...data,
           [name]:value,
        });

    };
 
    const saveData = (e) =>{
         e.preventDefault(); 
        // setAllData([...alldata,data]);
        // setData({
        //     name:"",
        //     age:"",
        //     salary:""
        // })
        // setId("")
       if(id !== ""){
        axios.put("http://localhost:3000/users/" + id, data)

        .then(() =>disp());

       }else{
        axios.post("http://localhost:3000/users",data)
        .then(() =>disp())
       }
       setData({
        name:"",
        age:"",
        salary:"",
       });
       setId("");
    }
    const disp = () =>{
        axios.get("http://localhost:3000/users")
        .then((res) => setAllData(res.data))
    }
     const editData = (id) => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setData(res.data);
        setId(id);
      });
  };
    const deldata = (id) =>{
        axios.delete("http://localhost:3000/users/" +id)
        .then(() =>disp())
    };
    useEffect(()=>{
        disp();
    },[]);
  return (
    <div>
   <form onSubmit={saveData}>
    <input type='text' name='name' placeholder='Enter Name' value={data.name} onChange={handlechange} />
    <br></br>
    <input type='number' name="age" placeholder='Enter Age' value={data.age} onChange={handlechange} />
    <br></br>

    <input type='number' name='salary' placeholder='Enter Salary' value={data.salary} onChange={handlechange} />
    
    <br></br>
    <button>SaveData</button>

   </form>
   <table border={2}>
    <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
            
        </tr>
    </thead>
    <tbody>
        {alldata.map((i) => (
                  <tr key={i.id}>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.salary}</td>
                    <td>
                      <button onClick={() => editData(i.id)}>Edit</button>
                      <button onClick={() => deldata(i.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
    </tbody>
   </table>
      
    </div>
  )
}

export default Component
