import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FormErrors } from './FormErrors';
import SweetAlert from 'react-bootstrap-sweetalert';
import "../styles/websitename.scss";

class SubmitForm extends Component {
   constructor(props) {
      super(props);
  
      this.state = {
        alert: null,
        email: '',
        number: '',
        message: '',
        formErrors: {email: '', number: '', message: ''},
        warning: 'Email, Phone Number, and Message Required',
        emailValid: false,
        numberValid: false,
        messageValid: false,
        formValid: false,
      };
    }
   //  contact form validation 
    handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value},
        () => { this.validateField(name, value) });
    }
  
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let numberValid = this.state.numberValid;
      let messageValid = this.state.messageValid;
  
      switch(fieldName) {
        case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.Email = emailValid ? '' : ' is invalid';
          break;
        case 'number':
          numberValid = value.match(/^\d{3}-?\d{3}-?\d{4}$/);
          fieldValidationErrors.Number = numberValid ? '': 'is invalid';
          break;
        case 'message':
          messageValid = value.match(/^([a-zA-Z0-9_!@#\$%\^\&*\)\(+=._-]+)([a-zA-Z0-9_ !@#\$%\^\&*\)\(+=._-]){15}/);
          fieldValidationErrors.Message = messageValid ? '': 'at least 15 characters';
          break;
        default:
          break;
      }
      this.setState({
         formErrors: fieldValidationErrors,
         emailValid: emailValid,
         numberValid: numberValid,
         messageValid: messageValid,
      }, this.validateForm);
    }
  
    validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.numberValid && this.state.messageValid});
    }
  
    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }

   //  email sendoff functions
    submitEmail() {
      const activatePopup = () => (
        <SweetAlert
          success 
          title="Email has been sent!"
          onConfirm={() => this.confirmEmail()}
          confirmBtnText	= "Aww yiss!"
        >
         <span style={{fontWeight: 700}}>Thank you</span> for reaching out,<br/> we will contact you&nbsp;shortly.<br/>-JCC
        </SweetAlert>
      );
      this.setState({
        alert: activatePopup()
      });
    }
  
    confirmEmail() {
      console.log('Email is sending..');
      this.setState({
        alert: null
      });
    }

  render() {
    return (
      <div className="container submit">
         <div className="row">
            <div className="col-12 intro">
            What can we help you&nbsp;with?
            </div>
         </div>
        <Form className="form" method="POST" action="sent">
          <div className="states">
              {this.state.warning}
              <FormErrors formErrors={this.state.formErrors} />
          </div>
          <FormGroup className="form-group">
            <Label for="exampleName" for="validationCustom01">Name</Label>
            <Input type="name" name="name" id="name"/>
          </FormGroup>
          <div className="row">
            <div className="col-6 emailphone">
              <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                <Label for="exampleEmail">Email</Label>
                <Input 
                  type="email" required 
                  name="email" 
                  id="email" 
                  placeholder="youremail@here.com"
                  value={this.state.email}
                  onChange={this.handleUserInput} />
              </FormGroup>
            </div>
            <div className="col-6 emailphone">
            <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.number)}`}>
              <Label for="exampleNumber">Phone Number</Label>
              <Input
               name="number"
               id="number"
               placeholder="000-000-0000"
               value={this.state.number}
               onChange={this.handleUserInput}
              />
            </FormGroup >
            </div>
          </div>
          <div className="row">
            <div className="col-12 last-row">
              <FormGroup className="form-group">
                <Label for="exampleSelectMulti">How can we help you?</Label>
                <Input 
                type="textarea" 
                name="message" 
                id="message" 
                rows="3"
                value={this.state.message}
                onChange={this.handleUserInput} />
              </FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-12 button-row animated slideInLeft delay-2s">
            <Button className="submitbtn" type="submit" value="submit" disabled={!this.state.formValid} onClick={() => this.submitEmail()}>Submit</Button>
            </div>
          </div>
        </Form>
        {this.state.alert}
      </div>
    );
  }
}

export default SubmitForm;

