import AccountBoxIcon from "@mui/icons-material/AccountBox";
import {
  Avatar,
  Box,
  Button,
  Link as MuiLink,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: "100%",
            maxWidth: 440,
            borderRadius: 2,
            p: { sx: 3, sm: 4 },
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <AccountBoxIcon />
            </Avatar>

            <Box sx={{ alignItems: "center" }}>
              <Typography component="h1" variant="h5" fontWeight={700}>
                Register
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.75 }}
              >
                Welcome back. Please enter your account details.
              </Typography>
            </Box>

            <Box sx={{ width: "100%" }} component="form">
              <Stack spacing={2.25}>
                <TextField
                  fullWidth
                  required
                  id="name"
                  label="Name"
                  name="email"
                  type="email"
                  autoComplete="name"
                />
                <TextField
                  fullWidth
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
                <TextField
                  fullWidth
                  required
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                />
                <Button fullWidth type="submit" variant="contained">Register</Button>

                <Typography variant="body2" color="text.secondary" textAlign="center">
                    Already regiter? {" "}
                    <MuiLink component={Link} to="/login" underline="hover">Login</MuiLink>
                </Typography>   

              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default Register;
