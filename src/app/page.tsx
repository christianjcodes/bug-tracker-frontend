'use client'
import styles from './page.module.css';
import Link from 'next/link';
import * as React from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';


export default function Home() {

  const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

  return (
    <div className='login'>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          <TextField
              label="Email Address"
              id="email-entry"
              sx={{ m: 1, width: '25ch' }}
          />
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="password-entry">Password</InputLabel>
              <OutlinedInput
              id="password-entry"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                  <InputAdornment position="end">
                  <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                  >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                  </InputAdornment>
              }
              label="Password"
              />
          </FormControl>
          <Button variant='contained' size='large'>Sign In</Button>
        </div>
      </Box>  
      
      <div className='links'>
        <Link href="/forgot-password">Forgot password?</Link>
        <Link href="/new-user">New user? Create an account here!</Link>
      </div>
    </div>
  );
}
