import React, { Component } from 'react';
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
      {'Copyright © '}
      Seinn - Selection e Innovation {new Date().getFullYear()}.
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

export default function SignIn() {
  const classes = useStyles();

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
            Alterar Senha
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="currentPassword"
              label="Senha Anterior"
              type="currentPassword"
              id="currentPassword"
              autoComplete="current-password"
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="newPassword"
              label="Nova Senha"
              type="newPassword"
              id="newPassword"
              autoComplete="new-password"
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmationPassword"
              label="Confirmar Senha"
              type="confirmationPassword"
              id="confirmationPassword"
              autoComplete="confirmation-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
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
