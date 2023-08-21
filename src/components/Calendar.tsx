import React from 'react';

const Calendar = () => {
  return <div>Calendar</div>;
};

export default Calendar;

// import { useState } from 'react';
// import FullCalendar, { formatDate } from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import listPlugin from '@fullcalendar/list';
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   useTheme,
// } from '@mui/material';
// import { tokens } from '../styles/theme'

// const styles = {
//     display:'flex',
//     flex: '1 1 20%',
//     p: '15px',
//     borderRadius:'4px'
//  }

// const Calendar = () => {
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);
//     const [currentEvents, setCurrentEvents] = useState([]);

//     const handleDateClick = (selected) => {
//         const title = prompt('Please enter a new title for your event');
//         const calendarApi = selected.view.calendar;
//         calendarApi.unselect();

//         if (title) {
//             calendarApi.addEvent({
//                 id: `${selected.dateStr}-${title}`,
//                 title,
//                 start: selected.startStr,
//                 end: selected.endStr,
//                 allDay: selected.allDay,
//             });
//         }

//     }
//     return (
//         <>
//                 <Box display='flex' justifyContent='space-between'>
//                 <Box style={styles}>
//                     <Typography variant='h5'>Events</Typography>
//                     {currentEvents.map((event) => ((
//                         <ListItem key={event.id} sx={{ margin: '10px 0', borderRadius: '2px' }}>
//                             <ListItemText primary={event.title} secondary=
//                         </ListItem>
//                     )))}

//                 </Box>
//             </Box>
//         </>
//         );
// };

// export default Calendar;
