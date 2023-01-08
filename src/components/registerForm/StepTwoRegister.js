import React, { useContext, useEffect, useState } from "react";
import {  FormGroup, Label, Input } from 'reactstrap';
import api from "../../services/api"
import { Context } from "../../context/context";
import LoadingSpinner from "../../components/loading-spinners/LoadingSpinner"

function StepTwoRegister(props) {

  const {submitRegisterFormEventHandler , formData} = props;
  const context = useContext(Context)
  const[cities, setCities] = useState([]);
  useEffect(() => {
   const getData  = async () =>  {
      try {
        const response = await api.get("/city");
         setCities(response)
         window.cities = cities
         context.setLoader(false)
      } catch (error) {
        console.error(error);
      }
    }
getData()
  }, [])

  return (
    <div>
      {
        context.loader ?<div style={{padding:"20%"}}><LoadingSpinner/> </div>  :
        <section >
        <FormGroup>
          <Label for="country">Ülke</Label>
          <Input
            type="select"
            name="country"
            id="country"
            value={formData.country ? formData.country : ""}
            onChange={(e) => {submitRegisterFormEventHandler(e)}}
          >
            <option value="0">Ülke seçiniz `(Yakında tüm dünya!)`</option>
            <option value={134}>Türkiye</option>
          </Input>
        </FormGroup>
  
        <FormGroup>
          <Label for="city">Şehir</Label>
          <Input
            type="select"
            name="city"
            id="city"
            value={formData.city ? formData.city : ""}
            onChange={(e) => {submitRegisterFormEventHandler(e)}}
          >
              <option value="0">Şehir seçiniz</option>
            {
              cities.data?.data.map((city) => {
                return(
                  <option value={city.id} key={city.id}>{city.name} </option>
                );
              })
            }
           
         
          </Input>
        </FormGroup>
        <FormGroup>
            <Label for="username">Kullanıcı Adı</Label>
            <Input type="text" name="username" id="username" 
            onChange={(e) => {submitRegisterFormEventHandler(e)}} required/>
          </FormGroup>
          
          <FormGroup>
            <Label for="password">Parola</Label>
            <Input type="password" name="password" id="password" 
            onChange={(e) => {submitRegisterFormEventHandler(e)}} required/>
          </FormGroup>
          
          <FormGroup>
            <Label for="rePassword">Parola Tekrar</Label>
            <Input type="password" name="rePassword" id="rePassword" 
            onChange={(e) => {submitRegisterFormEventHandler(e)}} required/>
          </FormGroup>
          </section>
      }

    </div>
  );
}

export default StepTwoRegister;
