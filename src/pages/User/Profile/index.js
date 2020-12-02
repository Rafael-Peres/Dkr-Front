import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card } from '../../../components/Card';

import loginImage from '../../../assets/loginIlustration.svg';

import PageHeader from '../../../components/Header';
import PageFooter from '../../../components/Footer';
import zIndex from '@material-ui/core/styles/zIndex';

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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
  },
  form: {
    width: '50%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  imageLogin: {
    width: '50%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div
      style={{
        // display: 'flex',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundSize: 'cover',
      }}
    >
      <PageHeader />
      <Container component="main" maxWidth="lg">
        <Grid
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item xs={12} sm={9} md={8} lg={7}>
            <Card>
              <CssBaseline />
              <Typography component="h1" variant="h5">
                Perfil
              </Typography>
              <div className={classes.paper}>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        autoComplete="user"
                        name="user"
                        variant="outlined"
                        required
                        fullWidth
                        id="user"
                        label="insira seu nome de usuario"
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        autoComplete="fname"
                        name="fullName"
                        variant="outlined"
                        required
                        fullWidth
                        id="fullName"
                        label="Nome completo"
                        autoFocus
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
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        autoComplete="birthDate"
                        name="birthDate"
                        variant="outlined"
                        required
                        fullWidth
                        id="fullName"
                        label="Data de nascimento"
                        type="date"
                        autoFocus
                        disabledToubar
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
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
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
                    <Grid item xs={12} md={12} lg={12}>
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
                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="State"
                        label="Estado"
                        name="State"
                        autoComplete="State"
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
                    Salvar
                  </Button>
                </form>
                <Container
                  style={{
                    // display: 'flex',
                    flex: 1,
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${loginImage})`,
                  }}
                ></Container>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <PageFooter />
    </div>
  );
}
