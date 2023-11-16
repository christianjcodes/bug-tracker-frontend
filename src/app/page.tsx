'use client'
import styles from './page.module.css';
import Link from 'next/link';
import * as React from "react";
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function Home() {

  const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

  return (
    <div className='h-[50vh] flex flex-col items-center justify-center'>
      <Grid 
        container 
        spacing={2}
        justifyContent="center"
        alignItems="center">
        <Grid item>
          <TextField
              label="Email Address"
              id="email-entry"
              sx={{ m: 0, width: '25ch', height: '55px' }}
          />
        </Grid>
        <Grid item>
          <FormControl sx={{ m: 0, width: '25ch', height: '55px' }} variant="outlined">
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
        </Grid>  

        <Grid item alignItems="center" style={{ display: "flex"}}>
          <Link href="/dashboard">
            <button className="
              bg-teal-500 
              hover:bg-teal-600 
              text-white
              text-xl 
              py-2 px-4 
              rounded
              h-[55px]">
              Sign In
            </button>
          </Link>
        </Grid>
      </Grid>  
      
      <div className='flex flex-row space-x-6 text-sm mt-4'>
        <h3 className='hover:text-cyan-500'><Link href="/forgot-password">Forgot password?</Link></h3>
        <h3 className='hover:text-cyan-500'><Link href="/new-user">New user? Create an account here!</Link></h3>
      </div>

    </div>
  );
}
