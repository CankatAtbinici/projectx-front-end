
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "./ReactDatePicker";
import { FormGroup,Label,Input, Button } from "reactstrap";

function ReservationDatePicker(props) {

    return (
        <div className='reservation-date-picker-container '>
            <section className='reservation-card-head'>
                    <span className="reservation-card-head-title py-2">
                       Rezervasyon Tarihi
                    </span>
            </section>

            <section className='reservation-card-body py-2'>
                <div className="reservation-card-body-head">
                <ReactDatePicker/>
                <div className="reservation-card-experience-selection">
                <div class="form-check reservation-card-experience-item">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> 
                    <label class="form-check-label" for="flexCheckDefault">
                        Deneyim -1    
                    </label>
                </div>

                <div class="form-check  reservation-card-experience-item ">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                    <label class="form-check-label" for="flexCheckDefault">
                    Deneyim -2    
                    </label>
                </div>

                <div class="form-check  reservation-card-experience-item">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
                    <label class="form-check-label" for="flexCheckDefault">
                    Deneyim -3     
                    </label>
                </div>
                </div>
                </div>
                    
                    
                  <div className="date-picker-message-area">
                    <FormGroup className="py-3 mx-2">
                            <Input  type="textarea" name="text" id="reservation-text-content" placeholder="Reservasyon hakkında söylemek istediklerinizi buraya yazabilirsiniz" />
                    </FormGroup>
                    <FormGroup>
                        <Button className="reservation-submit-button mx-2">
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