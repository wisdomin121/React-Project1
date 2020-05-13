import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";



const SymbolItem = ({company}) => {
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
        onClick={(event) => handleListItemClick(event, 2)}
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
  const symbols = useSelector(state => state.symbols);

  return (
    <>
      <TopBar />
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