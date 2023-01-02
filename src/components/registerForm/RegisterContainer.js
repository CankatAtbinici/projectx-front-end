import React, { useState } from "react";
import StepOneRegister from "./StepOneRegister";
import StepTwoRegister from "./StepTwoRegister";
import { Button, Form } from "reactstrap";

function RegisterContainer() {
  const [steps, setSteps] = useState(1);
  const [birthday, setBirthday] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [formData, setFormData] = useState({});

  const nextStepEventHandler = () => {
    setSteps(steps + 1);
    console.log(steps);
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
                  Sonraki
                </Button>
              
            </div>
          </Form>
        </section>
      </div>
    </React.Fragment>
  );
}

export default RegisterContainer;
