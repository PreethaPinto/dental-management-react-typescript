import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Stack } from '@mui/material';
import BarChart from '../components/BarChart';

export default function OutlinedCard() {
  return (
    <>
      <Typography variant='h5'>DASHBOARD</Typography>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack spacing={2} direction='row'>
              <Card sx={{ width: 345 }}>
                <CardContent>
                  <Typography variant='body2' color='text.secondary'>
                    Scheduled Appointments
                  </Typography>
                  <Typography gutterBottom variant='h5' component='div'>
                    12
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ width: 345 }}>
                <CardContent>
                  <Typography variant='body2' color='text.secondary'>
                    New Patients
                  </Typography>
                  <Typography gutterBottom variant='h5' component='div'>
                    5
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ width: 345 }}>
                <CardContent>
                  <Typography variant='body2' color='text.secondary'>
                    Total Patients
                  </Typography>
                  <Typography gutterBottom variant='h5' component='div'>
                    146
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography variant='body2' color='text.secondary'>
                    This month
                  </Typography>
                  <Typography gutterBottom variant='h5' component='div'>
                    $20,000
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Last month
                  </Typography>
                  <Typography gutterBottom variant='h5' component='div'>
                    $47,000
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + 'vh' }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + 'vh' }}>
                <CardContent>
                  <BarChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
    // <>
    //   <Box display='flex' gap={5}>
    //     <Box sx={{ width: '400px' }}>
    //       <Card variant='outlined'>{card}</Card>
    //     </Box>
    //     <Box sx={{ width: '400px' }}>
    //       <Card variant='outlined'>{card1}</Card>
    //     </Box>
    //     <Box sx={{ width: '400px' }}>
    //       <Card variant='outlined'>{card2}</Card>
    //     </Box>
    //     <Box sx={{ width: '400px', height: '800px' }}>
    //       <Card variant='outlined'>{card3}</Card>
    //     </Box>
    //   </Box>
    // </>
  );
}
