import classes from "./Footer.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.Footer__social}>
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <YouTubeIcon/>
      </div>
      <div className={classes.Footer__options}>
        <p>Get the IMDb App</p>
        <p>Help</p>
        <p>Site Index</p>
        <p>IMDbPro</p>
        <p>Box Office Mojo</p>
        <p>IMDb Developer</p>
        <p>Press Room</p>
        <p>Advertising</p>
        <p>Jobs</p>
        <p>Conditions of Use</p>
        <p>Privacy Policy</p>
        <p>Interest-Based Ads</p>
      </div>
      <p className={classes.Footer__parentCompany}>an amazon company</p>
      <p className={classes.Footer__copyright}>© 1990-2022 by IMDb.com, Inc.</p>
    </div>
  )
}

export default Footer