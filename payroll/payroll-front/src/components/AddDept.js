import React from 'react';
import { useForm } from "react-hook-form";
import {Form,Button, Container} from 'react-bootstrap';

function AddDept() {

  const { register, handleSubmit } = useForm();
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

    fetch('http://localhost:3000/api/adddept', requestOptions)
        .then(response => console.log(response))
  };

  return (
    <>
    <Container className="mt-4">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Department Name</Form.Label>
          <Form.Control type="text" {...register("dept_name")}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Company select</Form.Label>
          <Form.Control as="select" {...register("company_id")}>
            <option>1</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
      </Form>
    </Container>
    </>
  );
}

export default AddDept;
