import { Box, LinearProgress, Typography } from '@mui/material';

type Props = {
  value: number;
};

export default function ProgressBar({ value }: Props) {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="body2" gutterBottom>
        Progress
      </Typography>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{ height: 10, borderRadius: 5 }}
      />
    </Box>
  );
}
