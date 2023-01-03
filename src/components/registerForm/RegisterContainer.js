import React, { useState } from "react";
import StepOneRegister from "./StepOneRegister";
import StepTwoRegister from "./StepTwoRegister";
import { Button, Form } from "reactstrap";
import Swal from 'sweetalert2';

function RegisterContainer() {

  const [steps, setSteps] = useState(1);
  const [birthday, setBirthday] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [formData, setFormData] = useState({});

  const nextStepEventHandler = () => {
    if(steps== 1 ){
      setSteps(steps + 1);
    }else if(steps==2){
      Swal.fire({
        title: 'Form Gönderiliyor',
        text: "Vermiş olduğunuz bilgilerin doğruluğunu onaylıyor musunuz ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Onaylıyorum',
        cancelButtonText: "Vazgeç"
      }).then((result) => {
        if (result.value) {
          Swal.fire( {
           confirmButtonText:"Tamam",
            title :"Form Gönderildi",
            icon:"success"
          }
           
          )
        }
      });
    }
  };
  const previousButtonEventHandler = () => {
    if (steps > 1) {
      setSteps(steps - 1);
    }
  };

  const submitRegisterFormEventHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });

    console.log(formData);
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
                  style={{
                    background: "#04AA6D",
                  }}
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
