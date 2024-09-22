import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Tarjeta({empresa}) {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
         component="img"
          height="180"
          image="/descargar (3).jpg"
          alt={empresa.name}
        />
        <CardContent>
          <Typography gutterBottom  variant="h5" component="div">
            {empresa.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {empresa.descript}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}