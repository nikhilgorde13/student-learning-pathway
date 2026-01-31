import { Box, Paper, Typography } from '@mui/material';
import data from '../grade8A_dev.json';
import StudentCard from '../components/StudentCard';
import SubjectRail from '../components/SubjectRail';

export default function Dashboard() {
  const student = data[0];
  const subjects = student.grades['Grade 8'].subjects;

  return (
    <Box sx={{m:2}}>
        
        <StudentCard username={student.username} grade="Grade 8" />
        <SubjectRail subjects={Object.keys(subjects)} />
        <Paper sx={{ p: 3, mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Descriptive (Overall)
          </Typography>
          <Typography>
            {Object.values(subjects)
              .map((s: any) => s.descriptive_eol)
              .join(' ')}
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Prescriptive (Overall)
          </Typography>
          <Typography>
            {Object.values(subjects)
              .map((s: any) => s.prescriptive_eol)
              .join(' ')}
          </Typography>
        </Paper>
      </Box>

      
  );
}
