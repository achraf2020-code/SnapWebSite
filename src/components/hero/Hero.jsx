import React from "react";
import './Hero.css'
import audiophile from './img/client-audiophile.svg'
import databiz from './img/client-databiz.svg'
import maker from './img/client-maker.svg'
import meet from './img/client-meet.svg'
const Hero = (props)=>{
   const {menuState} = props
    return(
        // className={menuState?"bg-blur":""}
       <section id="hero"  className={menuState?"bg-blur":""} >
            <div className="hero-container">
                <div className="hero-content">
                <div className="col-2">
                        <div className="hero-img"></div>
                    </div>
                    <div className="col-1">
                        <h1>Make remote work</h1>
                        <p>Get your team in sync, no matter your location.
                            Streamline precesses, create team rituals, and
                            watch productivity soar.
                        </p>
                        <button>Learn more</button>
                        <div className="brand">
                            <img src={databiz} alt="client" />
                            <img src={audiophile} alt="client" />
                            <img src={meet} alt="client" />
                            <img src={maker} alt="client" />
                        </div>
                    </div>
                  
                </div>
                
            </div>
       </section>
    )
}
export default Hero