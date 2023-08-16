import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import tr from 'date-fns/locale/tr';
import { subDays, addDays } from 'date-fns';
import { useContext } from "react";
import { Context } from "../../context/context";

function ReactDatePicker(props) { 
  const {startDate, setStartDate , reservationRequestHandler } = props;
  const context = useContext(Context);

  const allowedTimes =  context.userProfileData.allowed_times &&
  JSON.parse(context.userProfileData.allowed_times['vars']) ?
  JSON.parse(context.userProfileData.allowed_times['vars']) :
  [];

  
  //change format of days of week 
  const allowedDaysOfWeek = [] 
  for (let i = 0; i < Object.keys(allowedTimes).length; i++) {
    let number = Number( Object.keys(allowedTimes)[i]);
    if (!isNaN(number)) {
      allowedDaysOfWeek.push(number);
    }
  }

  const reservationDatePickerOncChangeEventHandler = (date) => {
    setStartDate(date);
    const reservationObject  = {
      name: "date_time",
      value : startDate
    }
    reservationRequestHandler(reservationObject)
  }


  function getAllowedDates() {
    const currentDate = new Date();
    const next2Months = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 1);
    const allowedDates = [];
    let currentDateIndex = currentDate;
    while (currentDateIndex < next2Months) {
      const dayOfWeek = currentDateIndex.getDay();
      if (allowedDaysOfWeek.includes(dayOfWeek)) {
        const allowedTimesForDay = allowedTimes[dayOfWeek].map(time => {
          const [hour, minute = '00'] = time.split(':');
          const date = new Date(currentDateIndex.getFullYear(), currentDateIndex.getMonth(), currentDateIndex.getDate(), Number(hour), Number(minute));
          return date;
        });
        allowedDates.push(...allowedTimesForDay);
      }
      currentDateIndex.setDate(currentDateIndex.getDate() + 1);
    }
    return allowedDates;
  }
  
  function getAllowedTimes(date) {
    const dayOfWeek = date.getDay();
    if (allowedDaysOfWeek.includes(dayOfWeek)) {
      return allowedTimes[dayOfWeek].map(time => {
        const [hour, minute = '00'] = time.split(':');
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number(hour), Number(minute));
      });
    }
    return [];
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={date => reservationDatePickerOncChangeEventHandler(date)}
      minDate={subDays(new Date(), 0)}
      maxDate={addDays(new Date(), 60)}
      filterTime={time => getAllowedTimes(startDate).some(allowedTime => time.getTime() === allowedTime.getTime())}
      includeDates = {getAllowedDates()}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={60}
      timeCaption="Saat"
      dateFormat="d MMMM yyyy, EEEE"
      placeholderText="Tarih seçiniz"
      shouldCloseOnSelect={false}
      locale={tr}
    />
  );
}

export default ReactDatePicker;