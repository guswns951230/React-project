import { useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import interactionPlugin from "@fullcalendar/interaction";

import DataContext from "../context/DataContext";

import "../css/fullcalendar.css";

const Calendar = () => {
  const { state } = useContext(DataContext);

  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
    console.log(arg);
  };

  let reservationTime = "";
  const reservation = (e) => {
    e.preventDefault();

    const time = document.getElementsByName("time");
    if (state.user == "" || state.user == null) {
      alert("예약을 위해 로그인이 필요합니다.");
    } else {
      time.forEach((node) => {
        if (node.checked) {
          reservationTime = node.value;
        }
      });
    }
    console.log(reservationTime);
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        googleCalendarApiKey={"AIzaSyCsJX6dlviGPCL6XLQ_yIpn9f2PwZiNAFY"}
        events={[]}
        eventDisplay={"block"}
        eventTextColor={"#FFF"}
        eventColor={"#F2921D"}
        height={"660px"}
        dateClick={handleDateClick}
        // Toolbar
      />
      <form onSubmit={reservation}>
        <label>
          <input type="radio" name="time" value="10:00" />
          &nbsp;10:00
        </label>
        &nbsp;&nbsp;
        <label>
          <input type="radio" name="time" value="11:00" />
          &nbsp;11:00
        </label>
        &nbsp;&nbsp;
        <label>
          <input type="radio" name="time" value="12:00" />
          &nbsp;12:00
        </label>
        &nbsp;&nbsp;
        <label>
          <input type="radio" name="time" value="13:00" />
          &nbsp;13:00
        </label>
        <br />
        <label>
          <input type="radio" name="time" value="14:00" />
          &nbsp;14:00
        </label>
        &nbsp;&nbsp;
        <label>
          <input type="radio" name="time" value="15:00" />
          &nbsp;15:00
        </label>
        &nbsp;&nbsp;
        <label>
          <input type="radio" name="time" value="16:00" />
          &nbsp;16:00
        </label>
        &nbsp;&nbsp;
        <label>
          <input type="radio" name="time" value="17:00" />
          &nbsp;17:00
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Calendar;
