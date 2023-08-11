import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  Link
} from "@mui/material";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const paperStyle = { padding: 20, width: 280, margin: "60px auto" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const inputStyle = { margin: "5px auto" };
  const btnstyle = { margin: "8px 0" };

  let navigator = useNavigate();
  let handleSubmit = () => {
    navigator("/");
  };
  const [remember, setRemember]=useState(true);
  return (
    <Box textAlign={"center"}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          style={inputStyle}
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          style={inputStyle}
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox onChange={()=>setRemember(!remember)} name="checkedB" checked={remember} color="primary" />}
          label="Remember me"
        />
        <Button
          onClick={handleSubmit}
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign In
        </Button>
        <Typography>
          <Link underline="none" href="/login">Forgot password ?</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginPage;
