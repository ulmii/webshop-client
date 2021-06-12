import React from 'react';
import {Divider as MuiDivider, Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  border: {
    borderBottom: '2px solid lightgray',
    width: '100%',
  },
  content: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 22,
    color: 'lightgray',
  },
}));

type Props = {
  children: string;
};

export default function DividerWithText({children, ...props}: Props) {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" {...props}>
      <Grid item xs>
        <MuiDivider />
      </Grid>
      <Grid item className={classes.content}>
        {children}
      </Grid>
      <Grid item xs>
        <MuiDivider />
      </Grid>
    </Grid>
  );
}
