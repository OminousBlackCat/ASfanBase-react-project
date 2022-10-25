import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {Button,ButtonGroup} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import CropperPro from 'react-cropper-pro';
//===========================================
const actions = [
  { icon: <AddIcon />, name: 'Add' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

export default function ListImg() {
//===========================================
  const [itemData, setItemData] = React.useState([
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',

    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',

    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',

    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',

    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',

    },
  ]);

//===========================================
  const [isVisual, setIsVisual] = React.useState('none')
  const [open, setOpen] = React.useState(false);

  const func = (e) => {
    switch(e.name){
      case 'Delete':
       if(isVisual === ''){
        setIsVisual('none')
      } else {
        setIsVisual('')
      }
      break
      case 'Add':if(open === true){
        setOpen(false)
      } else {
        setOpen(true)
      }      
      break
      default :
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  const Del = (e) => {
    const list = itemData
    itemData.splice(e,1)
    setItemData([...list])
  }
//===========================================
  return (
    <Box>
      <Grid container spacing={2} >
        <Grid xs></Grid>
        <Grid xs={4}>
          <ImageList sx={{ margin: 'auto', width: '100%', minWidth: '400px'}}>
            <ImageListItem key="Subheader" cols={2}>
              <ListSubheader component="div"></ListSubheader>
            </ImageListItem>
            {itemData.map((item,index) => (
              <ImageListItem key={item.img}>
                <Button onClick={(e) => Del(index)} sx={{display: isVisual}} variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid xs>
        <Box sx={{flexGrow: 1}}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ bottom: '8%', right: '5%', position: 'fixed' }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={(e) => func(action)}
              />
            ))}
          </SpeedDial>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Upload image files!"}
            </DialogTitle>
            <Box sx={{minWidth: '300px'}}>
              <Grid container spacing={1} >
                <Grid item xs sx={{display: 'flex'}}>
                  <div style={{margin: 'auto'}}>
                  <CropperPro 
                    defaultImg="" 
                    onChange={(file) => console.log(file)} 
                    onDel={(image) => console.log('remove', image)} 
                  />
                  </div>
                </Grid>
                <Grid item xs sx={{display: 'flex'}}>
                  <ButtonGroup variant="outlined" aria-label="outlined button group" orientation="vertical" sx={{alignSelf: 'center',margin: 'auto'}}>
                    <Button component="label">
                      Upload
                    </Button>
                    <Button component="label">
                      Upload
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Box>
            <DialogActions>
              <Button onClick={handleClose}>CANCEL</Button>
              <Button onClick={handleClose} autoFocus>
                SUMIT
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
        </Grid>
      </Grid>
    </Box>
  );
}