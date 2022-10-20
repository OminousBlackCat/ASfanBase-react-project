import React, { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router-dom";


function Login () {
  const form = {
    name: '',
    password: ''
  }
  const [userInfo_name, setUserInfo_name] = useState('')
  const [userInfo_pass, setUserInfo_pass] = useState('')
  const hancleChange_name = (event) => {
    setUserInfo_name(event.target.value)
  }
  const hancleChange_pass = (event) => {
    setUserInfo_pass(event.target.value)
  }
  const navigate = useNavigate()
  function submit () {
    form.name = userInfo_name
    form.password = userInfo_pass
    
    navigate("/Home")
  }
  function cancel () {
  }

  return (
    <Box>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="UserName"
        onChange={hancleChange_name}
        value={userInfo_name}
      />
      <TextField 
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={hancleChange_pass}
        value={userInfo_pass}
       />
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup color="primary" variant="outlined" aria-label="outlined button group">
        <Button onClick={submit}>SUBMIT</Button>
        <Button onClick={cancel}>CANCEL</Button>
      </ButtonGroup>
    </Box>
    </Box>

  );
}

export default Login