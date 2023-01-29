import React from "react";
import { FormGroup, Label, Input, Button,  } from "reactstrap";

function LoginModal(props) {
  const {handleSubmitFormData ,handleUserLogin} = props;
  return (
    <div className="login-form-parent">
      <section className="login-form-container">
        <FormGroup>
          <Label for="username-login">Kullanıcı e-posta </Label>
          <Input
            type="text"
            name="email"
            id="username-login"
            onChange={(event) => {handleUserLogin(event)}}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password-login">Parola</Label>
          <Input
            type="password"
            name="password"
            id="password-login"
            onChange={(event) => {handleUserLogin(event)}}
            required
          />
        </FormGroup>

        <FormGroup>
            <div>
            <Button className="btn-pink" onClick={(event) => {handleSubmitFormData(event)}}>Gönder</Button>
            </div>
            
        </FormGroup>
      </section>
    </div>
  );
}

export default LoginModal;
