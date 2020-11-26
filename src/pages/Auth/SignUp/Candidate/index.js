import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DatePicker,
} from '@material-ui/pickers';

import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import bgimg from '../../../../assets/carteira.jpg';
import { Card } from '../../../../components/Card';
import { storeCandidate } from '../../../../services/requests/candidates';
import { storeUser } from '../../../../services/requests/users';

import loginImage from '../../../../assets/loginIlustration.svg';

import PageHeader from '../../../../components/Header';
import PageFooter from '../../../../components/Footer';
import { BorderAll } from '@material-ui/icons';

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
}));

export default function SignUpRecruiter({ history }) {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  // const [candidateId, setCandidateId] = useState('')
  const [document, setDocument] = useState('');
  const [birthDate, setbirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [stateUF, setStateUF] = useState('');
  const [profession, setProfession] = useState('');
  const [levelTraining, setLevelTraining] = useState('');
  const [pretense, setPretense] = useState('');

  const [value, setValue] = React.useState('');

  const handleSubmit = async () => {
    const candidate = await storeCandidate({
      data: {
        profession,
        levelTraining,
        pretense,
      },
    }).catch(err => console.log(err.response.data));
    console.log(candidate);
    const user = await storeUser({
      data: {
        username: "react",
        password: "12345",
        fullName: "test",
        email: "test",
        candidateId: 9,
        document: "test-mock",
        birthDate: '2014-08-18T21:11:54',
        gender: "Masculino",
        stateUF: "São Paulo",
        city: "aruja",
      },
    }).catch(err => console.log(err.response.data));
  };

  const handleSignupRecruiter = async () => {
    history.push('/signup/recruiter');
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
                Candidato, inscreva-se abaixo!
              </Typography>

              <div className={classes.paper}>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        autoComplete="fname"
                        name="fullName"
                        variant="outlined"
                        required
                        fullWidth
                        id="fullName"
                        label="Nome"
                        autoFocus
                        onChange={e => setFullname(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        autoComplete="user"
                        name="user"
                        variant="outlined"
                        required
                        fullWidth
                        id="user"
                        label="Usuário"
                        autoFocus
                        onChange={e => setUsername(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        onChange={e => setEmail(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="document"
                        label="CPF/CNPJ"
                        name="document"
                        autoComplete="document"
                        onChange={e => setDocument(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Confirmar senha"
                        type="confirmPassword"
                        id="confirmPassword"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={6} lg={6}>
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel ref={inputLabel} htmlFor="gender">
                          Gênero
                        </InputLabel>
                        <Select
                          native
                          value={state.gender}
                          onChange={e => setGender(e.target.value)}
                          labelWidth={labelWidth}
                          inputProps={{
                            name: 'gender',
                            id: 'gender',
                          }}
                        >
                          <option value="   " />
                          <option value={10}>Masculino</option>
                          <option value={20}>Feminino</option>
                          <option value={30}>Outros</option>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6} lg={6}>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          disableFuture
                          openTo="year"
                          format="dd/MM/yyyy"
                          label="Data de nascimento"
                          views={['year', 'month', 'date']}
                          value={selectedDate}
                          onChange={handleDateChange}
                        />
                      </MuiPickersUtilsProvider>
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
                          <option value="   " />
                          <option value={1}>Acre</option>
                          <option value={2}>Alagoas</option>
                          <option value={3}>Amazonas</option>
                          <option value={4}>Bahia</option>
                          <option value={5}>Ceará</option>
                          <option value={6}>Distrito Federal</option>
                          <option value={7}>Espírito Santo</option>
                          <option value={8}>Goiás</option>
                          <option value={9}>Maranhão</option>
                          <option value={10}>Mato Grosso</option>
                          <option value={11}>Mato Grosso Do Sul</option>
                          <option value={12}>Minas Gerais</option>
                          <option value={13}>Pará</option>
                          <option value={14}>Paraíba</option>
                          <option value={15}>Paraná</option>
                          <option value={16}>Pernanbuco</option>
                          <option value={17}>Piauí</option>
                          <option value={18}>Rio de Janeiro</option>
                          <option value={19}>Rio Grande do Norte</option>
                          <option value={20}>Rio Grande do Sul</option>
                          <option value={21}>Rondônia</option>
                          <option value={22}>Roraima</option>
                          <option value={23}>Santa Catarina</option>
                          <option value={24}>São Paulo</option>
                          <option value={25}>Sergipe</option>
                          <option value={26}>Tocantins</option>
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

                    <Grid item xs={12} md={4}>
                      <TextField
                        autoComplete="profession"
                        name="profession"
                        variant="outlined"
                        required
                        fullWidth
                        id="profession"
                        label="Profissão"
                        autoFocus
                        onChange={e => setProfession(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        autoComplete="levelTraining"
                        name="levelTraining"
                        variant="outlined"
                        required
                        fullWidth
                        id="levelTraining"
                        label="Nível"
                        autoFocus
                        onChange={e => setLevelTraining(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <TextField
                        autoComplete="pretense"
                        name="pretense"
                        variant="outlined"
                        required
                        fullWidth
                        id="pretense"
                        label="Pretensão Salarial"
                        autoFocus
                        onChange={e => setPretense(e.target.value)}
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
                  <Grid container justify="flex-end">
                    <Grid item xs>
                      <Link
                        onClick={() => handleSignupRecruiter()}
                        variant="recruiter"
                        style={{ cursor: 'pointer' }}
                      >
                        Recrutador
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link
                        onClick={() => handleSignin()}
                        variant="signin"
                        style={{ cursor: 'pointer' }}
                      >
                        Você possui cadastro? Entrar.
                      </Link>
                    </Grid>
                  </Grid>
                </form>
                <Container className={classes.containerImage}>
                  <img className={classes.image} src={loginImage} />
                </Container>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <PageFooter />
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </div >
  );
}
