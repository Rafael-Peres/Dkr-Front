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
      Copyright © Seinn - Selection e Innovation {new Date().getFullYear()}.
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
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ history }) {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const login = await Login({
      data: {
        username,
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
    history.push('/signup/option');
  };

  const handleForgot = async () => {
    history.push('/forgot');
  };

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundSize: 'cover',
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        style={{
          boxShadow: '0px 0px 3px #AAA',
          padding: 15,
          borderRadius: 5,
          backgroundColor: '#FFF',
        }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Seinn
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user"
              label="Usuário"
              name="user"
              autoComplete="user"
              autoFocus
              onChange={e => setUsername(e.target.value)}
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
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleJobs()}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  onClick={() => handleForgot()}
                  variant="forgot"
                  style={{ cursor: 'pointer' }}
                >
                  Esqueci minha senha.
                </Link>
              </Grid>
              <Grid item>
                <Link
                  onClick={() => handleSignup()}
                  variant="signup"
                  style={{ cursor: 'pointer' }}
                >
                  Não é Cadastrado? Cadastra-se!
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}
