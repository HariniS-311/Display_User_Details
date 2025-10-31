import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
function UserCard({ user }) {
  return (
    <Card
      className="user-card"
      sx={{
        bgcolor: "#a34ce4",
        borderRadius: "35px",
        color: "black",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>{user.name}</Typography>
        <Typography>{user.email}</Typography>
        <Typography>{user.phone}</Typography>
        <Typography>{user.company.name}</Typography>
        <Typography>{user.address.city}</Typography>
      </CardContent>
    </Card>
  );
}
export default UserCard;