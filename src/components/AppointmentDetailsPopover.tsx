import { Tooltip } from "@mui/material";

const AppointmentDetailsPopover = ({ event, onClose }) => {
  
    if (!event) return null;

    const { title, start, end, extendedProps } = event;
  
  
    return (
        <div className="popover">
          <button className="close-button" onClick={onClose}>Close</button>
          <p><strong>Time:</strong> {start.toLocaleTimeString()} - {end.toLocaleTimeString()}</p>
          <p><strong>Patient: </strong> {title}</p>
          <p><strong>Dentist:</strong> {extendedProps.dentistName}</p>
          <p><strong>Notes:</strong> {extendedProps.notes}</p>
        </div>
    );
  };
  
  export default AppointmentDetailsPopover;