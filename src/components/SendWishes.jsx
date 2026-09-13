import texture from '../assets/texture.svg'
import quotation from '../assets/quotation.svg'
import short from '../assets/bordershort.svg'
import long from '../assets/borderlong.svg'
import wishesFlower from '../assets/wishesflower.svg'
function SendWishes() {
    return (
        <section className="sendwishes-section">
            <img className="sendwishes-texture" src={texture} alt="" />
            <div className="sendwishes-leftflower"></div>
            <div className="sendwishes-nimbus-container">
                <div className="sendwishes-container">
                    <div className="sendwishes-left">
                        <img className="sendwishes-quotation" src={quotation} alt="" />
                        <p className="sendwishes-title">Send your wishes</p>
                        <p className="sendwishes-subtitle">“Leave your blessings and spread a little more love”</p>
                    </div>
                    <div className="sendwishes-right">
                        <div className="sendwishes-box">
                            <div className="sendwishes-border-top">
                                <img className="sendwishes-bordertop" src={short} alt="" />
                            </div>
                            <div className="sendwishes-border-right">
                                <img className="sendwishes-borderright" src={long} alt="" />
                            </div>
                            <div className="sendwishes-border-bottom">
                                <img className="sendwishes-borderbottom" src={short} alt="" />
                            </div>
                            <div className="sendwishes-border-left">
                                <img className="sendwishes-borderleft" src={long} alt="" />
                            </div>
                            <div className="wisher-container">
                                <form id="wisher-form" className="wisher-form">
                                    <input
                                        id="wisher-name-input"
                                        type="text"
                                        className="wisher-input"
                                        placeholder="Your Name"
                                        required
                                    />
                                    <div className="wisher-textarea-wrapper">

                                        <textarea
                                            id="wisher-message-input"
                                            className="wisher-textarea"
                                            placeholder="Your Wishes"
                                            required
                                            maxLength={200}
                                        ></textarea>

                                        <button type="button" className="wisher-ai-btn">

                                            <span className="wisher-ai-sparkle">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>

                                            <span className="ai-text">
                                                Generate AI wishes
                                            </span>

                                        </button>

                                    </div>
                                    <div className="wisher-btn-container">
                                        <button
                                            id="wisher-submit-btn"
                                            type="button"
                                            className="wisher-submit-btn"
                                            onClick={() =>
                                                alert("You need to download the template in order to make a wish")
                                            }
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <img className="sendwishes-wishflower" src={wishesFlower} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SendWishes