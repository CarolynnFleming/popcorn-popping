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
import Mix from '../assets/mix.jpg';
import Bucket from '../assets/Bucket.jpg';
import oneG from '../assets/oneG.jpg';
import sportsT from '../assets/sportsT.jpeg';
import goldT from '../assets/goldTin.jpeg';
import whiteT from '../assets/whiteTin.jpeg';
import ice from '../assets/ice.jpg';
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
          image={Mix}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mixes Bags
          </Typography>
          <Typography variant="body2" color="primary">
           3 Flavors Available<br/>
           4 Sizes Available
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
          image={Bucket}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bucket
          </Typography>
          <Typography variant="body2" color="primary">
            7 Flavors Available<br/>
            1 Size Available
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
          image={oneG}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            1 Gallon
          </Typography>
          <Typography variant="body2" color="primary">
          7 Flavors Available<br/>
            1 Size Available
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
          image={sportsT}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            1 Gallon Sports Tin
          </Typography>
          <Typography variant="body2" color="primary">
          7 Flavors Available<br/>
            1 Size Available
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
          image={goldT}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            2 Gallon Tin
          </Typography>
          <Typography variant="body2" color="primary">
          7 Flavors Available<br/>
            1 Size Available
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
          image={whiteT}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            3 Gallon Tin
          </Typography>
          <Typography variant="body2" color="primary">
          7 Flavors Available<br/>
            1 Size Available
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
          image={ice}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Italian Ice
          </Typography>
          <Typography variant="body2" color="primary">
            12 Flavors Available<br/>
            4 Sizes Available  
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </Grid>"
    </Grid>

    
  )
}
