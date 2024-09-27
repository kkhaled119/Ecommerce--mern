import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import StoreIcon from "@mui/icons-material/Store";
import { useAuth } from "../context/Auth/AuthContext";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { username, isAuthenticated } = useAuth();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handeLogin = () => {
    navigate("/login");
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  console.log("from navbar", username, isAuthenticated);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <StoreIcon sx={{ display: "flex", mr: 1, color: "#1e3a8a" }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "#1e3a8a",
                  textDecoration: "none",
                }}
              >
                Mahran Store
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {isAuthenticated ? (
                <>
                  <Tooltip title="Open settings">
                    <Grid
                      container
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={2}
                    >
                      <Grid item>
                        <Typography color="black">{username}</Typography>
                      </Grid>
                      <Grid item>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar
                            alt={username || ""}
                            src="/static/images/avatar/2.jpg"
                            sx={{ border: "2px solid #1e3a8a" }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem
                      onClick={handleCloseUserMenu}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#1e40af",
                          color: "#ffffff",
                        },
                      }}
                    >
                      <Typography
                        sx={{ textAlign: "center", color: "#1e3a8a" }}
                      >
                        Orders
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseUserMenu}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#1e40af",
                          color: "#ffffff",
                        },
                      }}
                    >
                      <Typography
                        sx={{ textAlign: "center", color: "#1e3a8a" }}
                      >
                        Log out
                      </Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Button
                  variant="contained"
                  color="success"
                  onClick={handeLogin}
                >
                  Login
                </Button>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
