import * as React from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import TitleIcon from '@mui/icons-material/Title';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import MessageIcon from '@mui/icons-material/Message';
import TimerIcon from '@mui/icons-material/Timer';
import { Dialog, DialogTitle, IconButton, Box, TextField, DialogContent, DialogActions } from '@mui/material';

import { AddMsg } from '../../../utils/api/index'

export default function MessageAdd () {
  const [open, setOpen] = React.useState(false)
  const [time, setTime] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [accept, setAccept] = React.useState('')
  const [content, setContent] = React.useState('')

  const form = {
    title: '',
    accept: '',
    sendtime: '',
    content: ''
  }

  const handleAdd = () => {
    AddMsg(form)
  }

  const handleClose = () => {
    setOpen(false);
  };
  const sendTime = () => {
    setOpen(true)
    let sendtime = new Date()
    setTime(sendtime)
    console.log(time)
  }
  return (
    <>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Message
          </Typography>
          <Button 
            variant="outlined" 
            startIcon={<AddIcon />}
            onClick={sendTime}
          >
            New Message
          </Button>
        </Stack>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={'sm'}
          fullWidth={true}
        >
          <DialogTitle>
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
              <Box sx={{ display: 'flex', alignItems: 'flex-end', alignSelf: 'center' }}>
                <TitleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                 id="input-Msg-Title" 
                 label="Msg Title" 
                 variant="standard" 
                 value={title} 
                 onChange={(event) => setTitle(event.target.value)}
                 />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', alignSelf: 'center' }}>
                <ContentPasteGoIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                 id="input-Msg-Accept" 
                 label="Msg Accept" 
                 variant="standard" 
                 value={accept}
                 onChange={(event) => setAccept(event.target.value)}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', alignSelf: 'center' }}>
                <TimerIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                 id="input-Msg-Time" 
                 label="Msg Time" 
                 variant="standard" 
                 value={time} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', alignSelf: 'center' }}>
                <MessageIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                 id="input-Msg-Content"
                 label="Msg Content" 
                 variant="standard" 
                 value={content} 
                 onChange={(event) => setContent(event.target.value)}
                />
              </Box>
            </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>CANCEL</Button>
              <Button onClick={handleAdd} autoFocus>
                SUMIT
              </Button>
            </DialogActions>
        </Dialog>
    </>
  )
}