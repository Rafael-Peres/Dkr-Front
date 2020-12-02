import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import PageHeader from '../../../components/Header';
import PageFooter from '../../../components/Footer';

import loginImage from '../../../assets/loginIlustration.svg';
import bgimg from '../../../assets/carteira.jpg';
import { Login } from '../../../services/requests/auth';

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{
        fontWeight: 'bolder',
        color: '#4F4F4F',
      }}
    >
      Copyright © Reseinn - Recruitment, Selection e Innovation{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  form: {
    // width: '20vw', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
  },
  imageLogin: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px',
  },
  image: {
    width: '40rem',
    height: '40rem',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: ' #3f64e5',
  },

  acessarConta: {},
}));

export default function SignIn({ history }) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const login = await Login({
      data: {
        email,
        password,
      },
    }).catch(err => console.log(err.response.data));

    if (login.status === 200) {
      history.push('/jobs');
    }
  };
  const handleJobs = async () => {
    history.push('/jobs');
  };

  const handleSignup = async () => {
    history.push('/signup/candidate');
  };

  const handleForgot = async () => {
    history.push('/forgot');
  };

  return (
    <div
      style={{
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundSize: 'cover',
        // display: 'flex',
      }}
    >
      <PageHeader />
      <Container
        component="main"
        // maxWidth="md"
        style={{
          padding: 15,
          borderRadius: 5,
          backgroundColor: '#FFF',
        }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <Typography component="h1" variant="h5" color="primary">
              Bem Vindo(a)!
            </Typography>
            <Typography component="subtitle1" variant="h5" color="inherit">
              Faça login ou cadastre-se na <br /> nossa plataforma.
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <Grid container>
              <Grid item xs>
                <Link
                  className={classes.acessarConta}
                  onClick={() => handleForgot()}
                  variant="forgot"
                  style={{ cursor: 'pointer' }}
                >
                  Esqueceu sua senha?
                </Link>
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleSubmit()}
            >
              Acessar conta
            </Button>

            <Grid container>
              <Grid item>
                <Link
                  className={classes.acessarConta}
                  onClick={() => handleSignup()}
                  variant="signup"
                  style={{ cursor: 'pointer' }}
                >
                  Não é Cadastrado? Cadastra-se!
                </Link>
              </Grid>
            </Grid>
          </form>
          <div className={classes.imageLogin}>
            <img
              className={classes.image}
              src={loginImage}
              alt="Logo da aplicação"
            />
          </div>
        </div>
      </Container>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
      <PageFooter />
    </div>
  );
}
