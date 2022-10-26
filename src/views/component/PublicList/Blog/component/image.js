import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Button, ButtonGroup, Container, Stack} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import CropperPro from 'react-cropper-pro';
import CircularProgress from '@mui/material/CircularProgress';
//===========================================

import request from "../../../../../utils/request"
import ImgCard from './imageCard';
import { width } from '@mui/system';
import { TableImg } from './imageDataList';

const actions = [
  { icon: <AddIcon />, name: 'Add' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

export default function ListImg() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const timer = React.useRef();
  React.useEffect(() => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 4000);
    }
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 25));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
//===========================================
  const [itemData, setItemData] = React.useState(TableImg);

//===========================================
  const [isVisual, setIsVisual] = React.useState('hidden')
  const [open, setOpen] = React.useState(false);
  const [base64, setBase64] = React.useState('');

  const func = (e) => {
    switch(e.name){
      case 'Delete':
       if(isVisual === 'visible'){
        setIsVisual('hidden')
      } else {
        setIsVisual('visible')
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
  const handleImg = () => {
  }
  const getBase64 = (file) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = (e) => {
      console.log(e.target.result)
    }
    console.log(reader)
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
      <Container>
        <br />
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
        </Stack>
          { success ?
          <Grid container spacing={3}>
              {itemData.map((item,index) => (
                <ImgCard key={item.title} item={item} index={index}/>
              ))}
          </Grid>
          :
          <CircularProgress variant="determinate" value={progress}/> 
          }
      </Container>
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
                  onChange={(file) => getBase64(file)} 
                />
                </div>
              </Grid>
              <Grid item xs sx={{display: 'flex'}}>
                <ButtonGroup variant="outlined" aria-label="outlined button group" orientation="vertical" sx={{alignSelf: 'center',margin: 'auto'}}>
                  <Button component="label" onClick={handleImg}>
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
    </Box>
  );
}