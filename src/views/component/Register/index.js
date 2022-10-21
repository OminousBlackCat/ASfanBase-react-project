import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InputAdornment from '@mui/material/InputAdornment';
import Password from '@mui/icons-material/Password';
import Email from '@mui/icons-material/Email';
//===========================================
import request from "../../../utils/request"
//===========================================

export default function LoginAndRegister () {
//===========================================
const form = {
  name: '',
  password: '',
  email: ''
}

const [userInfo_name, setUserInfo_name] = useState('')
const [userInfo_pass, setUserInfo_pass] = useState('')
const [userInfo_email, setUserInfo_email] = useState('')

const [worn_isErrorOfUser, setWorn_isErrorOfUser] = useState(false)
const [worn_isErrorOfPass, setWorn_isErrorOfPass] = useState(false)
const [worn_isErrorOfEmail, setWorn_isErrorOfEmail] = useState(false)

const [worn_TextOfUser, setWorn_TextOfUser] = useState('')
const [worn_TextOfPass, setWorn_TextOfPass] = useState('')
const [worn_TextOfEmail, setWorn_TextOfEmail] = useState('')


const hancleChange_name = (event) => {
  setUserInfo_name(event.target.value)
}
const hancleChange_pass = (event) => {
  setUserInfo_pass(event.target.value)
}
const hancleChange_email = (event) => {
  setUserInfo_email(event.target.value)
}
const navigate = useNavigate()
const submit = () => {
  form.name = userInfo_name
  form.password = userInfo_pass
  form.email = userInfo_email
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
  if (!userInfo_email) {
    setWorn_isErrorOfEmail(true)
    setWorn_TextOfEmail('Incorrect entry.')
  } else {
    setWorn_isErrorOfEmail(false)
    setWorn_TextOfEmail('')
  }
  if (userInfo_name && userInfo_pass && userInfo_email) {
    request({
      url: '/register/register',
      method: 'post',
      data: {
        form
      }
    }).then(function (response) {
      console.log(response);
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
    />
    <TextField 
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
    />
    <TextField 
      id="outlined-password-input"
      label="Email"
      autoComplete="current-password"
      onChange={hancleChange_email}
      value={userInfo_email}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Email fontSize="large"/>
          </InputAdornment>
        ),
      }}
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
          </ButtonGroup>
        </Box>
      </div>
  </Box>  
  );
}
