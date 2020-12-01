import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  Container,
  Box,
  Paper,
  Checkbox,
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import bgimg from '../../../assets/carteira.jpg';

import PageHeader from '../../../components/Header';
import PageFooter from '../../../components//Footer';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },

  buscaContainer: {
    backgroundColor: '#3f64e5',
    height: '25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    textAlign: 'center',
    fontSize: '3rem',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    marginLeft: theme.spacing(1),
    backgroundColor: '#fff',
    width: '50%',
    borderRadius: '0.5rem',
    marginLeft: '70px',
  },

  iconButton: {
    padding: 10,
    color: '#fff',
  },

  formCidade: {
    display: 'flex',
    flexDirection: 'column',
  },

  formArea: {
    marginTop: '20px',
  },

  vagasContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '50px',
    marginBottom: '50px',
  },

  vagas: {
    color: 'black',
    textDecoration: 'none',
    listStyle: 'none',
  },
}));

export default function JobList({ history }) {
  const classes = useStyles();

  const [value, setValue] = React.useState();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleJobsDetail = async () => {
    history.push('/jobs/detail');
  };
  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <PageHeader />
      <Grid>
        <Container className={classes.vagasContainer}>
          <div>
            <Typography
              component="h1"
              variant="h5"
              color="textSecondary"
              gutterBottom
            >
              Full Stack Developer
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Empresa:
            </Typography>
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
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Typography>
          </div>
        </Container>
      </Grid>
      <PageFooter />
    </div>
  );
}
