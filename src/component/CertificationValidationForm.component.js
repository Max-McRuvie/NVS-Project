import React from "react";

class CertificationValidationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName : "",
            lastName : "",
            gender : "GENDER",
            DOB : "",
            instatutionName : "",
            studentID : "",
            course : "",
            gradYear : ""
        }

    }

    onFormInputChange = (name) => (event) => {
        this.setState({ [name]: event.target.value });
        console.log(event.target.value);
    };

    onFormSubmit = () => (event) => {
        console.log(this.state)
        event.preventDefault();
    };



    render() {
        return (
            <form date-testid="PersonalDetailsForm" onSubmit={this.onFormSubmit()}>
                <div className="mb-20 row form-group">
                    <div className="col-md-6">
                        <input id="firstName" onChange={this.onFormInputChange('firstName')} name="firstName" placeholder="FIRST NAME" data-testid="firstName" type="" className="form-control" aria-invalid="false" value={this.state.firstName}></input>
                    </div>
                    <div className="col-md-6">
                        <input id="lastName" onChange={this.onFormInputChange('lastName')} name="lastName" placeholder="SURNAME" data-testid="lastName" type="" className="form-control" aria-invalid="false" value={this.state.lastName}></input>
                    </div>
                    <div className="col-md-6"></div>
                </div>
                <div className="form-group mb-20">
                    <select name="gender"  className="form-control" id="gender" value={this.state.gender} onChange={this.onFormInputChange('gender')}>
                        <option value="" disabled>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Non-binary">Non-binary</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group mb-20">
                    {/* TODO: needs lable */}
                    <input id="DOB" name="DOB" placeholder="DATE OF BIRTH"  data-testid="DOB" type="date" className="form-control" aria-invalid="false" value={this.state.DOB} onChange={this.onFormInputChange('DOB')}></input>
                </div>
                <div className="mb-20 row form-group">
                    <div className="col">
                        <input id="institutionName" name="institutionName" data-testid="institutionName" placeholder="INSTITUTION NAME" type="text" className="form-control" aria-invalid="false" value={this.state.instatutionName} onChange={this.onFormInputChange('instatutionName')}></input>
                    </div>
                </div>
                <div className="mb-20 row form-group">
                    <div className="col">
                        <input id="studentID" name="studentID" data-testid="studentID" placeholder="STUDENT ID NUMBER" type="number" className="form-control" aria-invalid="false" value={this.state.studentID} onChange={this.onFormInputChange('studentID')}></input>
                    </div>
                </div>
                <div className="mb-20 row form-group">
                    <div className="col">
                        <input id="course" name="course" data-testid="course" placeholder="COURSE TITLE" type="text" className="form-control" aria-invalid="false" value={this.state.course} onChange={this.onFormInputChange('course')}></input>
                    </div>
                </div>
                <div className="form-group mb-20">
                    {/* TODO: needs lable */}
                    <input id="gradYear" name="gradYear" placeholder="GRADUATION YEAR"  data-testid="gradYear" type="date" className="form-control" aria-invalid="false" value={this.state.gradYear} onChange={this.onFormInputChange('gradYear')}></input>
                </div>
                <div className="form-group mb-20 justify-content-center">
                    {/* TODO: needs lable */}
                    <input className="form-control" type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

export default  CertificationValidationForm;