import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Card } from '../../../components/Card';
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
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  FormControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginTop: theme.spacing(3),
    width: '100%',
  },
  formControl: {
    marginTop: theme.spacing(0),
    width: '100%',
    fontSize: '0.5rem',
  },
}));

export default function SignUp({ history }) {
  const classes = useStyles();

  const [value, setValue] = React.useState('');

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

  const handleJobs = async () => {
    history.push('/jobs');
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
                  Cadastro de Vagas
                </Typography>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={8}>
                      <TextField
                        autoComplete="title"
                        name="title"
                        variant="outlined"
                        required
                        fullWidth
                        id="title"
                        label="Título da vaga"
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <TextField
                        autoComplete="company"
                        name="company"
                        variant="outlined"
                        required
                        fullWidth
                        id="company"
                        label="Empresa"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="benefits"
                        label="Benefícios"
                        name="benefits"
                        autoComplete="benefits"
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="salary"
                        label="Salário"
                        name="salary"
                        autoComplete="salary"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="workSchedule"
                        label="Horário de trabalho"
                        name="workSchedule"
                        autoComplete="workSchedule"
                      />
                    </Grid>
                    <Grid item xs={12} md={5}>
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
                    <Grid item xs={12} md={3}>
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
                    <Grid item xs={12}>
                      <TextField
                        id="description"
                        label="Descrição"
                        multiline
                        rowsMax="4"
                        value={value}
                        onChange={handleChange}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => handleJobs()}
                  >
                    Cadastrar
                  </Button>
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
