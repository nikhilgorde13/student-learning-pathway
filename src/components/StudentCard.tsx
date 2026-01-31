import { Card, CardContent, Typography, Avatar, Stack } from '@mui/material';

type Props = {
  username: string;
  grade: string;
};

export default function StudentCard({ username, grade }: Props) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            {username.charAt(0).toUpperCase()}
          </Avatar>

          <div>
            <Typography variant="h6">{username}</Typography>
            <Typography color="text.secondary">{grade}</Typography>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
