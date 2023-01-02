import { useState } from 'react';

function useFormValues() {
  const [formValues, setFormValues] = useState({});

  function handleChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (event.target.name === "email" && !emailRegex.test(event.target.value)) {
      
      return {
        result : "error",
        message : "Email is not valid"
      };
    }
  
  
    // Form geçerliyse, form verilerini gönderin veya işlemi tamamlayın
    // ...
  }

  return { formValues, setFormValues: handleChange , handleSubmit };
}

export default useFormValues;