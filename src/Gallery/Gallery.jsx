import './Gallery.css'
import GalleryImages from './GalleryImages'
import { Link } from 'react-router-dom'

function Gallery(){
  return(
    <>
      <div className="born">
        <p className="dob">June-22 1978 <br /> <span className="place"> A small boy born in <br /> Nagerkovil,Tamilnadu</span> </p>
        <img src="/baby.png" alt="" className="baby-img" />
      </div>
      <GalleryImages />
      <div className="last-div">
        <img src="/lastimg.png" alt="" className="last-img"  />
        <div className="right-side">
          <button className="gal-years">@48 still Loading</button>
          
        </div>
        
      </div>
      <Link to="/surprise" ><button  className='surprise-btn'>Surprise <br /> Click here</button></Link>
    </>
  )
}

export default Gallery