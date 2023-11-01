import {React} from 'react';
import styles from '../styles/Landing.module.css'
import image from '../images/starimage.png'
import { NavLink } from 'react-router-dom'
import Video from './Video';


function Landing() {
    return (
        <>
                <img src={image} className={styles.Mobile} loading="lazy"/>
                <Video />
                <div className={
                    styles.LandingText
                }>
                    <h2 className={styles.LandingSubtitle}>Espacio de Artes Internas</h2>
                    <h1 className={styles.LandingSubtitle}>Anahata</h1>
                </div>
                <NavLink to="/richardmorales">
                    <button className={styles.Button}>Bienvenidos</button>
                </NavLink>
        </>
    );
}

export default Landing;
