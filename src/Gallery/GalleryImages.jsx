import gal1 from '/gal1.png'
import gal2 from '/gal2.png'
import gal3 from '/gal3.png'
import gal4 from '/gal4.png'
import gal5 from '/gal5.png'
import gal6 from '/gal6.png'
import gal7 from '/gal7.png'
import gal8 from '/gal8.png'

function GalleryImages(){
  var images=[
    {
      id:1,
      image:gal1
    },
    {
      id:2,
      image:gal2
    },
    {
      id:3,
      image:gal3
    },
    {
      id:4,
      image:gal4
    },
    {
      id:5,
      image:gal5
    },
    {
      id:6,
      image:gal6
    },
    {
      id:7,
      image:gal7
    },
    {
      id:8,
      image:gal8
    }
  ]
  return(
    
    <>
      <div className="gallery-images">
        {images.map((image, index) => {
          return <img  className='img-group' src={image.image} key={index} alt="" />
        })}
      </div>
    </>
  )
}

export default GalleryImages