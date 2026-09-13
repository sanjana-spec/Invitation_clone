import { useEffect, useRef } from 'react'

import texture from '../assets/texture.svg'
import aboutLeft from '../assets/aboutleft.svg'
import aboutRight from '../assets/aboutright.svg'

import bride from '../assets/bride.jpg'
import brideSide from '../assets/brideside.svg'
import brideLeaf from '../assets/brideleaf.svg'

import groomLeaf from '../assets/groomleaf.svg'
import groom from '../assets/groom.jpg'
import groomSide from '../assets/groomside.svg'


function AboutCouple() {

    const sectionRef = useRef(null)


    /*
     * Watch the About Couple section.
     *
     * Once the section enters the viewport,
     * add "about-couple-visible".
     *
     * The CSS will then handle the complete
     * bride → bride info → groom → groom info sequence.
     */

    useEffect(() => {

        const section = sectionRef.current

        if (!section) return


        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {

                    section.classList.add('about-couple-visible')

                    // Run the animation only once
                    observer.unobserve(section)
                }

            },
            {
                threshold: 0.25
            }
        )


        observer.observe(section)


        return () => {
            observer.disconnect()
        }

    }, [])


    return (

        <section
            ref={sectionRef}
            className="about-couple"
        >

            {/* Background texture */}

            <div className="about-couple-background">
                <img src={texture} alt="" />
            </div>


            {/* Decorative left side */}

            <div className="about-couple-left">
                <img src={aboutLeft} alt="" />
            </div>


            {/* Decorative right side */}

            <div className="about-couple-right">
                <img src={aboutRight} alt="" />
            </div>


            <div className="about-nimbus-container">

                <div className="about-couple-container">


                    {/* =====================================
                        BRIDE
                    ===================================== */}

                    <div className="about-couple-bride">


                        {/* Bride image */}

                        <div className="about-couple-bride-img">

                            <img
                                className="bride-pic"
                                src={bride}
                                alt="Bride"
                            />

                            <img
                                className="brideside"
                                src={brideSide}
                                alt=""
                            />

                        </div>


                        {/* Bride information */}

                        <div className="couple-info">

                            <p className="about-couple-name">
                                Ananya Sharma
                            </p>

                            <p className="couple-parents">
                                D/o Mr. Rajesh & Mrs. Sunitha Sharma
                            </p>

                            <p className="couple-desc">
                                "A free spirit wrapped in grace, Ananya
                                moves through life with quiet confidence,
                                an infectious laugh, and a kindness that
                                makee everyone around her feel at home."
                            </p>

                            <img
                                className="bride-leaf"
                                src={brideLeaf}
                                alt=""
                            />

                        </div>

                    </div>


                    {/* =====================================
                        GROOM
                    ===================================== */}

                    <div className="about-couple-groom">


                        {/* Groom information */}

                        <div className="about-couple-groom-info">

                            <p className="about-groom-name">
                                Aarav Verma
                            </p>

                            <p className="groom-parents">
                                S/o Mr Anand & Mrs. Kavitha Verma
                            </p>

                            <p className="groom-desc">
                                "A gentle soul with a poet's heart and an
                                architects's mind, Aarav finds beauty in
                                the details, whether in the curve of a
                                building or the warmth of a wuiet afternoon."
                            </p>

                            <img
                                className="groom-leaf"
                                src={groomLeaf}
                                alt=""
                            />

                        </div>


                        {/* Groom image */}

                        <div className="about-couple-groom-img">

                            <img
                                className="groom-pic"
                                src={groom}
                                alt="Groom"
                            />

                            <img
                                className="groomside"
                                src={groomSide}
                                alt=""
                            />

                        </div>

                    </div>


                </div>

            </div>

        </section>
    )
}


export default AboutCouple