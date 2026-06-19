import './Home.css'

function HomePage(){
  return(
    <>
    <div className="hero-images" data-aos="fade-in">
          <img src="/dad-1.png" alt="" className="hero-1" />
          <img src="/dad-2.png" alt="" className="hero-2" />
          <img src="/dad-3.png" alt="" className="hero-3" />
    </div>
    <div className="why-special" data-aos="fade-in"><p className='why-special-text'> Why you're so special</p></div>
    <img src="/arrow-down.png" alt="" className="arrowdown" data-aos="fade-in" />
    <div className="because" data-aos="fade-in"><p className="because-text">Because you are my dad</p></div>
    <div className="dad-stats" data-aos="fade-in">
      <img src="/stats.png" alt="" className="stats-img" />
      <p className="stats-text">DAD STATS</p>
      <img src="/stats.png" alt="" className="stats-img2" />
    </div>
    <img src="/arrow-down.png" alt="" className="arrowdown2" data-aos="fade-in" />
    <div className="tea-break" data-aos="fade-in">
      <p className="tea-text">TEA BREAKS-COUNTLESS</p>
      <img src="/teaimg.png" alt="" className="tea-img" />
    </div>
    <div className="hardwork" data-aos="fade-in">
      <p className="years">YEARS OF <br /> HARDWORK-24 YEARS</p>
      <img src="/hardimg.png" alt="" className="hard-img" />
    </div>
    <div className="problems" data-aos="fade-in">
      <p className="problems-text">PROBLEMS SOLVED-TOO MANY</p>
      <img src="/problemsimg.png" alt="" className="problems-img" />
    </div>
    <div className="extra-comments" data-aos="fade-in">
      <p className="extra-text">EXTRA COMMENTS</p>
      <img src="/commentimg.png" alt="" className="comment-img" />
    </div>
    <img src="/comedyimg.png" alt="" className="comedy-img"  data-aos="fade-in"/>
    </>
  )
}

export default HomePage