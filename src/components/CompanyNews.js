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

export const CompanyNews = ({cnews}) => {
  const classes = useStyles();

  return(
    <Card variant="outlined" className={classes.root}>
      <CardActionArea>
        <CardMedia title={cnews.id} className={classes.media}>
          <img src={cnews.image} alt={cnews.id} className={classes.image}/>
        </CardMedia> 
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Link href={cnews.url} className={classes.link}>
              {cnews.headline}
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cnews.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}