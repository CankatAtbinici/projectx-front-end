import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import tr from 'date-fns/locale/tr';



function ReactDatePicker(props) {
    const [startDate, setStartDate] = useState(new Date());
    
    //RESERVASYON OLAN TARİHLERİN SEÇİLMESİNİ ENGELLEMEK İÇİN BU PROPS KULLLANILABİLİR
    const excludeTimes = [
        new Date(2023, 1, 25, 12, 30), // 25 Şubat 2023, 12:30
        new Date(2023, 1, 25, 13, 30), // 25 Şubat 2023, 13:30
        new Date(2023, 1, 25, 14, 30), // 25 Şubat 2023, 14:30
     
      ];


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
        excludeTimes = {excludeTimes}
      />
    </div>
        </div>
    );
}

export default ReactDatePicker;