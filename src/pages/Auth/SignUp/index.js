import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import bgimg from '../../../assets/carteira.jpg';
import { Card } from '../../../components/Card';

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
      Reseinn - Recruitment, Selection e Innovation {new Date().getFullYear()}.
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  formControl: {
    fontSize: '0.5rem',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({ history }) {
  const classes = useStyles();

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

  const handleSignin = async () => {
    history.push('/signin');
  };

  // const [value, setValue] = React.useState("male");

  // const handleChange = event => {
  //   setValue(event.target.value);
  // };

  const [sla, setSla] = React.useState('candidate');

  const handleChangeOption = event => {
    setSla(event.target.sla);
  };

  const [setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
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
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <Container component="main" maxWidth="lg">
        <Grid
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item xs={12} sm={9} md={8} lg={7}>
            <Card>
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Cadastro
                </Typography>
                {/* <Grid container justify="center" alignItems="center">
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    className={classes.bigAvatar}
                  />
                </Grid> */}
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={5} lg={5}>
                      <TextField
                        autoComplete="fname"
                        name="fullName"
                        variant="outlined"
                        required
                        fullWidth
                        id="fullName"
                        label="Nome"
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <TextField
                        autoComplete="user"
                        name="user"
                        variant="outlined"
                        required
                        fullWidth
                        id="user"
                        label="Usuário"
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12} md={3}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="Document"
                        label="CPF/CNPJ"
                        name="Document"
                        autoComplete="Document"
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      {/* <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel component="legend">Gênero</FormLabel>
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          value={value}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio color="primary" />}
                            label="Feminino"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio color="primary" />}
                            label="Masculino"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio color="primary" />}
                            label="Outros"
                          />
                        </RadioGroup>
                      </FormControl> */}
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
                          onChange={handleChange('gender')}
                          labelWidth={labelWidth}
                          inputProps={{
                            name: 'gender',
                            id: 'gender',
                          }}
                        >
                          <option value="" />
                          <option value={10}>Masculino</option>
                          <option value={20}>Feminino</option>
                          <option value={30}>Outros</option>
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
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                          onChange={handleChange('state')}
                          labelWidth={labelWidth}
                          inputProps={{
                            name: 'state',
                            id: 'state',
                          }}
                        >
                          <option value="" />
                          <option value={10}>AC</option>
                          <option value={20}>AL</option>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <RadioGroup
                          aria-label="option"
                          name="option"
                          value={sla}
                          onChange={handleChangeOption}
                        >
                          <FormControlLabel
                            value="recruiter"
                            control={<Radio color="primary" />}
                            label="Recrutador"
                          />
                          <FormControlLabel
                            value="candidate"
                            control={<Radio color="primary" />}
                            label="Candidato"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Cadastrar
                  </Button>
                  <Grid container justify="flex-end">
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
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
}
