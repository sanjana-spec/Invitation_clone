import couplePic from '../assets/couple_pic.webp'
import topLeft from '../assets/topleft.svg'
import topRight from '../assets/topRight.svg'
import bottomLeft from '../assets/bottomleft.svg'
import bottomRight from '../assets/bottomright.svg'
function Hero() {
    return (
        <section className="hero">
            <div className="hero-border-tilt"></div>
            <div className="hero-top-left">
                <img src={topLeft} alt="" />
            </div>
            <div className="hero-top-right">
                <img src={topRight} alt="" />
            </div>
            <div className="hero-bottom-left">
                <img src={bottomLeft} alt=""/>
            </div>
            <div className="hero-bottom-right">
                <img src={bottomRight} alt=""/>
            </div>
            <div className="nimbus-container">
                <div className="hero-container">
                    <div className="hero-left">
                        <div className="hero-save">
                            <p className="save-text">Save the date</p>
                            <p className="names">
                                <span>Ananya Sharma</span>
                                <span>&</span>
                                <span>Aarav Verma</span>
                            </p>
                        </div>
                        <div className="hero-engaged">
                            <p className="engage-text">
                                are getting engaged on
                            </p>
                            <p className="engage-date">
                                Saturday | 31st Oct | 2026
                            </p>
                        </div>
                        <div className="hero-venue">
                            <p className="venue-name">
                                Hall Complex
                            </p>
                            <button className="venue-btn">
                                Open in Maps
                            </button>
                        </div>
                    </div>
                    <div className="hero-right">
                        <img src={couplePic} alt="Couple" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero