import * as React from 'react'
import {Card, Button} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableImg } from './imageDataList';

export default function ImgCard({item, index}) {
  const [itemData, setItemData] = React.useState(TableImg);
  const [isVisual, setIsVisual] = React.useState('hidden')

  const Del = (e) => {
    const list = itemData
    itemData.splice(e,1)
    setItemData([...list])
  }
  return (
    <Grid item key={index} xs={12} sm={index===0 ? 12 : 6} md={index===0 ? 6 :3}>
      <Card sx={{ position: 'relative'}} key={item.img}>
        <CardMedia 
          component="img"
          alt="green iguana"
          height="140"
          image={item.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.author}
          </Typography>
        </CardContent>
        <CardActions>
        <Button 
          size="small"
          onClick={(e) => Del(index)} 
          sx={{}} 
          variant="outlined" 
          startIcon={<DeleteIcon />}
        >
                  Delete
        </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}