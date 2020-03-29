import React from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Test from './test/Test';
import Navbar from './navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Test />
      {/* <Route exact path="/" component={Test} />
      <Route path="/" component={Test} /> */}
      </main>
    
    </div>
  );
}
