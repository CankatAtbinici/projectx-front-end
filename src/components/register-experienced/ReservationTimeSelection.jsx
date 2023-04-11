import React from "react";
import { Button, ButtonGroup, Input } from "reactstrap";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/context";

function ReservationTimeSelection(props) {
  const { registerSteps } = props;
  
  const context = useContext(Context)
  const [sundaySelected, setSundaySelected] = useState([]) 
  const [mondaySelected, setMondaySelected] = useState([]);
  const [tuesdaySelected, setTuesdaySelected] = useState([]) 
  const [wednesdaySelected, setWednesdaySelected] = useState([]) 
  const [thursdaySelected, setThursdaySelected] = useState([]) 
  const [fridaySelected, setFridaySelected] = useState([]) 
  const [saturdaySelected, setSaturdaySelected] = useState([]) 


  //SelectedDays
  const [daySelected, setDaySelected] = useState([]);
 

  const wednesdayCheckBoxEventHandler = (selected) => {
    const index = wednesdaySelected.indexOf(selected);
    if (index < 0) {
      wednesdaySelected.push(selected);
    } else {
      wednesdaySelected.splice(index, 1);
    }
    setWednesdaySelected([...wednesdaySelected]);
  };

  const fridayCheckBoxEventHandler =  (selected) => {
    const index = fridaySelected.indexOf(selected);
    if (index < 0) {
      fridaySelected.push(selected);
    } else {
      fridaySelected.splice(index, 1);
    }
  
    setFridaySelected([...fridaySelected]);
  };
  const sundayCheckBoxEventHandler = (selected) => {
    const index = sundaySelected.indexOf(selected);
    if (index < 0) {
      sundaySelected.push(selected);
    } else {
      sundaySelected.splice(index, 1);
    }
  
    setSaturdaySelected([...saturdaySelected]);
  };
  const saturdayCheckboxEventHandler =  (selected) => {
    const index = saturdaySelected.indexOf(selected);
    if (index < 0) {
      saturdaySelected.push(selected);
    } else {
      saturdaySelected.splice(index, 1);
    }
  
    setSaturdaySelected([...saturdaySelected]);
  };

  const thursdayCheckBoxEventHandler = (selected) => {
    const index = thursdaySelected.indexOf(selected);
    if (index < 0) {
      thursdaySelected.push(selected);
    } else {
      thursdaySelected.splice(index, 1);
    }
  
    setThursdaySelected([...thursdaySelected]);
  };


  const tuesdayCheckBoxEventHandler = (selected) => {
    const index = tuesdaySelected.indexOf(selected);
    if (index < 0) {
      tuesdaySelected.push(selected);
    } else {
      tuesdaySelected.splice(index, 1);
    }
    setTuesdaySelected([...tuesdaySelected]);
  };

  const mondayCheckBoxHandler = (selected) => {
    const index = mondaySelected.indexOf(selected);
    if (index < 0) {
      mondaySelected.push(selected);
    } else {
      mondaySelected.splice(index, 1);
    }
    setMondaySelected([...mondaySelected]);
  };

  
  const onDayCheckboxBtnClick = (selected) => {
    const index = daySelected.indexOf(selected);
    if (index < 0) {
      daySelected.push(selected);
    } else {
      daySelected.splice(index, 1);
     switch (selected) {
      case 1:
        setMondaySelected([])
        break;
        case 2:
          setTuesdaySelected([])
          break;
          case 3:
            setWednesdaySelected([])
            break;
            case 4:
              setThursdaySelected([])
              break;
              case 5:
                setFridaySelected([])
                break;
                case 6:
                  setSaturdaySelected([])
                  break;
                  case 0:
                    setSundaySelected([])
                    break;
     
      default:
        break;
     }
    }
    setDaySelected([...daySelected]);
  };

  

  const sendReservationTimesEventHandler = () => {
    let timeObject = {};
  
    daySelected.forEach((day) => {
      switch (day) {
        case 1:
          timeObject = { ...timeObject, [day]: mondaySelected };
          break;
          case 2:
            timeObject = { ...timeObject, [day]:tuesdaySelected};
            break;
            case 3: 
            timeObject = {...timeObject, [day]: wednesdaySelected};
            break;
            case 4: 
            timeObject = {...timeObject, [day]: thursdaySelected };
            break;
            case 5: 
            timeObject = {...timeObject, [day]: fridaySelected };
            break;
            case 6: 
            timeObject = {...timeObject, [day]: saturdaySelected };
            break;
            case 0: 
            timeObject = {...timeObject, [day]: sundaySelected };
            break;
        default:
          break;
      }
    });
context.setReservationTimeSubmitObject(timeObject)
console.log(context.reservationTimeSubmitObject)
  };

  return (
    <div
      className="reservation-selection-container box-shadow py-4"
      hidden={registerSteps === 1 ? false : true}
    >
      <div className="reservation-selection-items">
        <div className="reservation-items-top py-2">
          <span className="reservation-items-top-title">Resevasyon Takvimi</span>
          <span className="reservation-items-top-content">
            {" "}
            Lütfen görüşmek için müsait olduğunuz gün ve saatleri seçiniz
          </span>
        </div>

        <div className="reservation-items-body">
          <div>
          <ButtonGroup>
              <Button
              className="reservation-day-selection-button"
                color="primary"
                outline
                onClick={() => onDayCheckboxBtnClick(1)}
                active={daySelected.includes(1)}
              >
               Pazartesi
              </Button>
              </ButtonGroup>
                 <ButtonGroup
                 hidden = {daySelected.includes(1) ? false : true}
                 >
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('00:00')}
                active={mondaySelected.includes('00:00')}
              >
                00:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('01:00')}
                active={mondaySelected.includes('01:00')}
              >
                01:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('02:00')}
                active={mondaySelected.includes('02:00')}
              >
                02:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('03:00')}
                active={mondaySelected.includes('03:00')}
              >
                03:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('04:00')}
                active={mondaySelected.includes('04:00')}
              >
                04:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('05:00')}
                active={mondaySelected.includes('05:00')}
              >
                05:00
              </Button> <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('06:00')}
                active={mondaySelected.includes('06:00')}
              >
                06:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('07:00')}
                active={mondaySelected.includes('07:00')}
              >
                07:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('08:00')}
                active={mondaySelected.includes('08:00')}
              >
                08:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('09:00')}
                active={mondaySelected.includes('09:00')}
              >
                09:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('10:00')}
                active={mondaySelected.includes('10:00')}
              >
                10:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('11:00')}
                active={mondaySelected.includes('11:00')}
              >
                11:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('12:00')}
                active={mondaySelected.includes('12:00')}
              >
                12:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('13:00')}
                active={mondaySelected.includes('13:00')}
              >
                13:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('14:00')}
                active={mondaySelected.includes('14:00')}
              >
                14:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('15:00')}
                active={mondaySelected.includes('15:00')}
              >
                15:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('16:00')}
                active={mondaySelected.includes('16:00')}
              >
                16:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('17:00')}
                active={mondaySelected.includes('17:00')}
              >
                17:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('18:00')}
                active={mondaySelected.includes('18:00')}
              >
                18:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('19:00')}
                active={mondaySelected.includes('19:00')}
              >
                19:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('20:00')}
                active={mondaySelected.includes('20:00')}
              >
                20:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('21:00')}
                active={mondaySelected.includes('21:00')}
              >
                21:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('22:00')}
                active={mondaySelected.includes('22:00')}
              >
                22:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => mondayCheckBoxHandler('23:00')}
                active={mondaySelected.includes('23:00')}
              >
                23:00
              </Button>
            </ButtonGroup>
          </div>
          
        </div>

        <div className="reservation-items-body">
          <div>
          <ButtonGroup>
              <Button
              className="reservation-day-selection-button"
                color="primary"
                outline
                onClick={() => onDayCheckboxBtnClick(2)}
                active={daySelected.includes(2)}
              >
               Salı
              </Button>
              </ButtonGroup>
                 <ButtonGroup
                 hidden = {daySelected.includes(2) ? false : true}
                 >
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('00:00')}
                active={tuesdaySelected.includes('00:00')}
              >
                00:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('01:00')}
                active={tuesdaySelected.includes('01:00')}
              >
                01:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('02:00')}
                active={tuesdaySelected.includes('02:00')}
              >
                02:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('03:00')}
                active={tuesdaySelected.includes('03:00')}
              >
                03:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('04:00')}
                active={tuesdaySelected.includes('04:00')}
              >
                04:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('05:00')}
                active={tuesdaySelected.includes('05:00')}
              >
                05:00
              </Button> <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('06:00')}
                active={tuesdaySelected.includes('06:00')}
              >
                06:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('07:00')}
                active={tuesdaySelected.includes('07:00')}
              >
                07:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('08:00')}
                active={tuesdaySelected.includes('08:00')}
              >
                08:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('09:00')}
                active={tuesdaySelected.includes('09:00')}
              >
                09:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('10:00')}
                active={tuesdaySelected.includes('10:00')}
              >
                10:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('11:00')}
                active={tuesdaySelected.includes('11:00')}
              >
                11:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('12:00')}
                active={tuesdaySelected.includes('12:00')}
              >
                12:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('13:00')}
                active={tuesdaySelected.includes('13:00')}
              >
                13:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('14:00')}
                active={tuesdaySelected.includes('14:00')}
              >
                14:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('15:00')}
                active={tuesdaySelected.includes('15:00')}
              >
                15:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('16:00')}
                active={tuesdaySelected.includes('16:00')}
              >
                16:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('17:00')}
                active={tuesdaySelected.includes('17:00')}
              >
                17:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('18:00')}
                active={tuesdaySelected.includes('18:00')}
              >
                18:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('19:00')}
                active={tuesdaySelected.includes('19:00')}
              >
                19:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('20:00')}
                active={tuesdaySelected.includes('20:00')}
              >
                20:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('21:00')}
                active={tuesdaySelected.includes('21:00')}
              >
                21:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('22:00')}
                active={tuesdaySelected.includes('22:00')}
              >
                22:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => tuesdayCheckBoxEventHandler('23:00')}
                active={tuesdaySelected.includes('23:00')}
              >
                23:00
              </Button>
            </ButtonGroup>
          </div>
          
        </div>

        <div className="reservation-items-body">
          <div>
          <ButtonGroup>
              <Button
                className="reservation-day-selection-button"
                color="primary"
                outline
                onClick={() => onDayCheckboxBtnClick(3)}
                active={daySelected.includes(3)}
              >
               Çarşamba
              </Button>
              </ButtonGroup>
                 <ButtonGroup
                 hidden = {daySelected.includes(3) ? false : true}
                 >
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('00:00')}
                active={wednesdaySelected.includes('00:00')}
              >
                00:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('01:00')}
                active={wednesdaySelected.includes('01:00')}
              >
                01:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('02:00')}
                active={wednesdaySelected.includes('02:00')}
              >
                02:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('03:00')}
                active={wednesdaySelected.includes('03:00')}
              >
                03:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('04:00')}
                active={wednesdaySelected.includes('04:00')}
              >
                04:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('05:00')}
                active={wednesdaySelected.includes('05:00')}
              >
                05:00
              </Button> <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('06:00')}
                active={wednesdaySelected.includes('06:00')}
              >
                06:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('07:00')}
                active={wednesdaySelected.includes('07:00')}
              >
                07:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('08:00')}
                active={wednesdaySelected.includes('08:00')}
              >
                08:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('09:00')}
                active={wednesdaySelected.includes('09:00')}
              >
                09:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('10:00')}
                active={wednesdaySelected.includes('10:00')}
              >
                10:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('11:00')}
                active={wednesdaySelected.includes('11:00')}
              >
                11:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('12:00')}
                active={wednesdaySelected.includes('12:00')}
              >
                12:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('13:00')}
                active={wednesdaySelected.includes('13:00')}
              >
                13:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('14:00')}
                active={wednesdaySelected.includes('14:00')}
              >
                14:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('15:00')}
                active={wednesdaySelected.includes('15:00')}
              >
                15:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('16:00')}
                active={wednesdaySelected.includes('16:00')}
              >
                16:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('17:00')}
                active={wednesdaySelected.includes('17:00')}
              >
                17:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('18:00')}
                active={wednesdaySelected.includes('18:00')}
              >
                18:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('19:00')}
                active={wednesdaySelected.includes('19:00')}
              >
                19:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('20:00')}
                active={wednesdaySelected.includes('20:00')}
              >
                20:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('21:00')}
                active={wednesdaySelected.includes('21:00')}
              >
                21:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('22:00')}
                active={wednesdaySelected.includes('22:00')}
              >
                22:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => wednesdayCheckBoxEventHandler('23:00')}
                active={wednesdaySelected.includes('23:00')}
              >
                23:00
              </Button>
            </ButtonGroup>
          </div>
          
        </div>
          <div className="reservation-items-body">
          <div>
          <ButtonGroup>
              <Button
                color="primary"
                className="reservation-day-selection-button"
                outline
                onClick={() => onDayCheckboxBtnClick(4)}
                active={daySelected.includes(4)}
              >
               Perşembe
              </Button>
              </ButtonGroup>
                 <ButtonGroup
                 hidden = {daySelected.includes(4) ? false : true}
                 >
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('00:00')}
                active={thursdaySelected.includes('00:00')}
              >
                00:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('01:00')}
                active={thursdaySelected.includes('01:00')}
              >
                01:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('02:00')}
                active={thursdaySelected.includes('02:00')}
              >
                02:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('03:00')}
                active={thursdaySelected.includes('03:00')}
              >
                03:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('04:00')}
                active={thursdaySelected.includes('04:00')}
              >
                04:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('05:00')}
                active={thursdaySelected.includes('05:00')}
              >
                05:00
              </Button> <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('06:00')}
                active={thursdaySelected.includes('06:00')}
              >
                06:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('07:00')}
                active={thursdaySelected.includes('07:00')}
              >
                07:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('08:00')}
                active={thursdaySelected.includes('08:00')}
              >
                08:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('09:00')}
                active={thursdaySelected.includes('09:00')}
              >
                09:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('10:00')}
                active={thursdaySelected.includes('10:00')}
              >
                10:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('11:00')}
                active={thursdaySelected.includes('11:00')}
              >
                11:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('12:00')}
                active={thursdaySelected.includes('12:00')}
              >
                12:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('13:00')}
                active={thursdaySelected.includes('13:00')}
              >
                13:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('14:00')}
                active={thursdaySelected.includes('14:00')}
              >
                14:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('15:00')}
                active={thursdaySelected.includes('15:00')}
              >
                15:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('16:00')}
                active={thursdaySelected.includes('16:00')}
              >
                16:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('17:00')}
                active={thursdaySelected.includes('17:00')}
              >
                17:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('18:00')}
                active={thursdaySelected.includes('18:00')}
              >
                18:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('19:00')}
                active={thursdaySelected.includes('19:00')}
              >
                19:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('20:00')}
                active={thursdaySelected.includes('20:00')}
              >
                20:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('21:00')}
                active={thursdaySelected.includes('21:00')}
              >
                21:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('22:00')}
                active={thursdaySelected.includes('22:00')}
              >
                22:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => thursdayCheckBoxEventHandler('23:00')}
                active={thursdaySelected.includes('23:00')}
              >
                23:00
              </Button>
            </ButtonGroup>
          </div>
          
        </div>
        <div className="reservation-items-body">
          <div>
          <ButtonGroup>
              <Button
                color="primary"
                className="reservation-day-selection-button"
                outline
                onClick={() => onDayCheckboxBtnClick(5)}
                active={daySelected.includes(5)}
              >
               Cuma
              </Button>
              </ButtonGroup>
                 <ButtonGroup
                 hidden = {daySelected.includes(5) ? false : true}
                 >
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('00:00')}
                active={fridaySelected.includes('00:00')}
              >
                00:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('01:00')}
                active={fridaySelected.includes('01:00')}
              >
                01:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('02:00')}
                active={fridaySelected.includes('02:00')}
              >
                02:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('03:00')}
                active={fridaySelected.includes('03:00')}
              >
                03:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('04:00')}
                active={fridaySelected.includes('04:00')}
              >
                04:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('05:00')}
                active={fridaySelected.includes('05:00')}
              >
                05:00
              </Button> <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('06:00')}
                active={fridaySelected.includes('06:00')}
              >
                06:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('07:00')}
                active={fridaySelected.includes('07:00')}
              >
                07:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('08:00')}
                active={fridaySelected.includes('08:00')}
              >
                08:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('09:00')}
                active={fridaySelected.includes('09:00')}
              >
                09:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('10:00')}
                active={fridaySelected.includes('10:00')}
              >
                10:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('11:00')}
                active={fridaySelected.includes('11:00')}
              >
                11:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('12:00')}
                active={fridaySelected.includes('12:00')}
              >
                12:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('13:00')}
                active={fridaySelected.includes('13:00')}
              >
                13:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('14:00')}
                active={fridaySelected.includes('14:00')}
              >
                14:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('15:00')}
                active={fridaySelected.includes('15:00')}
              >
                15:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('16:00')}
                active={fridaySelected.includes('16:00')}
              >
                16:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('17:00')}
                active={fridaySelected.includes('17:00')}
              >
                17:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('18:00')}
                active={fridaySelected.includes('18:00')}
              >
                18:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('19:00')}
                active={fridaySelected.includes('19:00')}
              >
                19:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('20:00')}
                active={fridaySelected.includes('20:00')}
              >
                20:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('21:00')}
                active={fridaySelected.includes('21:00')}
              >
                21:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('22:00')}
                active={fridaySelected.includes('22:00')}
              >
                22:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => fridayCheckBoxEventHandler('23:00')}
                active={fridaySelected.includes('23:00')}
              >
                23:00
              </Button>
            </ButtonGroup>
          </div>
          
        </div>
        <div className="reservation-items-body">
          <div>
          <ButtonGroup>
              <Button
                color="primary"
                className="reservation-day-selection-button"
                outline
                onClick={() => onDayCheckboxBtnClick(6)}
                active={daySelected.includes(6)}
              >
               Cumartesi
              </Button>
              </ButtonGroup>
                 <ButtonGroup
                 hidden = {daySelected.includes(6) ? false : true}
                 >
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('00:00')}
                active={saturdaySelected.includes('00:00')}
              >
                00:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('01:00')}
                active={saturdaySelected.includes('01:00')}
              >
                01:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('02:00')}
                active={saturdaySelected.includes('02:00')}
              >
                02:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('03:00')}
                active={saturdaySelected.includes('03:00')}
              >
                03:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('04:00')}
                active={saturdaySelected.includes('04:00')}
              >
                04:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('05:00')}
                active={saturdaySelected.includes('05:00')}
              >
                05:00
              </Button> <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('06:00')}
                active={saturdaySelected.includes('06:00')}
              >
                06:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('07:00')}
                active={saturdaySelected.includes('07:00')}
              >
                07:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('08:00')}
                active={saturdaySelected.includes('08:00')}
              >
                08:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('09:00')}
                active={saturdaySelected.includes('09:00')}
              >
                09:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('10:00')}
                active={saturdaySelected.includes('10:00')}
              >
                10:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('11:00')}
                active={saturdaySelected.includes('11:00')}
              >
                11:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('12:00')}
                active={saturdaySelected.includes('12:00')}
              >
                12:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('13:00')}
                active={saturdaySelected.includes('13:00')}
              >
                13:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('14:00')}
                active={saturdaySelected.includes('14:00')}
              >
                14:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('15:00')}
                active={saturdaySelected.includes('15:00')}
              >
                15:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('16:00')}
                active={saturdaySelected.includes('16:00')}
              >
                16:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('17:00')}
                active={saturdaySelected.includes('17:00')}
              >
                17:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('18:00')}
                active={saturdaySelected.includes('18:00')}
              >
                18:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('19:00')}
                active={saturdaySelected.includes('19:00')}
              >
                19:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('20:00')}
                active={saturdaySelected.includes('20:00')}
              >
                20:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('21:00')}
                active={saturdaySelected.includes('21:00')}
              >
                21:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('22:00')}
                active={saturdaySelected.includes('22:00')}
              >
                22:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => saturdayCheckboxEventHandler('23:00')}
                active={saturdaySelected.includes('23:00')}
              >
                23:00
              </Button>
            </ButtonGroup>
          </div>
          
        </div>
        <div className="reservation-items-body">
          <div>
          <ButtonGroup>
              <Button
                color="primary"
                className="reservation-day-selection-button"
                outline
                onClick={() => onDayCheckboxBtnClick(0)}
                active={daySelected.includes(0)}
              >
               Pazar
              </Button>
              </ButtonGroup>
                 <ButtonGroup
                 hidden = {daySelected.includes(0) ? false : true}
                 >
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('00:00')}
                active={sundaySelected.includes('00:00')}
              >
                00:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('01:00')}
                active={sundaySelected.includes('01:00')}
              >
                01:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('02:00')}
                active={sundaySelected.includes('02:00')}
              >
                02:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('03:00')}
                active={sundaySelected.includes('03:00')}
              >
                03:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('04:00')}
                active={sundaySelected.includes('04:00')}
              >
                04:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('05:00')}
                active={sundaySelected.includes('05:00')}
              >
                05:00
              </Button> <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('06:00')}
                active={sundaySelected.includes('06:00')}
              >
                06:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() =>sundayCheckBoxEventHandler('07:00')}
                active={sundaySelected.includes('07:00')}
              >
                07:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('08:00')}
                active={sundaySelected.includes('08:00')}
              >
                08:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('09:00')}
                active={sundaySelected.includes('09:00')}
              >
                09:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('10:00')}
                active={sundaySelected.includes('10:00')}
              >
                10:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('11:00')}
                active={sundaySelected.includes('11:00')}
              >
                11:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('12:00')}
                active={sundaySelected.includes('12:00')}
              >
                12:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('13:00')}
                active={sundaySelected.includes('13:00')}
              >
                13:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('14:00')}
                active={sundaySelected.includes('14:00')}
              >
                14:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('15:00')}
                active={sundaySelected.includes('15:00')}
              >
                15:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('16:00')}
                active={sundaySelected.includes('16:00')}
              >
                16:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('17:00')}
                active={sundaySelected.includes('17:00')}
              >
                17:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('18:00')}
                active={sundaySelected.includes('18:00')}
              >
                18:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('19:00')}
                active={sundaySelected.includes('19:00')}
              >
                19:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('20:00')}
                active={sundaySelected.includes('20:00')}
              >
                20:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('21:00')}
                active={sundaySelected.includes('21:00')}
              >
                21:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('22:00')}
                active={sundaySelected.includes('22:00')}
              >
                22:00
              </Button>
              <Button
                color="primary"
                outline
                onClick={() => sundayCheckBoxEventHandler('23:00')}
                active={sundaySelected.includes('23:00')}
              >
                23:00
              </Button>
            </ButtonGroup>
          </div>
          
        </div>


      </div>

        <div className="reservation-selection-footer">
        <div>
          <Button
          className="send-reservation-btn btn-pink"
          onClick={sendReservationTimesEventHandler}
          >
           Kaydet
          </Button>
        </div>
        </div>
    </div>
  );
}

export default ReservationTimeSelection;
