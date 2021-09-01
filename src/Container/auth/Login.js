import React from "react";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Grid,
  Container,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { makeStyles } from "@material-ui/core/styles";
import authLogo from "../../Assets/auth-logo.png";
import { Link, useHistory } from "react-router-dom";
import "../../styles/style.css";

// import vectorImg from "../../Assets/vector.png";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
    borderRadius: "25px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  mainContainer: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    margin: "0 auto",
    width: "80%",
  },
  image: {
    // backgroundImage: "url(https://source.unsplash.com/random)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#028FCA",
    borderRadius: "25px",
  },
  paper: {
    margin: theme.spacing(8, 4),
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#028FCA",
    borderRadius: "10px",

    fontFamily: "DM Sans",
    fontStyle: "normal",
    // fontWeight: "bold",
    padding: "10px 0",
    fontSize: "16px",
    lineHeight: "21px",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "#FFFFFF",
    "&:hover": {
      background: "#028FCA",
    },
  },

  head: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    textTransform: "uppercase",
    lineHeight: "31px",
    color: "#028FCA",
  },
  remember: {
    "&.MuiFormControlLabel-root .MuiTypography-root": {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "140%",
      color: "#908C8C",
    },
  },
  input: {
    background: "rgba(0, 0, 0, 0.04)",
    borderRadius: "10px",
    "&.MuiFormControl-root .MuiInputBase-root .MuiOutlinedInput-notchedOutline":
      {
        border: "none !important",
      },
  },
  forgot: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "140%",
    color: "#028FCA",
    textDecoration: "none",
  },
  typo1: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "140%",
    color: "#4D4747",
  },
  registerNow: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "21px",
    color: "#028FCA",
    marginLeft: "10px",
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <div className={classes.mainContainer}>
        <Container>
          <Grid
            container
            spacing={3}
            component={Paper}
            className={classes.root}
          >
            <Grid item xs={false} sm={6} md={6} className={classes.image}>
              <div className="vector-imgs">
                <img src={authLogo} alt="logo" style={{ width: "40%" }} />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              //   component={Paper}
              className={classes.rightContainer}
            >
              <div className={classes.paper}>
                <Typography
                  component="h1"
                  variant="h5"
                  className={classes.head}
                >
                  Sign in
                </Typography>
                <form className={classes.form} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    className={classes.input}
                    size="small"
                    placeholder="Email"
                    name="email"
                    autoFocus
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon
                            style={{ color: "#908C8C", fontSize: "16px" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    className={classes.input}
                    size="small"
                    fullWidth
                    name="password"
                    placeholder="Password"
                    type="password"
                    id="password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon
                            style={{ color: "#908C8C", fontSize: "16px" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Grid
                    container
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={6}>
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        className={classes.remember}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <div style={{ textAlign: "right" }}>
                        <Link
                          href="#"
                          variant="body2"
                          className={classes.forgot}
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => history.push("/")}
                  >
                    Log In
                  </Button>
                  <Grid container justifyContent="center">
                    <Grid item>
                      <Typography className={classes.typo1}>
                        {"Don't have an account?"}
                        <Link
                          to="/register"
                          variant="body2"
                          style={{ textDecoration: "none" }}
                        >
                          <span className={classes.registerNow}>
                            Register Now
                          </span>
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Login;
