import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Test from './test/Test';
import Navbar from './navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Test />
    </div>
  );
}
