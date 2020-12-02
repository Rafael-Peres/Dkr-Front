import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card } from '../../../components/Card';
import { storeCandidate } from '../../../services/requests/candidates';
import { storeUser } from '../../../services/requests/users';
import { TextareaAutosize } from '@material-ui/core';

import rhImage from '../../../assets/RHIlustration.svg';

import PageHeader from '../../../components/Header';
import PageFooter from '../../../components/Footer';
import { storeJob } from '../../../services/requests/jobs';
import states from '../../../utils/states';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  titulo: {
    display: 'flex',
    alignContent: 'center',
    color: '#3f64e5',
  },
  formControl: {
    fontSize: '0.5rem',
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  form: {
    width: '37%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#3f64e5',
  },
  textField: {
    marginTop: theme.spacing(3),
    width: '100%',
  },
  formControl: {
    marginTop: theme.spacing(0),
    width: '100%',
  },
  containerImage: {
    width: '50%',
  },
  image: {
    width: '40rem',
    height: '40rem',
  },
  textArea: {
    width: '100%',
    height: '16rem',
    minHeight: '8rem',
    marginTop: '0.8rem',
    borderRadius: '0.3rem',
    outline: 0,
    resize: 'none',
    border: '2px solid #DCDCDC',
  },
}));

export default function JobsRegister({ history }) {
  const classes = useStyles();
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [city, setCity] = useState('');
  const [stateUF, setStateUF] = useState('');
  const [description, setDescription] = useState('');

  const [value, setValue] = React.useState('');

  const handleSubmit = async () => {
    await storeJob({
      data: {
        company,
        title,
        salary,
        state: stateUF,
        city,
        description,
      },
    }).catch(err => console.log(err.response.data));
  };

  const inputLabel = React.useRef(null);
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleChangeLetter = event => {
    setValue(event.target.value);
  };

  const handleSignin = async () => {
    history.push('/signin');
  };

  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div
      style={{
        // display: 'flex',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <PageHeader />
      <Container component="main" maxWidth="lg">
        <Grid
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '20px auto',
          }}
        >
          <Grid item xs={12} md={12} lg={12}>
            <Card style={{ boxShadow: 'none' }}>
              <CssBaseline />

              <Typography
                className={classes.titulo}
                component="h1"
                variant="h5"
              >
                Dados da empresa
              </Typography>

              <div className={classes.paper}>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        autoComplete="company"
                        name="company"
                        variant="outlined"
                        required
                        fullWidth
                        id="company"
                        label="Insira o nome da empresa aqui"
                        autoFocus
                        onChange={e => setCompany(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        autoComplete="title"
                        name="title"
                        variant="outlined"
                        required
                        fullWidth
                        id="title"
                        label="Vaga"
                        autoFocus
                        onChange={e => setTitle(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="salary"
                        label="Salário"
                        name="salary"
                        autoComplete="salary"
                        onChange={e => setSalary(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel ref={inputLabel} htmlFor="state">
                          Estados
                        </InputLabel>
                        <Select
                          native
                          value={state.state}
                          onChange={e => setStateUF(e.target.value)}
                          labelWidth={labelWidth}
                          inputProps={{
                            name: 'state',
                            id: 'state',
                          }}
                        >
                          <option value=" " selected disabled>
                            Selecione
                          </option>
                          {states.map(state => (
                            <option key={state.value} value={state.value}>
                              {state.label}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="City"
                        label="Cidade"
                        name="City"
                        autoComplete="City"
                        onChange={e => setCity(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <TextareaAutosize
                        className={classes.textArea}
                        rowsMax={6}
                        aria-label="maximum height"
                        placeholder="Descrição da vaga"
                        defaultValue=""
                        onChange={e => setDescription(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => handleSubmit()}
                  >
                    Cadastrar
                  </Button>
                </form>
                <Container className={classes.containerImage}>
                  <img className={classes.image} src={rhImage} />
                </Container>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <PageFooter />
    </div>
  );
}
