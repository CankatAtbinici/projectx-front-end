import React, { useState } from "react";
import StepOneRegister from "./StepOneRegister";
import StepTwoRegister from "./StepTwoRegister";
import { Button, Form } from "reactstrap";
import Swal from 'sweetalert2';
import api from "../../services/api";
import useFormValidator from "../../hooks/useFormValidater"

function RegisterContainer() {
  const [formData, setFormData] = useState({});
  const [steps, setSteps] = useState(1);
  const [birthday, setBirthday] = useState(  new Date().toISOString().substr(0, 10));
  const { errors, validate } = useFormValidator(formData,
           ['name' , 'lastname' , 
            'gender' , 'phone' , 
            'email' , 'birthday' , 
            'country' , 'city' , 
            'username' ,'password' , 
            'rePassword' ]);

  const nextStepEventHandler = () => {
    if(steps== 1 ){
      setSteps(steps + 1);
    }else if(steps==2){
      if(Object.keys(errors).length > 0){
        let errText = () => {
         return  Object.values(errors).map(err => {
          
            return `<li>${err}</li>`;
         
          })
        }
        console.log(errText())
       
        Swal.fire({
        
          icon: 'error',
          confirmButtonColor: '#ff385c ',
          confirmButtonText: 'Düzenle',
          html: `<ul style="text-align:initial"> ${errText().join('<br/>')}</ul>`
        });
        return;
      }else{

        Swal.fire({
          title: 'Form Gönderiliyor',
          text: "Vermiş olduğunuz bilgilerin doğruluğunu onaylıyor musunuz ?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#ff385c',
          cancelButtonColor: '#6c757d',
          confirmButtonText: 'Onaylıyorum',
          cancelButtonText: "Vazgeç"
        }).then((result) => {
    
          if (result.value) {
            api.post('/users', formData)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
            Swal.fire( {
             confirmButtonText:"Tamam",
             confirmButtonColor:"#ff385c",
              title :"Form Gönderildi",
              icon:"success"
            }
             
            )
          }
        });
      }
     
    }
  };
  const previousButtonEventHandler = () => {
    if (steps > 1) {
      setSteps(steps - 1);
      setFormData({})
    }
  };

  const submitRegisterFormEventHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
/*
   if(formData.password && formData.rePassword && !(formData.rePassword === formData.password)){
      console.log("şifreler aynı değil")
   }
   */
  };

  let renderingFormStep = () => {
    if (steps === 1) {
      return (
        <StepOneRegister
          submitRegisterFormEventHandler={submitRegisterFormEventHandler}
          formData={formData}
        />
      );
    } else if (steps > 1) {
      return (
        <StepTwoRegister
          submitRegisterFormEventHandler={submitRegisterFormEventHandler}
          formData={formData}
        />
      );
    }
    return null;
  };

  

  return (
    <React.Fragment>
      <div
        style={{
          width: "80%",
          borderStyle: "groove",
          borderRadius: "10px",
          borderColor: "#cfcfe5",
          minHeight:"638px"
        }}
      >
        <section
          style={{
            padding: "5%",
          }}
        >
          <div>
            <h3>Project-x Kayıt Formu</h3>
          </div>
          <Form>
            {renderingFormStep()}

            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Button
                onClick={previousButtonEventHandler}
                disabled={steps === 1 ? true : false}
              >
                Önceki
              </Button>

                <Button
                  onClick={nextStepEventHandler}
                 className={"btn-pink"}
                >
                {
                  (steps == 1) ? "Sonraki" : "Gönder"
                }
                </Button>
              
            </div>
          </Form>
        </section>
      </div>
    </React.Fragment>
  );
}

export default RegisterContainer;
