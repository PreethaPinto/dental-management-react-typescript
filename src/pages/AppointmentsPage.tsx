import { useEffect, useRef, useState } from 'react';
import AddButton from '../components/AddButton';
import AppointmentsModalWindow from '../components/AppointmentsModalWindow';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AppointmentForm, { FormFields } from '../components/AppointmentForm';
import { patientColumns } from '../columns/patientColumns';
import { useForm } from 'react-hook-form';
import { Height } from '@mui/icons-material';
import AppointmentDetailsPopover from '../components/AppointmentDetailsPopover';
import { Box, Paper } from '@mui/material';

type DateInput = Date | string | null;

const Appointments = () => {
  const [openCalendarModal, setOpenCalendarModal] = useState(false);
  const [formData, setFormData] = useState<FormFields | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [endSelectedDate, setEndSelectedDate] = useState<DateInput>(null);
  const [calendarApi, setCalendarApi] = useState<any>(null);
  const [hoveredEvent, setHoveredEvent] = useState<any>(null);
  const [clickedEvent, setClickedEvent] = useState<any>(null);

  const [cellHeight, setCellHeight] = useState(50);
  const calendarRef = useRef<FullCalendar>(null);

  const handleCloseCalendarModal = () => {
    setOpenCalendarModal(false);
  };

  const handleAppointmentForm = (formData: FormFields) => {
    setFormData(formData);
    setOpenCalendarModal(false);
    if (selectedDate && endSelectedDate && formData) {
      console.log(selectedDate);
      console.log(endSelectedDate);

      const { patientName, dentistName, notes } = formData;

      if (calendarApi) {
        calendarApi.addEvent({
          title: patientName,
          extendedProps: {
            patientName: patientName,
            dentistName: dentistName,
            notes: notes,
          },
          start: selectedDate,
          end: endSelectedDate,
        });
      }
    }
  };

  const handleDateClick = (selected) => {
    console.log(selected);
    setOpenCalendarModal(true);
    setSelectedDate(selected.startStr);
    setEndSelectedDate(selected.endStr);
    setCalendarApi(selected.view.calendar);
  };

  const handleEventClick = (info) => {
    setClickedEvent(info.event); // Update state with clicked event data
  };

  const handleEventMouseEnter = (info) => {
    setHoveredEvent(info.event); // Update state with hovered event data
  };

  const handleEventMouseLeave = () => {
    setHoveredEvent(null); // Reset state when mouse leaves event
  };

  return (
    <>
          <Paper sx={{ width: "100%", overflow: "hidden", display: 'flex' }}>

        <div style={{ flex: '80%' }}>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView='timeGridWeek'
            headerToolbar={{
              start: 'today prev,next',
              center: 'title',
              end: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            height={'80vh'}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventMouseEnter={handleEventMouseEnter} // Handle event mouse enter
            eventMouseLeave={handleEventMouseLeave}
          />
        </div>

          <div style={{border: '2px solid black', flex: '20%', marginTop: '66px'}}>
        <AppointmentDetailsPopover
          event={hoveredEvent || clickedEvent}
          onClose={() => setClickedEvent(null)}
        />
        </div>
            </Paper>

      <AppointmentForm
        open={openCalendarModal}
        onClose={handleCloseCalendarModal}
        onSubmitAppointmentForm={handleAppointmentForm}
      />
    </>
  );
};

export default Appointments;
