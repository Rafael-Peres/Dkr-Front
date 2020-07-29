import React, { Component, useState } from 'react';
import { Redirect, Router } from 'react-router-dom';
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
    alignItems: 'left',
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

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        height: '125%',
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
            Full Stack Developer
          </Typography>
          <Typography>Empresa:</Typography>
          <Typography color="textSecondary" gutterBottom>
            Eniac
          </Typography>
          <Typography>Beneficios:</Typography>
          <Typography color="textSecondary" gutterBottom>
            <ul>
              <li>VT</li>
              <li>VR</li>
              <li>Convênio Médico</li>
            </ul>
          </Typography>
          <Typography>Salário</Typography>
          <Typography color="textSecondary" gutterBottom>
            R$ 5.000,00
          </Typography>
          <Typography>Horário de trabalho:</Typography>
          <Typography color="textSecondary" gutterBottom>
            08:00 às 17:00, seg. a sex. Home office 1x por semana.
          </Typography>
          <Typography>Cidade:</Typography>
          <Typography color="textSecondary" gutterBottom>
            Itaquaquecetuba
          </Typography>
          <Typography>Estado:</Typography>
          <Typography color="textSecondary" gutterBottom>
            São Paulo
          </Typography>
          <Typography>Descrição:</Typography>
          <Typography color="textSecondary" gutterBottom>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container>
              <Grid item xs>
                <Link variant="forgot" style={{ cursor: 'pointer' }}>
                  voltar
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
