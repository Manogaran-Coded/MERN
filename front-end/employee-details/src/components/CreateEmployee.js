import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateEmployee extends Component {
    constructor(props){
        super(props)
        //this.onChangeEmpName = this.onChangeEmpName.bind(this)
        this.state={
            name:'',
            email:'',
            empid:''
        }
    }

    onChangeEmpName=(event)=>{
        console.log(event.target.value)
        this.setState({name:event.target.value})

    }

    onChangeEmail=(event)=>{
        console.log(event.target.value)
        this.setState({email:event.target.value})
    }
        onChangeEmpId=(event)=>{
            console.log(event.target.value)
            this.setState({empid:event.target.value})

    }

    onSubmit=(event)=>{
        event.preventDefault();
        console.log("I am Working")
        const empObject ={
            name: this.state.name,
            email: this.state.email,
            empid: this.state.empid
        }
        axios.post('http://localhost:3003/emp/create-employee',empObject)
        .then(res => console.log(res.data))
        this.setState({  
        name:'',
        email:'',
        empid:''})
    }
    render() {
        return(<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={this.state.name} onChange={this.onChangeEmpName}  />
            </Form.Group>
            

            
            <Form.Group  controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail}  />
            </Form.Group>
            

            
            <Form.Group  controlId="EmpID">
            <Form.Label>EmpId</Form.Label>
            <Form.Control type="text" value={this.state.empid} onChange={this.onChangeEmpId}  />
            </Form.Group>

            <Button variant="danger" size="lg" block="block" className="mt-4" type="submit">
                Create Employee
                </Button>
            </Form>
            
        </div>
        )
    }
}