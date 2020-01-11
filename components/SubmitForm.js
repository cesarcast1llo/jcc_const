import { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from 'reactstrap';
import { FormErrors } from './FormErrors';
import SweetAlert from 'react-bootstrap-sweetalert';

class SubmitForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: null,
      email: '',
      number: '',
      message: '',
      formErrors: { email: '', number: '', message: '' },
      emailValid: false,
      numberValid: false,
      messageValid: false,
      formValid: false,
      openMessage: 'Email, Phone Number, and Message Required'
    };
  }
  //  contact form validation
  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let numberValid = this.state.numberValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.Email = emailValid ? 'is valid.' : 'is invalid.';
        break;
      case 'number':
        numberValid = value.match(/^\d{3}-?\d{3}-?\d{4}$/);
        fieldValidationErrors.Number = numberValid
          ? 'is valid.'
          : 'is invalid.';
        break;
      case 'message':
        messageValid = value.match(
          /^([a-zA-Z0-9_!@#\$%\^\&*\)\(+=._-]+)([a-zA-Z0-9_ !@#\$%\^\&*\)\(+=._-]){15}/
        );
        fieldValidationErrors.Message = messageValid
          ? 'is valid.'
          : 'Message has to have at least 15 characters';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        numberValid: numberValid,
        messageValid: messageValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.numberValid &&
        this.state.messageValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  //  email sent functions
  submitEmail() {
    const activatePopup = () => (
      <SweetAlert
        success
        title="Email has been sent!"
        onConfirm={() => this.confirmEmail()}
      >
        <span style={{ fontWeight: 700, paddingBottom: '5px', color: 'black' }}>
          Thank you
          <br />
        </span>{' '}
        We will be reaching out,
        <br /> we will contact you&nbsp;shortly.
        <br />
        JC Construction
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
    const { formValid } = this.state;

    return (
      <Container className="submit">
        <Row>
          <Col className="intro">What can we help you&nbsp;with?</Col>
        </Row>
        <Form className="form" method="POST" action="sent">
          <div className="states">
            {formValid ? (
              <div className="color">
                Email, Phone Number, and&nbsp;Message&nbsp;All&nbsp;Correct.
              </div>
            ) : (
              this.state.openMessage
            )}
          </div>
          <FormGroup>
            <Label for="exampleName">Name</Label>
            <Input type="name" name="name" id="name" />
          </FormGroup>
          <Row>
            <Col xs={12} sm={6} className="validation-fields">
              <FormGroup
                className={`${this.errorClass(this.state.formErrors.email)}`}
              >
                <Label for="exampleEmail">
                  Email{' '}
                  {this.state.emailValid ? null : (
                    <div className="input-incorrect">
                      {this.state.formErrors.Email}
                    </div>
                  )}
                </Label>
                <Input
                  type="email"
                  required
                  name="email"
                  id="email"
                  placeholder="youremail@here.com"
                  value={this.state.email}
                  onChange={this.handleUserInput}
                  className={`input-field ${
                    this.state.emailValid ? 'correct' : ''
                  }`}
                />
              </FormGroup>
            </Col>
            <Col xs={12} sm={6} className="validation-fields">
              <FormGroup
                className={`${this.errorClass(this.state.formErrors.number)}`}
              >
                <Label for="exampleNumber">
                  Phone Number{' '}
                  {this.state.numberValid ? null : (
                    <div className="input-incorrect">
                      {this.state.formErrors.Number}
                    </div>
                  )}
                </Label>
                <Input
                  name="number"
                  id="number"
                  placeholder="000-000-0000"
                  value={this.state.number}
                  onChange={this.handleUserInput}
                  className={`input-field ${
                    this.state.numberValid ? 'correct' : ''
                  }`}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="validation-fields">
              <FormGroup
                className={`${this.errorClass(this.state.formErrors.message)}`}
              >
                <Label for="exampleSelectMulti">
                  How can we help you?{' '}
                  {this.state.messageValid ? null : (
                    <div className="input-incorrect">
                      {this.state.formErrors.Message}
                    </div>
                  )}
                </Label>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  rows="3"
                  value={this.state.message}
                  onChange={this.handleUserInput}
                  className={`input-field ${
                    this.state.messageValid ? 'correct' : ''
                  }`}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="button-row">
              formValid ? in button slide over green color and activate
              <Button
                className={`submitbtn ${formValid ? 'animated shake' : ''}`}
                type="submit"
                value="submit"
                disabled={!this.state.formValid}
                onClick={() => this.submitEmail()}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
        {this.state.alert}
        {/* activates popup, dont delete */}
      </Container>
    );
  }
}

export default SubmitForm;
