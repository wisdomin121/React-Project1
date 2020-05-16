import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    maxWidth: 345,
    margin: 15
  },
  image: {
    height: 140
  },
  link: {
    color: "black"
  },
  media: {
    marginTop: 10
  }
}));

export const GeneralNews = ({gnews}) => {
  const classes = useStyles();

  return(
    <Card variant="outlined" className={classes.root}>
      <CardActionArea>
        <CardMedia title={gnews.id} className={classes.media}>
          <img src={gnews.image} alt={gnews.id} className={classes.image}/>
        </CardMedia> 
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Link href={gnews.url} className={classes.link}>
              {gnews.headline}
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {gnews.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}