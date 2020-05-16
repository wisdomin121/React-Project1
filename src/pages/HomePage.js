import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import { GeneralNews } from '../components/GeneralNews';


const useStyles = makeStyles((theme) => ({
  welcome: {
    color: "#6E6E6E",
    marginTop: 60,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  root: {
    minWidth: 275,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardcontent: {
    display: "flex",
    flexWrap:"wrap",
    justifyContent: "center"
  },
  carddiv: {
    marginBottom: 70
  },
  news: {
    marginTop: 10
  }
}));

const HomePage = () => {
  const classes = useStyles();
  const rates = useSelector(state => state.rates);
  const generalnews = useSelector(state => state.generalnews);
  
  return (
    <>
      <TopBar />
      <div className={classes.welcome}>
        <Typography variant='h4'>
          <b>Welcome to the STOCK</b>
        </Typography>
      </div>

      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="ex) APPLE, AMAZON... "
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      
      <div className={classes.carddiv}> 
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              환율
            </Typography>
            <Typography variant="body2" component="p">
              <b>한국: </b> {rates['KRW']}
            </Typography>
            <Typography variant="body2" component="p">
              <b>미국: </b> {rates['USD']} 
            </Typography>
            <Typography variant="body2" component="p">
              <b>유럽연합: </b> {rates['EUR']} 
            </Typography>
            <Typography variant="body2" component="p">
              <b>중국: </b> {rates['CNY']} 
            </Typography>
            <Typography variant="body2" component="p">
              <b>일본: </b> {rates['JPY']}  
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root} variant="outlined">
          <Typography gutterBottom variant="h5" component="h2" className={classes.news}>
            <b>General News</b>
          </Typography>
          <CardContent className={classes.cardcontent}>
            {_.map(generalnews, gnews => <GeneralNews key={gnews.id} gnews={gnews}/>)}
          </CardContent>
        </Card>
      </div>
      
      <BottomNav />
    </>
  );
};

export default HomePage;