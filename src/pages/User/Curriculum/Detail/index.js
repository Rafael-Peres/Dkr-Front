import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
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

import PageHeader from '../../../../components/Header';
import PageFooter from '../../../../components/Footer';
import { useRouteMatch } from 'react-router-dom';
import useRequest from '../../../../hooks/useRequest';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },

  card: {
    padding: '5rem',
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

export default function DetailCurriculum({ history }) {
  const classes = useStyles();

  const [value, setValue] = React.useState();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const { params } = useRouteMatch();
  const { data, loading } = useRequest(`curriculum/${params.id}`);

  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <PageHeader />
      <Grid>
        <Container className={classes.vagasContainer}>
          <Card className={classes.card}>
            <Typography gutterBottom>Telefone:</Typography>
            <Typography color="textSecondary" gutterBottom>
              (11) {data.telephone}
            </Typography>
            <Typography>Celular:</Typography>
            <Typography color="textSecondary" gutterBottom>
              (11) {data.cellPhone}
            </Typography>
            <Typography>Interesses:</Typography>
            <Typography color="textSecondary" gutterBottom>
              {data.interest}
            </Typography>
            <Typography>Objetivo Profissional:</Typography>
            <Typography color="textSecondary" gutterBottom>
              {data.professionalGoal}
            </Typography>
            <Typography>Resumo Profissional:</Typography>
            <Typography color="textSecondary" gutterBottom>
              {data.professionalResume}
            </Typography>
            <Typography>Última empresa:</Typography>
            <Typography color="textSecondary" gutterBottom>
              {data.company}
            </Typography>
          </Card>
        </Container>
      </Grid>
      <PageFooter />
    </div>
  );
}
