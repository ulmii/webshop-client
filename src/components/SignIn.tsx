import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import authenticate from '../api/authenticate';
import {Redirect} from 'react-router';
import {Link as RouterLink} from 'react-router-dom';
import Copyright from './Copyright';
import GoogleButton from 'react-google-button';
import DividerWithText from './DividerWithText';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    margin: theme.spacing(3, 0, 2),
  },
  divider: {
    color: 'black',
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [referrer, setReferrer] = useState<string>('');

  const signin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    authenticate(email, password).then(authToken => {
      if (authToken) {
        localStorage.setItem('authToken', authToken);
        setReferrer('/products');
        setRedirectToReferrer(true);
      } else {
        console.error('Sign in failed');
      }
    });
  };

  if (redirectToReferrer) {
    return <Redirect to={referrer} />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={signin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/register" variant="body2" component={RouterLink}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        <Grid container>
          <DividerWithText>Single sign-on</DividerWithText>
        </Grid>
        <Grid container>
          <Grid item>
            <GoogleButton
              className={classes.googleButton}
              onClick={() => {
                window.location.href =
                  process.env.REACT_APP_APIHOST + '/authenticate/google';
              }}
            />
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
