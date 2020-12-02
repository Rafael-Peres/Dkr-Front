import React, { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import zIndex from '@material-ui/core/styles/zIndex';
import { Forgot } from '../../../services/requests/auth';

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
      {'Copyright © '}- Reseinn - Recruitment, Selection e Innovation{' '}
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

const Modal = ({ history, newPassword }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
      }}
    >
      <div
        style={{
          background: '#eee',
          width: '25%',
          height: '20%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          borderRadius: 10,
        }}
      >
        <h1
          style={{
            color: 'blue',
          }}
        >
          Senha resetada!
        </h1>
        <h2>
          Sua nova senha é: <strong>{newPassword}</strong>{' '}
        </h2>

        <Link
          onClick={() => history.push('/signin')}
          style={{ cursor: 'pointer' }}
        >
          Ir para login!
        </Link>
      </div>
    </div>
  );
};

export default function SignForgot({ history }) {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [document, setDocument] = useState('');
  const [newPassword, setNewPassword] = useState();
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    const forgot = await Forgot({
      data: {
        username,
        document,
        email,
      },
    }).catch(err => console.log(err.response.data));

    if (forgot.status === 200) {
      setNewPassword(forgot.data.newPassword);
      // history.push("/signin");
    }
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
      }}
    >
      {newPassword && <Modal newPassword={newPassword} history={history} />}
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
            Redefinir Senha
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
              id="document"
              label="CPF/CNPJ"
              name="document"
              autoComplete="document"
              autoFocus
              onChange={e => setDocument(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-Mail"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleSubmit()}
            >
              Enviar
            </Button>
          </form>
        </div>
      </Container>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}
