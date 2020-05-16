import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import CompanyDetail from '../components/CompanyDetail';
import CompanyCandle from '../components/CompanyCandle';
import { CompanyNews } from '../components/CompanyNews';


const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 55
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
  },
  cardcontent: {
    display: "flex",
    flexWrap:"wrap",
    justifyContent: "center"
  },
  news: {
    marginTop: 10
  }
}));

const StockPage = () => {
  const classes = useStyles();
  const stock = useSelector(state => state.stock);
  const companynews = useSelector(state => state.companynews);

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
            <Card variant="outlined">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.news}>
                  <b>CANDLE CHART</b>
                </Typography>
                <CompanyCandle/>
              </CardContent>
            </Card>
          </Grid>

          {/* 디테일 */}
          <Grid item xs={12} sm={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.news}>
                  <b>COMPANY INFO.</b>
                </Typography>
                <CompanyDetail/>
              </CardContent>
            </Card>
          </Grid>
          
          {/* 뉴스 */}
          <Grid item xs={12}>
            <Card variant="outlined">
              <Typography gutterBottom variant="h5" component="h2" className={classes.news}>
                <b>A week's news</b>
              </Typography>
              <CardContent className={classes.cardcontent}>
                {_.map(companynews, cnews => <CompanyNews key={cnews.headline} cnews={cnews}/>)}
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