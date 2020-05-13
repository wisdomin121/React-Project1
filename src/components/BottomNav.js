import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ListIcon from '@material-ui/icons/List';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Link, useLocation } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    background: "#6E6E6E",
    position: "fixed",
    bottom: 0,
    width: "100%",
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0
    }
  }
});

export default function BottomNav() {
  const classes = useStyles();
  const location = useLocation();

  const [value, setValue] = React.useState(() => {
    const path = location.pathname;
    if(path === "list") return 1;
    if(path === "help") return 2;
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
        label="STOCK" 
        icon={<ShowChartIcon/>}
        component={Link}
        to="/" 
      />
      <BottomNavigationAction 
        label="LIST" 
        icon={<ListIcon />}
        component={Link}
        to="/List" 
      />
      <BottomNavigationAction 
        label="HELP" 
        icon={<HelpOutlineIcon />}
        component={Link}
        to="/Help" 
      />
    </BottomNavigation>
  );
}