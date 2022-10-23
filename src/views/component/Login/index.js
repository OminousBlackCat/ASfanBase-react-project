import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InputAdornment from '@mui/material/InputAdornment';
import Password from '@mui/icons-material/Password';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
//===========================================
import request from "../../../utils/request"
//===========================================

export default function Login () {
//===========================================
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('')
  const [mes, setMes] = useState('')
  const [vertical, setVertical] = useState('top')
  const [horizontal, setHorizontal] = useState('center')


  const handleClose = () => {
    setOpen(false)
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
//===========================================
  const form = {
    name: '',
    password: ''
  }
  const [userInfo_name, setUserInfo_name] = useState('')
  const [userInfo_pass, setUserInfo_pass] = useState('')

  const [worn_isErrorOfUser, setWorn_isErrorOfUser] = useState(false)
  const [worn_isErrorOfPass, setWorn_isErrorOfPass] = useState(false)

  const [worn_TextOfUser, setWorn_TextOfUser] = useState('')
  const [worn_TextOfPass, setWorn_TextOfPass] = useState('')

  const hancleChange_name = (event) => {
    setUserInfo_name(event.target.value)
  }
  const hancleChange_pass = (event) => {
    setUserInfo_pass(event.target.value)
  }
  const navigate = useNavigate()
  const submit = () => {
    form.name = userInfo_name
    form.password = userInfo_pass
    if (!userInfo_name) {
      setWorn_isErrorOfUser(true)
      setWorn_TextOfUser('Incorrect entry.')
    } else {
      setWorn_isErrorOfUser(false)
      setWorn_TextOfUser('')
    }
    if (!userInfo_pass) {
      setWorn_isErrorOfPass(true)
      setWorn_TextOfPass('Incorrect entry.')
    } else {
      setWorn_isErrorOfPass(false)
      setWorn_TextOfPass('')
    }
    if (userInfo_name && userInfo_pass) {
      request({
        url: '/login/login',
        params: {
          form
        }
      }).then(function (response) {
        console.log(response.data.status)
        if (response.data.status === 200) { 
          setOpen(true)
          setType('success')
          setMes('Successful')
          navigate('/Home')
        } else {
          setOpen(true)
          setType('error')
          setMes('Error')
        }
      })
    }

  }
  const cancel = () => {
  }
//===========================================
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > 
      <TextField
        error={worn_isErrorOfUser}
        id="outlined-basic"
        label="UserName"
        onChange={hancleChange_name}
        value={userInfo_name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBoxIcon fontSize="large"/>
            </InputAdornment>
          ),
        }}
        helperText={worn_TextOfUser}
      />
      <TextField 
        error={worn_isErrorOfPass}
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={hancleChange_pass}
        value={userInfo_pass}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Password fontSize="large"/>
            </InputAdornment>
          ),
        }}
        helperText={worn_TextOfPass}
      />
      <div style={{margin: 'auto', justifyContent: 'center'}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup color="primary" variant="outlined" aria-label="outlined button group">
            <Button onClick={submit}>SUBMIT</Button>
            <Button onClick={cancel}>CANCEL</Button>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleClose}
              key={vertical + horizontal}
              autoHideDuration={2000}
            >
            <Alert severity={type} sx={{ width: '100%' }}>
              {mes}
            </Alert>
            </Snackbar>
          </ButtonGroup>
        </Box>
      </div>
    </Box>
  );
}
