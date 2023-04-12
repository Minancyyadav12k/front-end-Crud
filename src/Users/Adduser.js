import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap"

export default function Addusers() {
  const [addusers, setUsers] = useState({
    name: "",
    salary: "",
    Email:"",
    Role:""
  })
 
  const handlechange = (e) => {
    setUsers({ ...addusers, [e.target.name]: e.target.value })
    console.log(addusers)
  };
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(addusers)
    const response = await fetch("http://localhost:3004/users",{
        method:'POST',
        headers:{
          'Content-Type': 'application/json' 
        }
        ,
        body:JSON.stringify(addusers)
    })

  }

  return (
    <div >
      <form  onSubmit={handlesubmit} >
        <Container>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail"  >
            <Form.Label column sm={2} name="name">
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="Name" placeholder="Enter your name" name="name"  value={addusers.name} onChange={ (e)=>handlechange(e)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword"   >
            <Form.Label column sm={2}>
              salary
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="Salary" placeholder="Enter your salary" name="salary" value={addusers.salary} onChange={ (e)=>handlechange(e)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail"  >
            <Form.Label column sm={2} name="name">
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="Name" placeholder="Enter your name" name="Email"  value={addusers.Email} onChange={ (e)=>handlechange(e)} />
            </Col>
            <Col sm={10}>
              <Form.Control type="Role" placeholder="Enter your role " name="Role"  value={addusers.Role} onChange={ (e)=>handlechange(e)} />
            </Col>
          </Form.Group>
          

          <Form.Group as={Row} className="mb-3"  >
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Addusers</Button>
            </Col>
          </Form.Group>
        </Container>
      </form>
    </div>
  )


}