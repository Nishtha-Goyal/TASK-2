import React,{useState} from "react"
import User from './User.js'
import axios from 'axios';
import './App.css'

import {BeatLoader} from 'react-spinners';
function App() {
  const [data,setData]= useState([])
  const [loading,setload]=useState(false)
 const fetch_data=async(e)=>{
  e.preventDefault() 
  setload(true)
  try{
      const api=await axios.get(`https://reqres.in/api/users?page=1`)
      for(let i=0;i<1000;i++)await axios.get(`https://reqres.in/api/users?page=1`)
    const d=api.data.data
    setload(false)
     setData(d);
     console.log(d)
    }
    catch(error){      
      console.log("asd");
     }
    }
  return (
    <div> 
        <nav className="navbar navbar-light cyan-color">
          <div className="container-fluid">
            <a className="navbar-brand head">USER-APP</a>
            <form className="d-flex " onSubmit={fetch_data} >
              <button className="btn btn-outline-success btn-color" type="Submit" onSubmit={fetch_data} id="type">Fetch Users</button>
            </form>
          </div>
        </nav><div class ="rest">
        <article  align="center"><BeatLoader loading={loading} /></article>
        {data.length===0?<div className="no-user">Data is not fetched yet</div>:data.map(d=><User data={d}></User>)}
        </div>
    </div>
  );
}

export default App;
