import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { GiScales } from "react-icons/gi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const pages = ["Services", "About Us", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(to right, black, #001242)",
        fontSize: "24px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {!isMobile && (
          
            <GiScales
              style={{
                fontSize: "240%",
                marginBottom: "5px",
                marginRight: "2vw",
              }}
            />
            
          )}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "'Raleway'",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            >
            Libra Care
          </Typography>
          {!isMobile && <p
          style={{
            fontSize: "14px",
          }}
          >Balancing your care with independence</p>}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-start",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ justifyContent: "flex-end" }} />
            </IconButton>
          </Box>
          {isMobile && (
            <GiScales
              style={{
                fontSize: "240%",
                marginBottom: "5px",
                marginRight: "2vh",
                fontWeight: "1",
              }}
            />
          )}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" sx={{ fontFamily: "'Raleway'" }}>
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "'Raleway'",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              
            }}
          >
            Libra Care
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, display: "flex", justifyContent: "flex-end" }}
              ></IconButton>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: "'Raleway'" }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      <Container
       maxWidth="xl"
        sx={{
          backgroundColor: "#B3DEC1",
          color: "green",
          fontSize: {xs: "9.5px", sm: "16px", md: "20px"},
          padding: "0.5em",
          display: "flex",
          justifyContent: "center",
          lineHeight: "1",
          WebkitUserSelect: "none", 
          MozUserSelect: "none", 
          msUserSelect: "none", 
          userSelect: "none",
          cursor: "default",
          borderBottom: "1px solid green",
          borderTop: "1px solid green",
          width: "100%",
          margin: "0px"
        }}
      >
        🚀 We are now&nbsp;
        <div style={{}}>
          <Link to="/" style={{
          }}>
            hiring
          </Link>
        </div>
        &nbsp;carers in the Walsall, Cannock, and Lichfield areas! 🚀
      </Container>
    </AppBar>
  );
}

export default Nav;
