import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import { fetchStock } from "../actions/index";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginTop: 20,
    marginBottom: 20,
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
}));

const SymbolItem = ({company}) => {
  const dispatch = useDispatch();
  const { description } = company;
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  if(!description){
    return null;
  }else{
    return(
      <ListItem
        button = {true}
        component = {Link}
        to={`/stocks/${company.symbol}`}
        selected={selectedIndex === 2}
        onClick={(event) => (handleListItemClick(event, 2),
                            dispatch(fetchStock(company.symbol)))}
      >
        <ListItemText primary={
          <React.Fragment>
            <span>
              <b>{description}</b>
            </span>
          </React.Fragment>
        }/>
      </ListItem>
    );
  }
}

const ListPage = () => {
  const classes = useStyles();
  const symbols = useSelector(state => state.symbols);

  return (
    <>
      <TopBar />

      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Divider />
      <div>
        <List component="nav" aria-label="secondary mailbox folder">
          {_.map(symbols, symbol => <SymbolItem key={symbol.symbol} company={symbol}/>)}
        </List>
      </div>
      <BottomNav />
    </>
  );
};

export default ListPage;