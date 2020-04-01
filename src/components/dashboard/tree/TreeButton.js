import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
    treeButton: {
        color: '#ffffff',
        background: '#5aac44',
    },
  });

export default function TreeButton({ children, onClick }) {
    const classes = useStyles();

    return (
        <Button className={classes.treeButton} onMouseDown={onClick}>
            {children}
        </Button>
    );
};