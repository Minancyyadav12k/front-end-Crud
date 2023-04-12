import React, { useState, useEffect } from 'react'
import { Table, } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Home() {
  const [state, setState] = useState([])
  useEffect(() => {
   loaduser();
  },[])

  // fetch the url in  data for json server
  const loaduser = () => {
    fetch("http://localhost:3004/users").then((response) => response.json().then((data) => {
      setState(data)
      console.log(data)
    }))
  }

  // using delete methad
  const deleteData = (id) => {
    console.log(id)
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(` http://localhost:3004/users/${id}`,requestOptions)
      .then(response => response.json())
      .then(() => {
        alert("Deleted succefully");
        newData(id)
      }
      );

  }
  const newData = (id) => {
    console.log(id);
    loaduser();
  }

 // Edit data
  // const editdata=()=>{

  // }

  return (
    <div  >
      <h1> home </h1>
      <Table>
        <thead>
          <tr className='data'>
            <th>Id</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Email</th>
            <th> Action</th>
            {/* <th>Username</th> */}
          </tr>
        </thead>
        <tbody>
          {
            state.map((v,i) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.salary}</td>
                <td>{v.Email}</td>
                <th><button className="dlt_btn" onClick={() => deleteData(v.id)}>Delete</button></th>
                <th><Link className="nav-link" to="Edit">Edit</Link> </th>
              </tr>
            ))
          }

        </tbody>
      </Table>
      

    </div>
  )

}
