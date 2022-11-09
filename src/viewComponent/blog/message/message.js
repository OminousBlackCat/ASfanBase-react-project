import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import MessageTable from './messageTable';
import MessageAdd from './messageAdd';
import { Container } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function ListMes() {
  return (
    <>
    <Container>
      <br />
      <MessageAdd />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>t</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">Accept</TableCell>
              <TableCell align="right">Send Time</TableCell>
              <TableCell align="right">More</TableCell>
              <TableCell align="right">More</TableCell>
              <TableCell align="right">More</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
            <MessageTable key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    </>
  );
}
