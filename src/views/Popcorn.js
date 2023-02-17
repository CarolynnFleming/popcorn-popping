import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Bags from'../assets/bags.jpeg';
import {Grid} from '@mui/material';
import pop from '../assets/popcorn.gif';
import {Link} from 'react-router-dom';
import GrabnGo from '../assets/grabngo.jpg';

export default function Popcorn() {
  return (
    <Grid container spacing={10}  style={{paddingTop:40,paddingLeft: 90, paddingRight:70}}>
      <Grid item xs={4} >
    <Card sx={{ maxWidth: 345 }} style={{boxShadow: '40px 20px 60px #f2bb05'}}>
      <Link to="/Bags" style={{textDecoration: 'none', color:'red'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Bags}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bags
          </Typography>
          <Typography variant="body2" color="primary">
           4 Flavors Available <br/>
           4 Sizes Available
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow: '40px 20px 60px #f2bb05'}}>
    <Link to="/GrabAndGo" style={{textDecoration: 'none', color:'red'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={GrabnGo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Grab & Go
          </Typography>
          <Typography variant="body2" color="primary">
            10 Flavors Available <br/>
            1 Size Available
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow: '40px 20px 60px #f2bb05'}}>
    <Link to="/MixesBags" style={{textDecoration: 'none', color:'red'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pop}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="primary">
            Lizards are a widespread group of squamate reptiles, with over 4,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow: '40px 20px 60px #f2bb05'}}>
    <Link to="/Bucket" style={{textDecoration: 'none', color:'red'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pop}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="primary">
            Lizards are a widespread group of squamate reptiles, with over 4,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow: '40px 20px 60px #f2bb05'}}>
    <Link to="/OneGallon" style={{textDecoration: 'none', color:'red'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pop}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="primary">
            Lizards are a widespread group of squamate reptiles, with over 4,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow: '40px 20px 60px #f2bb05'}}>
    <Link to="/OneGallonSportsTin" style={{textDecoration: 'none', color:'red'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pop}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="primary">
            Lizards are a widespread group of squamate reptiles, with over 4,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow: '40px 20px 60px #f2bb05'}}>
    <Link to="/TwoGallonTin" style={{textDecoration: 'none', color:'red'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pop}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="primary">
            Lizards are a widespread group of squamate reptiles, with over 4,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow: '40px 20px 60px #f2bb05'}}>
    <Link to="/ThreeGallonTin" style={{textDecoration: 'none', color:'red'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pop}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="primary">
            Lizards are a widespread group of squamate reptiles, with over 4,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow: '40px 20px 60px #f2bb05'}}>
    <Link to="/Italianice" style={{textDecoration: 'none', color:'red'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pop}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="primary">
            Lizards are a widespread group of squamate reptiles, with over 4,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </Grid>"
    </Grid>

    
  )
}
