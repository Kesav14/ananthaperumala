import './Home.css'

function HomePage(){
  return(
    <>
    <div className="hero-images">
          <img src="src/assets/dad-1.png" alt="" className="hero-1" />
          <img src="src/assets/dad-2.png" alt="" className="hero-2" />
          <img src="src/assets/dad-3.png" alt="" className="hero-3" />
    </div>
    <div className="why-special"><p className='why-special-text'> Why you're so special</p></div>
    <img src="src/assets/arrow-down.png" alt="" className="arrowdown" />
    <div className="because"><p className="because-text">Because you are my dad</p></div>
    <div className="dad-stats"></div>
    </>
  )
}

export default HomePage