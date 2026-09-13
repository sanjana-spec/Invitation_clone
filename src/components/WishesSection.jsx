import { useState } from 'react'

import wishesborderLeft from '../assets/wishesleft.svg'
import wishesborderRight from '../assets/wishesright.svg'
import wishesborderTop from '../assets/wishestop.svg'
import wishesborderBottom from '../assets/wishesbottom.svg'
import quotation from '../assets/quotation.svg'
import wishesFlower from '../assets/wishesflower.svg'

const wishes = [
    {
        message: "May your engagement mark the beginning of a lifetime filled with love, joy, and unforgettable moments together.",
        author: "— Mahesh"
    },
    {
        message: "May your engagement be the start of a beautiful journey where love grows deeper, laughter becomes sweeter, and each shared dream brings you ever closer. Wishing you endless happiness and joy together.",
        author: "— Manya"
    },
    {
        message: "Congratulations on your engagement! May this lovely chapter be filled with love, laughter, unforgettable moments, and beautiful dreams. Wishing you both a lifetime of happiness and togetherness ahead.",
        author: "— Adithya"
    }
]
function WishesSection() {

    const [isChanging, setIsChanging] = useState(false)
    const [currentWish, setCurrentWish] = useState(0)
    const changeWish = (newIndex) => {
        setIsChanging(true)

        setTimeout(() => {
            setCurrentWish(newIndex)
            setIsChanging(false)
        }, 250)
    }

    const previousWish = () => {
        const newIndex =
            (currentWish - 1 + wishes.length) % wishes.length

        changeWish(newIndex)
    }

    const nextWish = () => {
        const newIndex =
            (currentWish + 1) % wishes.length

        changeWish(newIndex)
    }

    return (
        <section className="wishes-section">
            <img className="wishes-border-left" src={wishesborderLeft} alt="" />
            <img className="wishes-border-right" src={wishesborderRight} alt="" />
            <img className="wishes-border-top" src={wishesborderTop} alt="" />
            <img className="wishes-border-bottom" src={wishesborderBottom} alt="" />

            <div className="wishes-nimbus-container">
                <div className="wishes-container">
                    <div className="wishes-header">
                        <img className="wishes-quotation" src={quotation} alt="" />
                        <p className="wishes-title">Wishes For The Couple</p>
                    </div>
                    <div className="wishes-shared-wrapper">
                        <div className={`wish-content ${isChanging ? 'wish-changing' : ''}`}>

                            <p className="wishes-message">
                                {wishes[currentWish].message}
                            </p>

                            <p className="wishes-author">
                                {wishes[currentWish].author}
                            </p>

                        </div>
                        <div className="wishes-dots">

                            <button className="change-btn" onClick={previousWish}>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"></path>
                                </svg>
                            </button>

                            <span className="wishes-counter">
                                {currentWish + 1}/{wishes.length}
                            </span>

                            <button className="change-btn" onClick={nextWish}>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
                <div className="wishes-flower-wrapper">
                    <img className="wishes-flower" src={wishesFlower} alt="" />
                </div>
            </div>
        </section >
    )
}

export default WishesSection