import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  // menuButton: {
  //   marginRight: theme.spacing(2)
  // },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            DKR Vagas
          </Typography>
          <Button color="inherit">Entrar</Button>
          <Button color="inherit">Cadastrar-se</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}