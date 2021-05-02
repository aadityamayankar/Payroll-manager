import React from 'react';
import {Button,Card,Col,Container, Row} from 'react-bootstrap';

export default function viewPage(props){
    return(
        <>
            <Container>

                <Container fluid className="heading">
                    <Row>
                        <Col><p className="text-center" style={{fontSize:'30px'}}>WELCOME TO PAYROLL MANAGEMENT SYSTEM</p></Col>
                    </Row>
                </Container>
                <Container className="p-3">
                    <Row className="mb-5">
                        <Col align="center">
                            <Card style={{width:'18rem'}}>
                                <Card.Body>
                                    <Card.Title>Add Department</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">_____________________________________</Card.Subtitle>
                                    <Card.Text>
                                        Each department belongs to a company. Add a department to add pay-grade and employee to a company.
                                    </Card.Text>
                                    <Button variant="secondary" onClick={()=>props.handleClick(1)}>Click Here</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col align="center">
                            <Card style={{width:'18rem'}}>
                                <Card.Body>
                                    <Card.Title>Add Pay-Grade</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">_____________________________________</Card.Subtitle>
                                    <Card.Text>
                                        Each Pay-Grade belongs to a department. Add a pay grade to add get the payroll of employees of any department.
                                    </Card.Text>
                                    <Button variant="secondary" onClick={()=>props.handleClick(2)}>Click Here</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col align="center">
                            <Card style={{width:'18rem'}}>
                                <Card.Body>
                                    <Card.Title>Add Employee</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">_____________________________________</Card.Subtitle>
                                    <Card.Text>
                                        Each employee belongs to a department of a company. Add an employee to any department.
                                    </Card.Text>
                                    <Button variant="secondary" onClick={()=>props.handleClick(3)}>Click Here</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col align="center">
                            <Card style={{width:'18rem'}}>
                                <Card.Body>
                                    <Card.Title>Generate Employee Report</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">_____________________________________</Card.Subtitle>
                                    <Card.Text>
                                        Employee report will contain payroll details of any employee belonging to any dept.
                                    </Card.Text>
                                    <Button variant="secondary" onClick={()=>props.handleClick(4)}>Click Here</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    );
}
