import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import {Container,Form,Button,Table} from 'react-bootstrap';

function AddPayroll() {
  const [payroll, setPayroll] = useState([{
    transaction_id: '',
    emp_net_sal: '',
    reinbursment_dat: '',
    emp_gross: '',
    emp_sal_month: '',
    emp_sal_year: '',
    emp_id: '',
    grade_id: ''
  }]);


  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:3000/api/getpayroll/${data.emp_id}`)
      .then(response => response.json())
      .then(data => {console.log(data[0]);setPayroll(data[0])});
  };


    return (
      <>
        <Container className="mt-4 mb-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Employee ID</Form.Label>
            <Form.Control type="text" {...register("emp_id")}/>
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
        </Form>
      </Container>
      <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Emp ID</th>
            <th>Grade ID</th>
            <th>Net Sal</th>
            <th>Gross Sal (per month)</th>
            <th>Gross Sal (per year)</th>
            <th>Reimbursement date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{payroll.transaction_id}</td>
            <td>{payroll.emp_id}</td>
            <td>{payroll.grade_id}</td>
            <td>{payroll.emp_net_sal}</td>
            <td>{payroll.emp_sal_month}</td>
            <td>{payroll.emp_sal_year}</td>
            <td>{payroll.reinbursment_dat}</td>
          </tr>
        </tbody>
      </Table>
      </Container>
    </>
    );
  }
  
export default AddPayroll;
  