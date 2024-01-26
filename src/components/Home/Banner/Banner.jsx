import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
import Button from '@mui/material/Button';

const Banner = () => {
    return(
     <>
     <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h3>True Wireless</h3>
                <h1>Headphones</h1>
                <p>Starting From &#8377; 999</p>
                <Button variant="contained">Shop Now</Button>
                <Button variant="outlined" style={{color: "White"}}>Read More</Button>
            </div>
                <img className="banner-img" src={BannerImg} alt="" />
        </div>
     </div>
     </>
    );
};

export default Banner;
