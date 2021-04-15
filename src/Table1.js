import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Table Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '12/04/21 21:30', '98494842', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '12/04/21 21:30', '98495443', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '12/04/21 21:30', '98495641', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '12/04/21 21:30', '98495344', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '12/04/21 21:30', '98494040', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Table1() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Table Title (Unit Details)</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date/Time</TableCell>
            <TableCell>Unit Number</TableCell>
            <TableCell>Usage Hours</TableCell>
            <TableCell>Profit</TableCell>
            <TableCell align="right">Data Field</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Table1
        </Link>
      </div>
    </React.Fragment>
  );
}