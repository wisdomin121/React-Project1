import React from "react";
// import { useParams } from "react-router-dom";
// import { fetchStock } from "../actions/index";
import { useDispatch ,useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  card: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  name: {
    align: "left"
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  }
}));

function createData(A, A_VALUE, B, B_VALUE){
  return { A, A_VALUE, B, B_VALUE };
}

const StockPage = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const { symbol } = useParams();
  // dispatch(fetchStock(symbol));
  const stock = useSelector(state => state.stock);
  const rows = [
    createData('Country', stock.country, 'Currency', stock.currency),
    createData('Exchange', stock.exchange, 'IPO', stock.ipo),
    createData('시가총액', stock.marketCapitalization, '발행주식 총수량', stock.shareOutstanding),
    createData('웹사이트', stock.weburl, 'Phone', stock.phone)
  ]

  return (
    <>
      <TopBar />

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.name}>
              <img src={stock.logo} alt={stock.ticker} className={classes.logo}/>
              {stock.name}
            </Typography>
          </Grid>
          
          {/* 그래프 */}
          <Grid item xs={12} sm={6}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                그래프
              </CardContent>
            </Card>
          </Grid>

          {/* 디테일 */}
          <Grid item xs={12} sm={6}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
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
              </CardContent>
            </Card>
          </Grid>
          
          {/* 뉴스 */}
          <Grid item xs={12}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                뉴스
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <BottomNav />
    </>
  );
};

export default StockPage;