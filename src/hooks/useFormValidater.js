    import { useCallback } from 'react';

    
    const validationRules = {
        phone: phone => {
        if (!phone || phone === "") {
            return 'Phone is required';
        } else if (!/^\d+$/.test(phone)) {
            return 'Telefon numarası alanı boş bırakılamaz';
        }
        },
        name: name => {
        if (!name || name === "") {
            return 'İsim alanı boş bırakılamaz';
        }
        },
        lastname: lastname => {
            if(!lastname || lastname ===""){
                return "Soy isim alanı boş bırakılamaz";
            }
        },
        gender: gender => {
            if(!gender || gender==="0"){
                return "Cinsiyet alanı boş bırakılamaz";
            }
        },
        email: email => {
            if(!email || email ===""){
                return 'email alanı boş bırakılamaz';
            
            }else if(email){
                const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                const isValid =  emailRegex.test(email);
                if(!isValid){
                    return 'Geçerli bir mail adresi giriniz';    
                }
            }
        },
        birthday : birthday => {
            if(!birthday || birthday === ""){
                return 'Doğum tarihi alanı boş bırakılamaz';
            }
        },
        country: country => {
            if(!country || country === "" && country ==="0"){
                return 'Ülke Seçimi yapmalısınız';
            }
        },
        city: city => {
          if(!city || city ==="0" && city === ""){
            return 'Şehir alanı boş bırakılamaz';
          }
        },
        username : username =>{
            if(!username || username === ""){
                return 'Kullanıcı adı alanı boş bırakılamaz';

            }else if(username && username.lenght <3){
                return 'Kullanıcı adı en az 3 karakterden oluşmalıdır';
            }
        },
        password: password => {
            if(!password || password === ""){
                return "Parola alanı boş bırakılamaz";
            }else if(password && password.lenght < 8){
                return 'Kullanıcı parolanız en az 8 karakterden oluşmalıdır';
            }          
        },
        rePassword: (rePassword) => {
            if(!rePassword || rePassword ===""){  
                    return "Parola tekrar alanı boş bırakılamaz";
            }
         
        }
    };
    function useFormValidator(formData, fields) {
        let errors = {};
        const validateField = useCallback((field, rule) => {
        if (rule) {
            const error = rule(formData[field]);
            if (error) {
            errors[field] = error;
            }
        }
        }, [formData]);
    
        fields.forEach(field => {   
        validateField(field, validationRules[field]);
        });
    return (
        {
            errors,
            validate: useCallback(formData => {
            Object.keys(formData).forEach(field => {
                validateField(field, validationRules[field]);
            });
            }, [formData]),
        }
    );
    }
    export default useFormValidator;