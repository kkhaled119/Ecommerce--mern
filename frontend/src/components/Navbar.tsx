import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import StoreIcon from "@mui/icons-material/Store";
import { useAuth } from "../context/Auth/AuthContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const { username, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black", paddingY: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <StoreIcon sx={{ color: "#fff", fontSize: 36 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "monospace",
                fontWeight: "bold",
                letterSpacing: ".1rem",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Mahran Store
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: 4,
            }}
          ></Box>

          <Box
            sx={{ flexGrow: 0, display: "flex", alignItems: "center", gap: 2 }}
          >
            {isAuthenticated ? (
              <>
                <Typography color="white" variant="h6">
                  {username}
                </Typography>
                <Button
                  href="/orders"
                  sx={{
                    color: "#fff",
                    fontSize: 16,
                    "&:hover": { backgroundColor: "green", color: "white" },
                  }}
                >
                  Orders
                </Button>
                <Button
                  onClick={handleLogout}
                  sx={{
                    color: "#fff",
                    fontSize: 16,
                    "&:hover": { backgroundColor: "green", color: "white" },
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant="outlined"
                onClick={() => navigate("/login")}
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "green",
                    borderColor: "green",
                    color: "#fff",
                  },
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
