import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { BASE_URL } from "../components/constants/baseurl";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(firstName, lastName, email, password);

    try {
      const response = await fetch(`${BASE_URL}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      if (!response.ok) {
        setError("Unable to register user,please try different credientials!");
        return;
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
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
          Register New Account
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
            inputRef={firstNameRef}
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            inputRef={lastNameRef}
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            required
          />
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
            Register
          </Button>
          {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account? <a href="/login">Login here</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default RegisterPage;
