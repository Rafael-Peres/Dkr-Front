import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import bgimg from '../../../assets/carteira.jpg';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  root: {
    padding: theme.spacing(3, 2),
    marginBottom: theme.spacing(3),
  },
}));

export default function JobList({ history }) {
  const classes = useStyles();

  const handleJobsDetail = async () => {
    history.push('/jobs/detail');
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
      <Paper className={classes.root}>
        <Typography
          variant="h5"
          component="h3"
          onClick={() => handleJobsDetail()}
        >
          Full Stack Developer
        </Typography>
        <Typography component="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Paper>

      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Product Owner
        </Typography>
        <Typography component="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Paper>

      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Quality Assurance
        </Typography>
        <Typography component="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Paper>
    </div>
  );
}
