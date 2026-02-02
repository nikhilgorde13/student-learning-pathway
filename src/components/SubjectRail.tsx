import {  Button, Paper, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  subjects: string[];
};

export default function SubjectRail({ subjects }: Props) {
  const location = useLocation();

  return (
    <Paper
  sx={{
    p: 2,
    mb: 3,
    borderRadius: 2,
    boxShadow: 3,
    backgroundColor: "#f9f9f9",
  }}
>
  <Box
    sx={{
      display: "flex",    
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",   
      gap: 1,               
    }}
  >
    {subjects.map((s) => {
      const active = location.pathname === `/subject/${s}`;
      return (
        <Button
          key={s}
          component={Link}
          to={`/subject/${s}`}
          variant={active ? "contained" : "outlined"}
          color={active ? "primary" : "inherit"}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            px: 3,
            py: 1,
            fontWeight: active ? 600 : 500,
            transition: "all 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          {s}
        </Button>
      );
    })}
  </Box>
</Paper>
  );
}
