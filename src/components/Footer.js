
// Style
import "../styles/Footer.css"

// Assets
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (
    <div className="footer">
        <div class='left'>
            <p>&copy; Webino Blogs 2023</p>
        </div>
        <div class='right'>
            <FacebookRoundedIcon />
            <XIcon />
            <InstagramIcon />
        </div>
    </div>
  ) 
}

export default Footer
