import * as React from 'react'
import CropperPro from 'react-cropper-pro';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material';
import Box from '@mui/material/Box';
import { Button, ButtonGroup, Container, Stack} from '@mui/material';

//===========================================

export default function ImgUpload () {
//===========================================
  const [open, setOpen] = React.useState(false);
  const [base64, setBase64] = React.useState('');
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
//===========================================
  return (
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
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
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
  )
}