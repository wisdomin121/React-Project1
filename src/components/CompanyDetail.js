import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useSelector } from "react-redux";

function createData(A, A_VALUE, B, B_VALUE){
  return { A, A_VALUE, B, B_VALUE };
}

export default function CompanyDetail(){
  const stock = useSelector(state => state.stock);
  const rows = [
    createData('Country', stock.country, 'Currency', stock.currency),
    createData('Exchange', stock.exchange, 'IPO', stock.ipo),
    createData('시가총액', stock.marketCapitalization, '발행주식 총수량', stock.shareOutstanding),
    createData('웹사이트', stock.weburl, 'Phone', stock.phone)
  ]

  return(
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell align="center"><b>{row.A}</b></TableCell>
              <TableCell align="center">{row.A_VALUE}</TableCell>
              <TableCell align="center"><b>{row.B}</b></TableCell>
              <TableCell align="center">{row.B_VALUE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}