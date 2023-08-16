
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "./ReactDatePicker";
import { FormGroup,Input, Button } from "reactstrap";

function ReservationDatePicker(props) {

   const [reservationRequest , setReservationRequest] = useState(false);
   const [startDate, setStartDate] = useState(new Date());
   const reservationRequestHandler = (event) => {
    if(event.name !== undefined){
        setReservationRequest({
            ...reservationRequest,
            [event.name]: event.value
          });
    }else{
    setReservationRequest({
        ...reservationRequest,
        [event.target.name]: event.target.value
      });
    }

   }
  

    return (
        <div className='reservation-date-picker-container '>
            <section className='reservation-card-head'>
                    <span className="reservation-card-head-title py-2">
                       Rezervasyon Tarihi
                    </span>
            </section>

            <section className='reservation-card-body py-2'>
                <div className="reservation-card-body-head">
                <ReactDatePicker
                startDate = {startDate}
                setStartDate = {setStartDate}
                reservationRequestHandler = {reservationRequestHandler}
                />
                <div className="reservation-card-experience-selection">
                <div className="form-check reservation-card-experience-item">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> 
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Deneyim -1    
                    </label>
                </div>

                <div className="form-check  reservation-card-experience-item ">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    Deneyim -2    
                    </label>
                </div>

                <div className="form-check  reservation-card-experience-item">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    Deneyim -3     
                    </label>
                </div>
                </div>
                </div>
                    
                    
                  <div className="date-picker-message-area">
                    <FormGroup className="py-3 mx-2">
                            <Input  type="textarea" name="text_msg" id="Mesajınızı burada iletebilirsiniz" 
                            onChange={(e) => {reservationRequestHandler(e)}}/>
                    </FormGroup>
                    <FormGroup>
                        <Button className="reservation-submit-button mx-2"
                        onClick={(() => alert(reservationRequest.date_time + " " + "tarihinde" + " " +  reservationRequest.text_msg + 'istediniz'))}
                        >
                                    Gönder
                        </Button>
                    </FormGroup>
                  </div>
            </section>
            <section className="reservation-card-footer">
              
            </section>
        </div>
    );
}

export default ReservationDatePicker;