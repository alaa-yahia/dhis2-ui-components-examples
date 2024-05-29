import { CalendarInput } from "@dhis2-ui/calendar";
import { useState } from "react";

function CalendarComponent() {
  const [date, setDate] = useState("2020-07-08");

  const onDateSelect = (selectedDate) => {
    const date = selectedDate?.calendarDateString;
    setDate(date);
  };

  return (
    <div>
      <>
        <CalendarInput
          editable
          date={date}
          calendar="gregory"
          onDateSelect={onDateSelect}
          label="ooo"
          width={"700px"}
          inputWidth="900px"
          timeZone={"UTC"}
          minDate={"2020-07-01"}
          maxDate={"2020-07-09"}
        />
      </>
    </div>
  );
}

export default CalendarComponent;
