import React from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import { useParams } from "react-router-dom";
import { fetchStock } from "../actions/index";
import { useDispatch ,useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const StockPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { symbol } = useParams();
  dispatch(fetchStock(symbol));
  const stock = useSelector(state => state.stock);

  return (
    <>
      <TopBar />

      <Card className={classes.root}>
        <CardContent>
          <img src={stock.logo} alt={stock.ticker}/>
          <Typography variant="h5" component="h2">
            {stock.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>

      <BottomNav />
    </>
  );
};

export default StockPage;