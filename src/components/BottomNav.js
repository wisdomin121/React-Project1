import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles({
  root: {
    background: "#6E6E6E",
    position: "fixed",
    bottom: 0,
    width: "100%",
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
    },
    "& .Mui-selected": {
      color: "white"
    }
  },
  navaction: {
    color: "#383838"
  }
});

export default function BottomNav() {
  const classes = useStyles();
  const location = useLocation();

  const [value, setValue] = React.useState(() => {
    const path = location.pathname;
    if(path === "/list") return 1;
    if(path === "/help") return 2;
    return 0;
  });

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
        label="HOME" 
        icon={<HomeIcon/>}
        component={Link}
        to="/" 
        className={classes.navaction}
      />
      <BottomNavigationAction 
        label="LIST" 
        icon={<ListIcon />}
        component={Link}
        to="/list" 
        className={classes.navaction}
      />
      <BottomNavigationAction 
        label="ABOUT" 
        icon={<InfoIcon />}
        component={Link}
        to="/about" 
        className={classes.navaction}
      />
    </BottomNavigation>
  );
}