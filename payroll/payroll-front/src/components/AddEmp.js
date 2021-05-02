import React from 'react';
import {useForm} from 'react-hook-form';
import {Form,Container,Button} from 'react-bootstrap';

function AddEmp() {

  const {register,handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
     
        var raw = JSON.stringify(data);
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

    fetch('http://localhost:3000/api/addemployee', requestOptions)
        .then(response => console.log(response))
  };

    return (
      <>
      <Container className="mt-4">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Employee Name</Form.Label>
            <Form.Control type="text" {...register("emp_name")}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact No.</Form.Label>
            <Form.Control type="text" {...register("emp_contact_no")}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of birth</Form.Label>
            <Form.Control type="text" {...register("emp_DOB")}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control type="text" {...register("emp_state")}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" {...register("emp_city")}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of Joining</Form.Label>
            <Form.Control type="text" {...register("emp_DOJ")}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Department ID</Form.Label>
            <Form.Control type="text" {...register("Dept_id")}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      </>
    );
  }
  
export default AddEmp;

