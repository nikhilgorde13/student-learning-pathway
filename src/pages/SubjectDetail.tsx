import { useParams } from 'react-router-dom';
import { Grid, Paper, Typography, Button,Box } from '@mui/material';
import data from '../grade8A_dev.json';
import StatsTile from '../components/StatsTile';
import ProgressBar from '../components/ProgressBar';
import { Link } from 'react-router-dom';

export default function SubjectDetail() {
  const { name } = useParams();
  const subjects = data[0].grades['Grade 8'].subjects;
  const subject: any = subjects[name ?? ''];

  if (!subject) return <Typography>No data available</Typography>;

  return (
    <Box m={2}>
    <Box sx={{display:"flex",justifyContent:"space-between"}} mb={2} >
      <Typography variant="h5" >
        {name}
      </Typography>
       <Button component={Link} sx={{bgcolor:"grey",size:"small"}}
              to={`/`} variant='contained'>
            Back
       </Button>
</Box>
      <Grid container spacing={3}>
  <Grid item xs={12} sm={4}>
    <StatsTile
      label="EOL"
      count={subject.count_eol || 0}
      percent={subject.percentage_eol || 0}
    />
  </Grid>
  <Grid item xs={12} sm={4}>
    <StatsTile
      label="FA"
      count={subject.count_fa || 0}
      percent={subject.percentage_fa || 0}
    />
  </Grid>
  <Grid item xs={12} sm={4}>
    <StatsTile
      label="SA"
      count={subject.count_sa || 0}
      percent={subject.percentage_sa || 0}
    />
  </Grid>
</Grid>


      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6">
          Predicted Score: {subject.predicted_score}%
        </Typography>

        <ProgressBar value={subject.current_score || 0} />

        <Typography variant="h6" mt={2}>
          Descriptive
        </Typography>
        <Typography>{subject.descriptive_eol}</Typography>

        <Typography variant="h6" mt={2}>
          Prescriptive (How to go from here)
        </Typography>
        <Typography>{subject.prescriptive_eol}</Typography>
      </Paper>
    </Box>
  );
}
