import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import tr from 'date-fns/locale/tr';
import { subDays, addDays } from 'date-fns';



function ReactDatePicker(props) {
    const [startDate, setStartDate] = useState(new Date());
    

    

    const freeDays = [2,5]
    const includeDateIntervals = [{ start: addDays(new Date(), 1), end: addDays(new Date(),6) }];
  const includeDates = () => {
    const dates = [];
    const startDate = new Date();
    while (dates.length < 10) {
      const day = startDate.getDay();
      if (freeDays.includes(day)) {
        dates.push(new Date(startDate.getTime()));
      }
      startDate.setDate(startDate.getDate() + 1);
    }
    return dates;
  };


    return (
        <div>
        <div className="date-picker-container">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="dd/MM/yyyy HH:mm"
        timeCaption="Saat"
        locale={tr}
        includeDateIntervals={includeDateIntervals}
        includeDates={includeDates()}



      />
    </div>
        </div>
    );
}

export default ReactDatePicker;