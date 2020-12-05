import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Card, Hidden } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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

import PageHeader from '../../../components/Header';
import PageFooter from '../../../components//Footer';
import useRequest from '../../../hooks/useRequest';

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

  usersContainer: {
    marginTop: '50px',
    marginBottom: '50px',
    overflow: 'hidden',
  },

  users: {
    color: '#8c8c8c',
    textDecoration: 'none',
    listStyle: 'none',
    padding: '10px',
  },

  containerJobs: {
    // display: 'flex',
    // alignContent: 'center',
    // justifyContent: 'center',
  },

  paperJobs: {
    padding: '20px',
    margin: '20px',
  },
}));

export default function UserList({ history }) {
  const classes = useStyles();

  const [value, setValue] = useState();
  const [params, setParams] = useState({});

  const handleChange = event => {
    setValue(event.target.value);
  };

  const { data: candidates, loading } = useRequest(
    Object.keys(params).length ? 'search/candidates' : 'candidates',
    params
  );

  function showDetail(id) {
    history.push(`/curriculum/detail/${id}`);
  }

  return (
    <div style={{}}>
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
              onChange={e => setParams({ ...params, search: e.target.value })}
            />

            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="directions"
            ></IconButton>
          </Grid>
        </Grid>

        <Container className={classes.usersContainer}>
          <Box className={classes.containerJobs}>
            <ul className={classes.users}>
              {!loading &&
                candidates?.map(candidate => (
                  <Paper className={classes.paperJobs} key={candidate.id}>
                    <h1
                      style={{ cursor: 'pointer' }}
                      onClick={() => showDetail(candidate.id)}
                    >
                      {candidate.user?.fullName}
                    </h1>

                    <p>Profissão: {candidate.profession}</p>
                    <p>Nivel: {candidate.levelTraining}</p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span> {candidate.user?.state}</span>
                  </Paper>
                ))}
            </ul>
          </Box>
        </Container>
      </Grid>
      <PageFooter />
    </div>
  );
}
