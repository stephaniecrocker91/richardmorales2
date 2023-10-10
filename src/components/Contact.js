import {React} from 'react';
import app from '../App.module.css'
import styles from '../styles/Contact.module.css'
import {Container, Row, Col} from 'react-bootstrap';
import video from '../images/stars.mp4'


function Contact() {
    return (
        <>
            <div className={
                app.ContentBox
            }>
                <div className={
                    app.LightGreen
                }>
                    <h2>Contacto</h2>
                </div>
                <div className={
                    app.Margin
                }>
                    <h5>
                        <em>Conéctate con nosotros y síguenos en nuestras redes sociales.</em>
                    </h5>
                    <div class={
                        styles.SocialContainer
                    }>
                        <span>
                            <a className={
                                    styles.Social
                                }
                                href="https://wa.me/+59895783566"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i class="fa fa-whatsapp whatsapp-icon"></i>
                            </a>
                            <p>095 783 566</p>
                        </span>
                        <span>
                            <a className={
                                    styles.Social
                                }
                                href="mailto:morales.r51@gmail.com">
                                <i class="fa-solid fa-envelope"></i>
                            </a>
                            <p>morales.r51@gmail.com</p>
                        </span>
                    </div>
                    <div className={
                        styles.Anahata
                    }>
                        <h3>Espacio Anahata</h3>

                        <div class={
                            styles.SocialContainer
                        }>
                            <span>
                                <a className={
                                        styles.Social
                                    }
                                    href='https://www.instagram.com/espacio_anahata_/'
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i class="fa-brands fa-square-instagram"></i>
                                </a>
                                <p>@espacio_anahata_</p>
                            </span>
                            <span>
                                <a className={
                                        styles.Social
                                    }
                                    href="https://www.facebook.com/Termerg"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                                <p>Espacio Anahata</p>
                            </span>

                        </div>
                    </div>
                    <div className={
                        styles.Itka
                    }>
                        <h3>Itka Uruguay</h3>
                        <div class={
                            styles.SocialContainer
                        }>
                            <span>
                                <a className={
                                        styles.Social
                                    }
                                    href='https://www.instagram.com/itkauruguay/'
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i class="fa-brands fa-square-instagram"></i>
                                </a>
                                <p>@itkauruguay</p>
                            </span>
                            <span>
                                <a className={
                                        styles.Social
                                    }
                                    href="https://www.facebook.com/profile.php?id=100089955318537"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                                <p>Itka Uruguay</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}

export default Contact;
