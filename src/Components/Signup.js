
import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import light from "../Image/light.jpg"
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [form, setform] = useState({})
  // const [error,setError]=useState({});
  const navigate = useNavigate();

  function handlesubmit(event) {
    event.preventDefault();
    localStorage.setItem("form",JSON.stringify(form))
    navigate("/Login")

  }

  function handleChange(event) {
    setform({ ...form, [event.target.name]: event.target.value });
  }
  
  return (
    <>
      <div style={{backgroundImage: `url(${light})`}} width="100%">
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-primary"></div>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">Welcome Signup Page</h2>
                    <p className=" mb-5">Please enter your Signup and password!</p>
                    <div className="mb-3">
                      <Form method='POST' onSubmit={handlesubmit}>
                      
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control type="email" name="email" value={form.email} placeholder="Enter email" onChange={handleChange} />
                        </Form.Group>
                        {/* {error.email && <p className='"error'>{error.email}</p>} */}

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name='password' value={form.password} placeholder="Password" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <p className="small">
                            <a className="text-primary" href="#!">
                              Forgot password?
                            </a>
                          </p>
                        </Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit" >
                            Signup
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
