import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import tr from 'date-fns/locale/tr';
import { subDays, addDays } from 'date-fns';

function ReactDatePicker(props) {
  const allowedTimes = {
    6: [ // Cumartesi
      "14:00",
      "15:00",
      "16:00"
    ],
    0: [ // Pazar
      "12:00",
      "13:00",
      "14:00",
      "15:00"
    ],
    1: [ // Pazartesi
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00"
    ]
  };
  const [startDate, setStartDate] = useState(new Date());
  const [dynamicAllowedTimes, setDynamicAllowedTimes] = useState(allowedTimes); // buraya dinamik data gelecek
  const allowedDaysOfWeek = [6, 0 , 1]; // Cumartesi ve Pazar ve Pazartesi buraya gelen datanın keyleri gelecek bu günler seçilebilir olanlar


  function getAllowedDates() {
    const currentDate = new Date();
    const next2Months = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 1);
    const allowedDates = [];
    let currentDateIndex = currentDate;
    while (currentDateIndex < next2Months) {
      const dayOfWeek = currentDateIndex.getDay();
      if (allowedDaysOfWeek.includes(dayOfWeek)) {
        const allowedTimesForDay = dynamicAllowedTimes[dayOfWeek].map(time => {
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
      return dynamicAllowedTimes[dayOfWeek].map(time => {
        const [hour, minute = '00'] = time.split(':');
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number(hour), Number(minute));
      });
    }
    return [];
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
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