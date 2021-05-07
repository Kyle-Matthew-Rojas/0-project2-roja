import React, { Component } from "react";
import  { CourseTable }  from "./CourseTable";
import { CourseEditor } from "./CourseEditor";
import Form from "react-bootstrap/Form";
export class CourseDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedStudent: null,
            studentName: this.props.studentName,
            numberOfCred: this.props.numberOfCred,
        }
    }

    startEditing = (courses) => {
        this.setState({ showEditor: true, selectedStudent: courses })
    }

    
    saveStudent = (courses) => {
        this.props.saveCourseDisplayCallBack(courses); // died here uncaught error type
        this.setState({ showEditor: false, selectedStudent: null })      
    }

    cancelStudent = (courses) => {
        this.setState({ showEditor: false, selectedStudent: null })        
    }

    handleNameChange = (event) =>{
        this.setState({studentName: event.target.value});
    }

    handleCredSelect= (event) =>{
        this.setState({numberOfCred: event.target.value}); 
    }

    render() {
        if (this.state.showEditor) {
            return <CourseEditor 
                key={ this.state.selectedStudent.id  }
                courses={ this.state.selectedStudent } 
                saveEditChanges={ this.saveStudent }
                cancelChange = { this.cancelStudent }
                />
        } else {
            return(
            <div>
        <Form className="container-fluid">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Student name: </Form.Label>
          <Form.Control type="Name" placeholder="Enter your name" value={this.state.studentName} onChange={this.handleNameChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Total Transfer Credits: </Form.Label>
        <Form.Control type="transfer" placeholder="Transfer" value={this.state.numberOfCred} onChange={this.handleCredSelect} />
        <Form.Text className="text-muted">
            Please enter the total number of transferred credits.
          </Form.Text>
        </Form.Group>
      </Form>
            <div className="m-2">
                <CourseTable 
                    theirName = {this.state.studentName}
                    creds = {this.state.numberOfCred}
                    course = {this.props.coursesDisplayed}
                    editCallback={ this.startEditing }
                />                                  
            </div>
            </div>
            );
        }
    }
}
