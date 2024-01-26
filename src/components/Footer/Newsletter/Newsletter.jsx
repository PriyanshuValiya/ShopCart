import React from "react"
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaMobileAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./Newsletter.scss"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function Newsletter(){
    const [value, setValue] = React.useState(1);
    return(
        <>
         <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="big-text">SignUp For Latest Updates And Offers...</span>
                <div className="form">
                    <input type="text" placeholder="Email Address..."/>
                    <button>Subscribe</button>
                    </div>
                    <div className="rate">
                    <Box sx={{'& > legend': { mt: 2 }}}>
                     <Typography className="rating" component="legend">Rate Us :</Typography>
                      <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                      </Box>
                    </div>
                <div className="social-icons">
                    <div className="icon">
                    <a href="https://www.facebook.com/profile.php?id=100093844835271"><FaFacebook /></a>
                    <a href="http://github.com/dashboard"><FaGithub /></a>
                    <a href="mailto:valiyapriyansukumar@gmail.com"><SiGmail /></a>
                    <a href="http://www.linkedin.com/in/priyanshu-valiya19012006/"><FaLinkedin /></a>
                    <a href="http://www.instagram.com/priyanshu_valiya/"><FaInstagram /></a>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default Newsletter