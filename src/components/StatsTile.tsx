import { Card, CardContent, Typography } from '@mui/material';

type Props = {
  label: string;
  count: number;
  percent: number;
};

export default function StatsTile({ label, count, percent }: Props) {
  return (
    <Card
  sx={{
    textAlign: "center",
    borderRadius: 3,
    boxShadow: 3,
    p: 2,
    minWidth: 150,
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: 6,
    },
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  }}
>
  <CardContent>
    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
      {label}
    </Typography>
    <Typography variant="h4" sx={{ fontWeight: 700, color: "#1976d2" }}>
      {percent}%
    </Typography>
    <Typography color="text.secondary" sx={{ mt: 0.5 }}>
      {count} tests
    </Typography>
  </CardContent>
</Card>
  );
}
