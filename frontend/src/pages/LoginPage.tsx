import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { BASE_URL } from "../components/constants/baseurl";
import { useAuth } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const [error, setError] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(email, password);

    //validate the form data
    if (!email || !password) {
      return;
    }

    const response = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      setError("Unable to login user,please try different credientials!");
      return;
    }

    const token = await response.json();
    if (!token) {
      setError("Incorrect token");
      return;
    }

    login(email, token);
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          mb: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login to Your Account
        </Typography>
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mt: 2,
            width: "100%",
          }}
        >
          <TextField
            inputRef={emailRef}
            label="Email"
            name="email"
            variant="outlined"
            type="email"
            fullWidth
            required
          />
          <TextField
            inputRef={passwordRef}
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            fullWidth
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
            fullWidth
          >
            Login
          </Button>
          {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
