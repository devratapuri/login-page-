"use client"
import axios from "axios";
import { useState } from "react";
import { AppBar,Typography,Button,TextField,Link} from "@mui/material";
const signIn = async (email, password) => {
  const response = await axios.post("https://reqres.in/api/login", {
    email,
    password,
  });

  if (response.status === 200) {
    // The user has been signed in successfully.
    return response.data;
  } else {
    // There was an error signing in the user.
    return null;
  }
};

const SignIn = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    const data = await signIn("johndoe@example.com", "password");
    setUser(data);
  };

  return (
      <div style={{"background-color": "white",color:"black"}}>
       {/* <AppBar position="static" style={{"background-color": "white"}}>
       <Typography variant="h6" color="black">
          Udacity
        </Typography>
       </AppBar> */}
       <Typography variant="h3" color ="black" align="center">
        Sign In To your Account<br /> <br /> 
    </Typography>
    <Typography variant="h5" color ="black" align="center">
    Build skills for today, tomorrow, and beyond.<br></br>
    <center>Education to future-proof your career.</center><br></br>
    </Typography>
    <center>

    <div className="inline-block">
   <Button variant="outlined" style={{ display: "inline-block" ,margin: "10px"}} >
    <div style={{"margin-right":"10px",display : "inline-block"}}>
   <img width="18" height="18" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/> </div>
    Login from google</Button>
    <Button variant="outlined" style={{ display: "inline-block" ,margin: "10px"}}>
      <div  style={{"margin-right":"10px",display : "inline-block"}}>
    <img width="18" height="20" src="https://img.icons8.com/fluency/48/facebook.png" alt="facebook"/>
      </div>
      Login from Facebook</Button>
    <hr style={{"width":"40%",display: "inline-block", fontWeight: "bold"}} />
    Or
    <hr style={{"width":"40%",display: "inline-block", fontWeight: "bold"}} />
    </div>
      <form onSubmit={handleSignIn}>
      <TextField id="outlined-basic" label="EmailId" variant="outlined" style={{"height":"10%","width":"80%"}}/><br/><br />
      <TextField id="outlined-basic" label="password" variant="outlined" style={{"height":"10%","width":"80%"}}/><br/><br />
      <div style={{"fontSize":"10px","color":"Black"}}>
      By clicking "Sign in," you agree to our Terms of Use and our Privacy Policy.<br/>
        </div><br />
        <Button   style={{"background-color": "blue" }}variant="contained" type="submit">Sign In</Button>
      </form>
      <Link href="#" underline="none">
   Forgot your password
</Link><br></br>
<hr style={{"width":"40%",display: "inline-block", fontWeight: "bold"}} />
    Or
    <hr style={{"width":"40%",display: "inline-block", fontWeight: "bold"}} /><br></br>
<Link href="#" underline="none">
   Sign with your organization.
</Link>
    </center>

    </div>
  );
};

export default SignIn;
