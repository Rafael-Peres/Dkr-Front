import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import bgimg from "../../../../assets/carteira.jpg";
import { Card } from "../../../../components/Card";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{
        fontWeight: "bolder",
        color: "#4F4F4F"
      }}
    >
      {"Copyright © "}
      DKR - Vagas {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  formControl: {
    fontSize: "0.5rem"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  textField: {
    marginTop: theme.spacing(3),
    width: "100%"
  },
  formControl: {
    marginTop: theme.spacing(0),
    width: "100%"
  }
}));

export default function SignUpRecruiter({ history }) {
  const classes = useStyles();

  const [value, setValue] = React.useState("");

  const handleOption = event => {
    history.push("/signup/option");
  };

  const inputLabel = React.useRef(null);
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const handleChangeLetter = event => {
    setValue(event.target.value);
  };

  const handleSignin = async () => {
    history.push("/signin");
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundSize: "cover",
        backgroundImage: `url(${bgimg})`
      }}
    >
      <Container component="main" maxWidth="lg">
        <Grid
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundSize: "cover"
          }}
        >
          <Grid item xs={12} sm={9} md={8} lg={7}>
            <Card>
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Cadastro de Candidatos
                </Typography>
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
                    <Grid item xs={12} md={4}>
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

                    <Grid item xs={12} md={4}>
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
                    <Grid item xs={12} md={4}>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="dd/MM/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          label="Data de Aniversário"
                          value={selectedDate}
                          onChange={handleDateChange}
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12} md={3}>
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
                          onChange={handleChange("gender")}
                          labelWidth={labelWidth}
                          inputProps={{
                            name: "gender",
                            id: "gender"
                          }}
                        >
                          <option value="   " />
                          <option value={10}>Masculino</option>
                          <option value={20}>Feminino</option>
                          <option value={30}>Outros</option>
                        </Select>
                      </FormControl>
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
                          onChange={handleChange("state")}
                          labelWidth={labelWidth}
                          inputProps={{
                            name: "state",
                            id: "state"
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
                    <Grid item xs={12} md={4}>
                      <TextField
                        autoComplete="profission"
                        name="profission"
                        variant="outlined"
                        required
                        fullWidth
                        id="profission"
                        label="Profissão"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        autoComplete="nivel"
                        name="nivel"
                        variant="outlined"
                        required
                        fullWidth
                        id="nivel"
                        label="Nível"
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <TextField
                        autoComplete="pretenssion"
                        name="pretenssion"
                        variant="outlined"
                        required
                        fullWidth
                        id="pretenssion"
                        label="Pretensão Salarial"
                        autoFocus
                      />
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
                    <Grid item xs>
                      <Link
                        onClick={() => handleOption()}
                        variant="option"
                        style={{ cursor: "pointer" }}
                      >
                        Voltar
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link
                        onClick={() => handleSignin()}
                        variant="signin"
                        style={{ cursor: "pointer" }}
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
