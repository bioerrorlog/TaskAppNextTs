import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Test from './test/Test';
import Tree from './tree/Tree';
import Board from './board/Board';
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
        <Switch>
          <Route exact path="/" component={Tree} />
          <Route path="/board" component={Board} />
          <Route path="/test" component={Test} />
        </Switch>

      </main>
    
    </div>
  );
}
