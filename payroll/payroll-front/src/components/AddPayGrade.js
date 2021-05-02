import React from 'react';
import {useForm} from 'react-hook-form';
import {Form,Button,Container} from 'react-bootstrap';

function AddPayGrade() {

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

    fetch('http://localhost:3000/api/addpaygrade', requestOptions)
        .then(response => console.log(response))
  };

    return (
      <>
      <Container className="mt-4">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Grade Name</Form.Label>
            <Form.Control type="text" {...register("grade_name")} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Grade Basic</Form.Label>
            <Form.Control type="text" {...register("grade_basic")} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dearness Allowance</Form.Label>
            <Form.Control type="text" {...register("grade_da")} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Travel Allowance</Form.Label>
            <Form.Control type="text" {...register("grade_ta")} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Grade Bonus</Form.Label>
            <Form.Control type="text" {...register("grade_bonus")} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Provident Fund</Form.Label>
            <Form.Control type="text" {...register("grade_pf")} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Department ID</Form.Label>
            <Form.Control type="text" {...register("Dept_id")} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      </>
    );
  }
  
export default AddPayGrade;
  