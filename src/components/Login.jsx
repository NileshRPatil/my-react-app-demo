import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link as MuiLink,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleLogin = (data) => {
    console.log("Login form data:", data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: { xs: 4, md: 7 },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 440,
          borderRadius: 2,
          p: { xs: 3, sm: 4 },
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Avatar sx={{ bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Box sx={{ textAlign: "center" }}>
            <Typography component="h1" variant="h5" fontWeight={700}>
              Login
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
              Welcome back. Please enter your account details.
            </Typography>
          </Box>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(handleLogin)}
            sx={{ width: "100%" }}
          >
            <Stack spacing={2.25}>
              <TextField
                fullWidth
                required
                id="email"
                label="Email address"
                type="email"
                autoComplete="email"
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />

              <TextField
                fullWidth
                required
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                alignItems={{ xs: "flex-start", sm: "center" }}
                justifyContent="space-between"
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      {...register("rememberMe")}
                    />
                  }
                  label="Remember me"
                />
                <MuiLink component={Link} to="#" underline="hover" variant="body2">
                  Forgot password?
                </MuiLink>
              </Stack>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>

              <Typography variant="body2" color="text.secondary" textAlign="center">
                Don&apos;t have an account?{" "}
                <MuiLink component={Link} to="/register" underline="hover">
                  Register
                </MuiLink>
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Login;
