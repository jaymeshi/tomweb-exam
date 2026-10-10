import {useState} from 'react'
import {Link} from "react-router"

// Assets
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';

// Style
import "../styles/Navbar.css"

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    let vw = window.innerWidth;
    let vh = window.innerHeight;

    window.onresize = function(event)
    {
    document.location.reload(true);
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="navbar">
            <div className='title'>
                    <button onClick={toggleMenu} className='menuButton' viewTransition>
                        <CloseIcon className={`icon ${showMenu ? 'fade-in' : 'fade-out'}`}/>
                        <MenuRoundedIcon className={`icon ${showMenu ? 'fade-out' : 'fade-in'}`}/>
                    </button>
                <Link to='/' viewTransition className='titleLink'><h3 className='webino'>{(vw >= 0.75*vh) ? "Webino Blogs" : "WB"}</h3></Link>
            </div>
            <div className='buttons'>
                <Link className='navBtn' to="/reports" viewTransition>REPORTS</Link>
                <Link className='navBtn' to="/blogs" viewTransition>BLOGS</Link>
                <Link className='navBtn' to="/sports" viewTransition>SPORTS</Link>
            </div>
            <div className={`menu ${showMenu ? 'open' : 'closed'}`}>
                <div>
                <Link className={`btn ${showMenu ? 'btn-open' : 'btn-closed'}`} onClick={toggleMenu} to="/reports" viewTransition>REPORTS</Link>
                </div><div>
                <Link className={`btn ${showMenu ? 'btn-open' : 'btn-closed'}`} onClick={toggleMenu} to="/blogs" viewTransition>BLOGS</Link>
                </div><div>
                <Link className={`btn ${showMenu ? 'btn-open' : 'btn-closed'}`} onClick={toggleMenu} to="/sports" viewTransition>SPORTS</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
