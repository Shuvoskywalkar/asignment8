import React from 'react';
import './posts.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'; 
import { Link } from 'react-router-dom';
// import { Link } from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const Popsts = (props) => {
    const{title,id}=props.posts
    // console.log(posts)
    const classes = useStyles();
    // const halfDetails=posts.body
    return (
    <div className="products">
     <Grid container spacing={3}> <Grid item xs={4}> 
    <Card className={classes.root} >
 <CardActionArea>
   <CardMedia
     className={classes.media}
     image="/static/images/cards/contemplative-reptile.jpg"
     title="Contemplative Reptile"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="h2">
       {title}
     </Typography>
     <Typography variant="body2" color="textSecondary" component="p">
       Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
       across all continents except Antarctica

       
     </Typography>
   </CardContent>
 </CardActionArea>
 <CardActions>
 <Button
        variant="contained"
        color="link"
        className={classes.button}
        
      >
        share
      </Button>
   <Button variant="outlined" color="secondary">
       <Link to={`/ShowDetails/${id}`} >
           See Details
           </Link>
     
   </Button>
 </CardActions>
</Card>
      </Grid> </Grid>

      </div>
   
     

   

       
      
      )  
};

export default Popsts;