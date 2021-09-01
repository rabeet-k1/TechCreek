import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import appLogo from "../../Assets/app-logo.png";
import { Button, Container } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import "../../styles/style.css";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  loginBtn: {
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
    borderRadius: "32px",
    background: "transparent",

    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "21px",
    color: "#FEFEFE",
    "&:hover": {
      background: "transparent",
    },
  },
  navigationContainer: {
    marginRight: "20px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navigationBtns: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    textTransform: "capitalize",
    fontSize: "16px",
    lineHeight: "21px",
    color: "#FEFEFE",
    margin: "0 12px",
  },
  activeBtn: {
    background: "#fff",
    borderRadius: "32px",
    padding: "5px 15px",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "21px",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "#0269BA",
    "&:hover": {
      background: "#fff",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [activeColor, setActiveColor] = useState("home");
  const [innerActiveColor, setInnerActiveColor] = useState("");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow} style={{ background: "#0269B" }}>
      <Container>
        <AppBar
          position="static"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              <img src={appLogo} width="100%" alt="app-logo" />
            </Typography>

            <div className={classes.grow} />

            <div className={classes.navigationContainer}>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <li style={{ listStyle: "none" }}>
                  <Button
                    className={
                      activeColor === "home"
                        ? classes.activeBtn
                        : classes.navigationBtns
                    }
                    onClick={() => setActiveColor("home")}
                  >
                    Home
                  </Button>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Button
                    className={
                      activeColor === "about"
                        ? classes.activeBtn
                        : classes.navigationBtns
                    }
                    onClick={() => setActiveColor("about")}
                  >
                    About Us
                  </Button>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Button
                    className={
                      activeColor === "updates"
                        ? classes.activeBtn
                        : classes.navigationBtns
                    }
                    onClick={() => setActiveColor("updates")}
                  >
                    Updates
                  </Button>
                </li>
                {/* <li style={{ listStyle: "none" }}>
                  <Button
                  className={
                      activeColor === "community"
                      ? classes.activeBtn
                      : classes.navigationBtns
                    }
                    onClick={() => setActiveColor("community")}
                    >
                    Community
                    </Button>
                </li> */}
                <div className="dropdown">
                  <Typography>
                    <Link
                      to="#"
                      className={
                        activeColor === "community"
                          ? classes.activeBtn
                          : classes.navigationBtns
                      }
                      onClick={() => setActiveColor("community")}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      Community
                    </Link>
                  </Typography>

                  <div class="dropdown-content">
                    <ul
                      style={{
                        paddingInlineStart: "2px",
                        marginBlockEnd: 0,
                      }}
                    >
                      <li>
                        <Link
                          className={
                            innerActiveColor === "learn"
                              ? "#0269BA 1px solid"
                              : "services-link"
                          }
                          onClick={() => setInnerActiveColor("learn")}
                        >
                          Learn
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            innerActiveColor === "create"
                              ? "#0269BA 1px solid"
                              : "services-link"
                          }
                          onClick={() => setInnerActiveColor("create")}
                        >
                          Create
                        </Link>
                      </li>
                      <li
                        className={
                          innerActiveColor === "connect"
                            ? "#0269BA 1px solid"
                            : "services-link"
                        }
                        onClick={() => setInnerActiveColor("connect")}
                      >
                        <Link>Connect</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <li style={{ listStyle: "none" }}>
                  <Button
                    className={
                      activeColor === "ongoing"
                        ? classes.activeBtn
                        : classes.navigationBtns
                    }
                    onClick={() => setActiveColor("ongoing")}
                  >
                    Ongoing Applications
                  </Button>
                </li>
              </ul>
            </div>

            <div>
              <Button
                color="inherit"
                variant="contained"
                className={classes.loginBtn}
                onClick={() => history.push("/login")}
              >
                Login
              </Button>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Container>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Header;
