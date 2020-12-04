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
import { Card } from '../../../../components/Card';
import { storeCurriculum } from '../../../../services/requests/curriculums';
import { TextareaAutosize } from '@material-ui/core';

import rhImage from '../../../../assets/RHIlustration.svg';

import PageHeader from '../../../../components/Header';
import PageFooter from '../../../../components/Footer';

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
    // marginTop: theme.spacing(2),
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

export default function Curriculum({ history }) {
  const classes = useStyles();
  const [telephone, setTelephone] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [interest, setInterest] = useState('');
  const [professionalGoal, setProfessionalGoal] = useState('');
  const [professionalResume, setProfessionalResume] = useState('');
  const [course, setCourse] = useState('');
  const [company, setCompany] = useState('');

  const [value, setValue] = React.useState('');

  const handleSubmit = async () => {
    const curriculum = await storeCurriculum({
      data: {
        cellPhone,
        interest,
        telephone,
        professionalGoal,
        professionalResume,
        course,
        company,
      },
    }).catch(err => console.log(err.response.data));
  };

  const inputLabel = React.useRef(null);
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleChangeLetter = event => {
    setValue(event.target.value);
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
                Meu Currículo
              </Typography>

              <div className={classes.paper}>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        autoComplete="telephone"
                        name="telephone"
                        variant="outlined"
                        fullWidth
                        id="telephone"
                        label="Telefone"
                        autoFocus
                        onChange={e => setTelephone(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        autoComplete="cellPhone"
                        name="cellPhone"
                        variant="outlined"
                        required
                        fullWidth
                        id="cellPhone"
                        label="Celular"
                        autoFocus
                        onChange={e => setCellPhone(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        autoComplete="interest"
                        name="interest"
                        variant="outlined"
                        required
                        fullWidth
                        id="interest"
                        label="Interesses"
                        autoFocus
                        onChange={e => setInterest(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="professionalGoal"
                        label="Objetivos Profissionais"
                        name="professionalGoal"
                        autoComplete="professionalGoal"
                        onChange={e => setProfessionalGoal(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="professionalResume"
                        label="Resumo Profissional"
                        name="professionalResume"
                        autoComplete="professionalResume"
                        onChange={e => setProfessionalResume(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="course"
                        label="Graduação"
                        name="course"
                        autoComplete="course"
                        onChange={e => setCourse(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="company"
                        label="Ultima Empresa"
                        name="company"
                        autoComplete="company"
                        onChange={e => setCompany(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
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
