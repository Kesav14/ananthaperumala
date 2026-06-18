import './header.css'
import { Link } from 'react-router-dom'

function Header(){
  return (
    <>
      <div className="header-div">
        <img src="src\assets\Logo.png" alt="" className='logo' />
        <Link to="/" className="home-text">
          Home
        </Link>
        <Link to="/gallery" className="home-text2">
          Gallery
        </Link>
        <Link to="/gallery">
          <button className="call-action">
            <p className="view-gallery">View your gallery</p>
            <img src="src/assets/journey.png" alt="" className="journey-img" />
          </button>
        </Link>
        
      </div>
      
    </>
  )
}

export default Header