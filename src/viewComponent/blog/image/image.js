import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { Button, ButtonGroup, Container, Stack} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField'
import { AccountCircle } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import CropperPro from 'react-cropper-pro';
import CircularProgress from '@mui/material/CircularProgress';
//===========================================

import request from "../../../utils/request"
import ImgCard from './imageCard';
import { width } from '@mui/system';
import { TableImg } from './imageDataList';



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
//===========================================
  const [itemData, setItemData] = React.useState(TableImg);
  const [isVisual, setIsVisual] = React.useState('hidden')
  const [open, setOpen] = React.useState(false);
  const [base64, setBase64] = React.useState('');

  const form = {
    img: ''
  }
//===========================================
  const handleImg = () => {
    console.log(form.img)
    request({
      url: '/img/add',
      method: 'post',
      data: {
        form
      }
    }
    ).then(function (response) {
      console.log(response)
    })
  }
  const getBase64 = (file) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = (e) => {
      setBase64(e.target.result)
      form.img = base64
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
      <Container>
        <br />
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button 
            variant="outlined" 
            startIcon={<AddIcon />}
            onClick={() => {
              if(open === true){
                setOpen(false)
              } else {
                setOpen(true)
              }
            }}
          >
            New Blog
          </Button>
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
      {/* <Box sx={{flexGrow: 1}}>
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
      </Box> */}
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Upload image files!"}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
           }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-Img-Author" label="Img Author" variant="standard" />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <InfoIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-Img-Content" label="Img Content" variant="standard" />
        </Box>
        <Box sx={{alignSelf: 'center'}}>
          <CropperPro
            label="Img"
            onChange={(file) => getBase64(file)} 
          />
        </Box>
      </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>CANCEL</Button>
        <Button onClick={handleClose} autoFocus>
          SUMIT
        </Button>
      </DialogActions>
    </Dialog>
    </Box>
  );
}