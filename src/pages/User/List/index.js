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

export default function UserList({ history }) {
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
        <Grid container spacing={2} className={classes.buscaContainer}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography className={classes.titulo} component="h1" variant="h5">
              Encontre o candidato perfeito pra sua empresa.
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12} className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="  Digite um cargo"
              inputProps={{
                'aria-label': 'Digite um cargo',
              }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="directions"
            ></IconButton>
          </Grid>
        </Grid>

        <Container className={classes.vagasContainer}>
          <Box>
            <ul className={classes.vagas}>
              <li>
                <h3>Estágio - Comunicação empresarial </h3>
              </li>
              <li>
                <p>
                  Minions ipsum wiiiii bappleees para tú me want bananaaa!
                  Belloo! <br />
                  Underweaaar. Hahaha ti aamoo! Me want bananaaa! Underweaaar
                  chasy chasy hana dul sae po kass potatoooo pepete. Butt hana
                  dul sae
                </p>
              </li>
              <li>
                <span>São Paulo</span>
              </li>
            </ul>

            <ul className={classes.vagas}>
              <li>
                <h3>Estágio - Comunicação empresarial </h3>
              </li>
              <li>
                <p>
                  Minions ipsum wiiiii bappleees para tú me want bananaaa!
                  Belloo! <br />
                  Underweaaar. Hahaha ti aamoo! Me want bananaaa! Underweaaar
                  chasy chasy hana dul sae po kass potatoooo pepete. Butt hana
                  dul sae
                </p>
              </li>
              <li>
                <span>São Paulo</span>
              </li>
            </ul>
          </Box>
        </Container>
      </Grid>
      <PageFooter />
    </div>
  );
}
