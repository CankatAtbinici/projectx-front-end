import React from "react";
import {  FormGroup, Label, Input } from 'reactstrap';

function StepTwoRegister(props) {

    const {submitRegisterFormEventHandler , formData} = props;
  return (
    <div>
      <FormGroup>
        <Label for="country">Country</Label>
        <Input
          type="select"
          name="country"
          id="country"
          value={formData.country ? formData.country : ""}
          onChange={(e) => {submitRegisterFormEventHandler(e)}}
        >
          <option value="turkey">Turkey</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="germany">Germany</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="country">Country</Label>
        <Input
          type="select"
          name="city"
          id="city"
          value={formData.city ? formData.name : ""}
          onChange={(e) => {submitRegisterFormEventHandler(e)}}
        >
          <option value="İstanbul">İstanbul</option>
          <option value="İzmir">İzmir</option>
          <option value="Antalya">Antalya</option>
          <option value="Denizli">Denizli</option>
        </Input>
      </FormGroup>
    </div>
  );
}

export default StepTwoRegister;
