import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


function StepOneRegister(props) {


    const {submitRegisterFormEventHandler , formData} = props;
    return (
        <div>
   
        <FormGroup>
          <Label for="name">İsim</Label>
          <Input type="text" name="name" id="name" 
          onChange={(e) => {submitRegisterFormEventHandler(e)}} required/>
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Soy isim</Label>
          <Input type="text" name="lastname" id="lastname" 
          onChange={(e) => {submitRegisterFormEventHandler(e)}} required/>
        </FormGroup>
        <FormGroup>
          <Label for="gender">Cinsiyet</Label>
          <Input type="select" name="gender" id="gender" 
          onChange={(e) => {submitRegisterFormEventHandler(e)}} required>
          <option value="0">Cinsiyet Seçiniz</option>
          <option value={1}>Erkek</option>
          <option value={2}>Kadın</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="phone">Telefon</Label>
          <Input type="phone" name="phone" id="phone"  
          onChange={(e) => {submitRegisterFormEventHandler(e)}} required/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email"  
          onChange={(e) => {submitRegisterFormEventHandler(e)}} required/>
        </FormGroup>
        <FormGroup>
          <Label for="birthday">Birthday</Label>
          <Input
            type="date"
            name="birthday"
            id="birthday"
            placeholder="Enter your birthday"
            value={formData.birtdday ? formData.birthday : new Date().toISOString().substr(0, 10) }
            onChange={(e) => {submitRegisterFormEventHandler(e)}}
          />
        </FormGroup>
        
    
        </div>
    );
}

export default StepOneRegister;