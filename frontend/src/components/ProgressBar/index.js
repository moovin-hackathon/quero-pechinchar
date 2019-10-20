import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    borderRadius: 10,
    backgroundColor: lighten('#CCC', 0.5),
  },
  bar: {
    borderRadius: 10,
    backgroundColor: '#C3BC32',
  },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default function CustomizedProgressBars({ variant, value }) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <BorderLinearProgress
          className={classes.margin}
          variant={variant}
          color="secondary"
          value={value}
        />
      </div>
    );
  }