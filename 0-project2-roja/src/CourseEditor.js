//import event  from "jquery";
import React from "react";

export class CourseEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formData:{
                id: props.courses.id || "",
                description: props.courses.description || "",
                semester: props.courses.semester || "",
                prefix: props.courses.prefix || "",  
                number: props.courses.number || "",
                grade: props.courses.grade || ""
            }
        }
    }

    handleChange = (ev) => {
        ev.persist();
        this.setState(state => state.formData[ev.target.name] = ev.target.value);
    }

    handleClick = (event) => {
        this.props.saveEditChanges(this.state.formData);
    }

    render() {
        return <div className="m-2">
            <div className="form-group">
                <label>ID</label>
                <input className="form-control" name="id"
                    disabled
                    value={ this.state.formData.id }
                    onChange={ this.handleChange } />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input className="form-control" type="text" name="description"
                    value={ this.state.formData.description }
                    onChange={ this.handleChange } />
            </div>                     
            <div className="form-group">
                <label>Semester</label>
                <input className="form-control"  type="text" name="semester"
                    value={ this.state.formData.semester }
                    onChange={ this.handleChange } />
            </div>   
            <div className="form-group">
                <label>Prefix</label>
                <input className="form-control" type="text" name="prefix"
                    value={ this.state.formData.prefix }
                    onChange={ this.handleChange } />
            </div>
            <div className="form-group">
                <label>Number</label>
                <input className="form-control" type="text" name="number"
                    value={ this.state.formData.number }
                    onChange={ this.handleChange } />
            </div> 
            <div className="form-group">
                <label>Grade</label>
                <input className="form-control" type="text" name="grade"
                    value={ this.state.formData.grade }
                    onChange={ this.handleChange } />
            </div>                                                       
            <div className="text-center">
                <button className="btn btn-primary m-1" type="submit"
                        onClick={ this.handleClick }>
                    Save
                </button>
                <button className="btn btn-secondary" 
                        onClick={ this.props.cancelChange }>
                    Cancel
                </button>                
            </div>
        </div>
    }
}
