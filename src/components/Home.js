import Carousel from 'react-bootstrap/Carousel';
import Hero from '../images/richard1.png';
import Hero2 from '../images/richard2.png';
import Hero2mobile from '../images/richard1mobile.png';
import Heromobile from '../images/richardmobile.png';
import logo from '../images/logo.png';

import styles from '../styles/CarouselComponent.module.css';
import app from '../App.module.css';
import { NavLink } from 'react-router-dom'


var heroData = [
    {
        id: 1,
        image: Hero
    }, {
        id: 2,
        image: Hero2
    }
]

function CarouselComponent() {
    return (
        <> {/* DESKTOP DISPLAY */}
            <section id={
                    styles.home
                }
                className={
                    `${
                        styles.HeroBlock
                    } ${
                        styles.DesktopDisplay
                    }`
            }>
                <div className={
                    styles.carouselContainer
                }>
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            {/* Overlay on each item */}
                            <div className={
                                styles.overlay
                            }></div>
                            <img className="d-block w-100"
                                src={Hero}
                                alt="First slide"
                                loading="eager"/>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            {/* Overlay on each item */}
                            <div className={
                                styles.overlay
                            }></div>
                            <img className="d-block w-100"
                                src={Hero2}
                                alt="Second slide"
                                loading="eager"/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>

            {/* MOBILE DISPLAY */}
            <section id={
                    styles.home
                }
                className={
                    `${
                        styles.HeroBlock
                    } ${
                        styles.MobileDisplay
                    } ${
                        styles.MobileCarousel
                    }`
            }>
                <div class={
                    styles.HomeMobileText
                }>
                    <p>Espacio de Artes Internas</p>
                    <h2>Anahata</h2>
                </div>
                <div className={
                    styles.home
                }>

                <Carousel>
                        <Carousel.Item interval={3000}>
                            {/* Overlay on each item */}
                            <div className={styles.overlay}></div>
                            <img className="d-block w-100" src={Hero2mobile} alt="First slide" loading="eager" />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            {/* Overlay on each item */}
                            <div className={styles.overlay}></div>
                            <img className="d-block w-100" src={Heromobile} alt="Second slide" loading="eager" />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            {/* Overlay on each item */}
                            <div className={styles.overlay}></div>
                            <img className="d-block w-100" src={logo} alt="Second slide" loading="eager" />
                        </Carousel.Item>
                    </Carousel> 



                    
                </div>
                <div className={styles.HomeDescription}>
                    <p>
                        Descubre el equilibrio físico, mental y emocional.
                    </p>

                    <NavLink to="/servicios">
                    <button className={styles.Button}>Servicios</button>
                    </NavLink>
                </div>


            </section>
        </>
    );
}

export default CarouselComponent;
