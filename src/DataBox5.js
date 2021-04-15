import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function DataBox5() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Data Field 5</Title>
      <Typography component="p" variant="h4">
        Some More Data 
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        More Text
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Link to a different graph/page
        </Link>
      </div>
    </React.Fragment>
  );
}