import React, { useState, useEffect } from "react";
import { TextField, Typography, Container } from "@mui/material";
import UserCard from "./components/UserCard";
import "./index.css";
function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log("Error fetching users:", err));
  }, []);
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Container className="container">
      <Typography
        variant="h4"
        sx={{fontWeight: "bold",color: "#18042bff", }}>
         User Directory 
      </Typography>
      <TextField
        label="Search users by name"fullWidth
        sx={{ maxWidth: 750,margin: "20px auto",backgroundColor: "#dab0e2ff",borderRadius: "10px",}}
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
      <div className="user-grid">
        {filteredUsers.map((user) => (<UserCard key={user.id} user={user} />
        ))}</div>
    </Container>
  );
}
export default App;