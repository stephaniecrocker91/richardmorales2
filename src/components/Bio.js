import {React} from 'react';
import styles from '../styles/Bio.module.css'
import app from '../App.module.css'
import {Container, Row, Col} from 'react-bootstrap';
import hero from '../images/richard1mobile.png'
import video from '../images/stars.mp4'
import image from '../images/starimage.png'


function Bio() {
    return (
        <>
            <div className={
                app.ContentBox
            }>
                <Container fluid
                    style={
                        {
                            paddingLeft: 0,
                            paddingRight: 0

                        }
                }>
                    <div className={app.LightGreen}>
                    <h2>Richard Morales</h2>
                    </div>
                    {/*<h4>
                        Instructor Tai Chi Chuan, Qigong, Terapeuta MTCH, Maestro de Reiki, Terapeuta Floral, Instructor de Yoga
            </h4>*/}
                    <div className={
                        styles.Margin
                    }>
                        <div lg={4}
                            md={4}
                            sm={12}
                            xs={12}><img src={hero}
                                alt='Imagen Richard Morales'
                                className={
                                    styles.BioImage
                                }
                                loading="lazy"/></div>
                        <div>
                            <div className={
                                app.PaddingLeftRight
                            }>
                                <div className={`${
                                    styles.BioText
                                } ${app.Margin}`}>
                                    <p>Hola, mi nombre es Richard Morales.</p>
                                    <p>Comencé mi búsqueda hace unos años como practicante de Artes Marciales (karate), después de un tiempo conocí el Chi Kung y de la mano de este hermoso arte llegué al Tai Chi. Instructor de ambas Artes Internas, y también de Yoga, me adentré en el camino del Reiki llegando a la Maestría. Mis estudios continuaron en el campo de las Terapias Florales, luego llegó la Medicina Tradicional China que me enamoró y la cual es base de mí trabajo junto al Tai Chi. 
                                        El estudio y análisis de los fenómenos que nos rodean nunca termina.</p>
                                    <p>Cuando comprendes que eres Energía y que el equilibrio de esta Energía es la que nos permite una buena salud física, mental, emocional y espiritual es cuando damos un paso adelante en nuestra evolución como Seres.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </>
    );
}

export default Bio;
