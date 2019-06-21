import React from 'react';
import './LandingPage.css';
import { TextField, Button } from '@material-ui/core';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="left-form">
        {/* <svg className="bird-eye-logo">Logo here</svg> */}
        <p>LOGO</p>
        <h1>Welcome to Birdseye!</h1>
        <form>
          <TextField 
            variant="outlined"
            margin="normal"            
            label="Email Address" 
          />
          <TextField 
            variant="outlined"
            margin="normal"            
            label="Password"
          />
          <Button 
            label="Submit" 
            type="submit" 
            variant="contained"            
          >
            Sign In
          </Button>
          <Button 
            label="Submit" 
            type="submit" 
            variant="contained"            
          >
            Create Account
          </Button>
          {/* <Link href="#" variant="body2">
            Forgot password?
          </Link> */}
        </form>
      </div>
      <div className="blue-swoosh">
        
      </div>      
    </div>
  );
}

export default LandingPage;