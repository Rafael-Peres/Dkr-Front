import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
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
import CircularProgress from '@material-ui/core/CircularProgress';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import PageHeader from '../../../components/Header';
import PageFooter from '../../../components//Footer';
import { getJobs } from '../../../services/requests/jobs';
import states from '../../../utils/states';
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
    marginTop: '50px',
    marginBottom: '50px',
  },
  resultado: {
    flex: 1,
  },

  vagas: {
    color: 'red',
    textDecoration: 'none',
    listStyle: 'none',
  },
  vaga: {
    padding: '25px 15px',
    minHeight: 140,
    margin: '.5rem 0',
  },
}));

export default function JobList({ history }) {
  const classes = useStyles();

  const [value, setValue] = useState();
  const [params, setParams] = useState({});
  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleJobsDetail = async () => {
    history.push('/jobs/detail');
  };

  const { data: jobs, loading, error } = useRequest(
    Object.keys(params).length ? 'search/jobs' : 'jobs',
    params
  );

  function showDetail(id) {
    history.push(`/jobs/detail/${id}`);
  }
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
              Encontre o emprego perfeito para você.
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12} className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="  Digite um cargo, empresa e/ou localização"
              inputProps={{
                'aria-label': 'Digite um cargo, empresa e/ou localização',
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

        <Container className={classes.vagasContainer}>
          <Paper component={Box} width="30%" p={4} mx="auto">
            <Box component="form" className={classes.formCidade}>
              <Typography component="h3" variant="h5">
                Pesquisar por estado
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="gender1" value={value}>
                  {states
                    .filter((_, i) => i < 26)
                    .map(state => (
                      <FormControlLabel
                        key={state.value}
                        value={state.value}
                        control={<Radio />}
                        checked={params.search === state.value}
                        onChange={() =>
                          setParams({ ...params, search: state.value })
                        }
                        label={state.label}
                      />
                    ))}
                </RadioGroup>
              </FormControl>
            </Box>
          </Paper>

          <Box className={classes.resultado}>
            <ul className={classes.vagas}>
              {loading && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CircularProgress size={120} />
                </div>
              )}
              {error && <div>Erro ao buscar jobs: {error}</div>}
              {!loading &&
                jobs?.map(job => (
                  <Paper className={classes.vaga} key={job.id}>
                    <h1
                      onClick={() => showDetail(job.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      {job.title}
                    </h1>
                    <p>{job.description}</p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span> {job.state}</span>
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
