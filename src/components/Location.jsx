import { useEffect, useRef } from 'react'

import locationTopLeft from '../assets/topleft.svg'
import locationBottomRight from '../assets/bottomright.svg'


function Location() {

    const sectionRef = useRef(null)



    useEffect(() => {

        const section = sectionRef.current

        if (!section) return


        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {

                    section.classList.add('location-visible')

                    observer.unobserve(section)
                }

            },
            {
                threshold: 0.2
            }
        )


        observer.observe(section)


        return () => observer.disconnect()

    }, [])



    const openMaps = () => {

        window.open(
            'https://www.google.com/maps/search/?api=1&query=Hall+Complex,+1st+B+Cross+Road,+7th+Block,+Koramangala,+Bengaluru,+Karnataka,+India',
            '_blank'
        )

    }


    return (

        <section
            id="eng007-location-section"
            ref={sectionRef}
            className="eng007-location-section"
        >


            <div className="eng007-location-decoration eng007-schedule-topleft-decoration">
                <img
                    src={locationTopLeft}
                    alt=""
                />
            </div>


            <div className="eng007-location-decoration eng007-schedule-bottomright-decoration">
                <img
                    src={locationBottomRight}
                    alt=""
                />
            </div>


            <div className="eng007-location-decoration eng007-schedule-topright-decoration">
                <img
                    src={locationTopLeft}
                    alt=""
                />
            </div>


            <div className="eng007-location-decoration eng007-schedule-bottomleft-decoration">
                <img
                    src={locationBottomRight}
                    alt=""
                />
            </div>



            <div className="nimbus-container">


               

                <h1 className="eng007-location-main-title">
                    Location
                </h1>



                <div className="eng007-location-container">



                    <div className="eng007-location-map-wrapper">

                        <div className="eng007-location-map-frame"></div>

                        <iframe
                            title="venue-location"
                            src="https://www.google.com/maps?q=Hall%20Complex&output=embed"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className="eng007-location-map"
                        ></iframe>

                    </div>


                    <div className="eng007-location-card">


                        <div className="eng007-location-card-frame"></div>


                        <p className="eng007-location-date">
                            31st October, 2026
                        </p>


                        <h2 className="eng007-location-name">
                            Hall Complex
                        </h2>


                        <p className="eng007-location-description">
                            Hall Complex, 1st B Cross Road, 7th Block,
                            Koramangala, Bengaluru, Karnataka, India
                        </p>


                        <button
                            className="eng007-location-maps"
                            onClick={openMaps}
                        >

                            <div className="eng007-location-maps-icon">

                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >

                                    <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                    ></path>

                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
                                    ></path>

                                </svg>

                            </div>


                            <p className="eng007-location-maps-text">
                                Open in maps
                            </p>

                        </button>


                    </div>

                </div>

            </div>

        </section>
    )
}


export default Location