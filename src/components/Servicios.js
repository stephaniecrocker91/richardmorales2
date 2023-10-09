import React from 'react';
import app from '../App.module.css';
import styles from '../styles/Servicios.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import china from '../images/china.jpg';
import meditacion from '../images/meditacion.jpg';
import yoga from '../images/yoga.jpg';
import reiki from '../images/reiki.png';
import terapiasflorales from '../images/terapias-florales.png';
import taichichuan from '../images/taichichuan.png';
import chikung from '../images/chikung.png';


function Servicios() {
    const serviciosData = [
        {
            title: "Tai Chi Chuan",
            image: taichichuan,
            info: <>
                <p>El taichí, tai chi o tai chi chuan es un arte marcial que practican millones de personas en todo el mundo debido a los múltiples beneficios que ofrece, tanto a nivel corporal como mental, por la parte de meditación que incluye. Estos beneficios se hacen evidentes en poco tiempo, pues aunque se trata de un ejercicio que se realiza lentamente y de forma suave, con él se pueden trabajar todos los músculos del cuerpo, y además se tienen en cuenta otros factores como la fuerza, la flexibilidad y el equilibrio. De este modo, el taichí es efectivo en la mejora de la condición física, en el tratamiento de enfermedades circulatorias e incluso a la hora de retrasar el envejecimiento. La particularidad de esta disciplina consiste en combinar de forma armónica los tres fundamentos en los que se sustenta, y que son el movimiento corporal, la concentración mental y la realización de una respiración consciente.</p>
                <p>La particularidad de esta disciplina consiste en combinar de forma armónica los tres fundamentos en los que se sustenta, y que son el movimiento corporal, la concentración mental y la realización de una respiración consciente.</p>
            </>
        },
        {
            title: "Chi Kung",
            image: chikung,
            info: <>
                <p>El Chi Kung o Qi Gong es una terapia medicinal de origen chino que pertenece al mismo grupo que otras terapias como el taichi o el reiki. Todas ellas proceden de la tradición oriental y sustentan sus principios en la importancia de canalizar de forma adecuada la energía vital (Qi) a través de los diferentes meridianos que recorren nuestro cuerpo.</p>
                <p>Según dichos principios, el buen estado de la salud de cada uno dependerá de nuestra capacidad para conseguir el correcto equilibrio entre la mente y el cuerpo; y dicho bienestar se logra, principalmente, a través de la meditación y del control de la respiración.</p>
            </>
        },
        {
            title: "Yoga",
            image: yoga,
            info: <p>El yoga es una antigua disciplina física, mental y espiritual que se originó en la India. Se centra en la armonía entre el cuerpo y la mente, y su objetivo es alcanzar un estado de equilibrio y bienestar integral. A través de la práctica de posturas físicas, técnicas de respiración y meditación, el yoga promueve la flexibilidad, la fuerza y la relajación, al tiempo que fomenta la paz interior y la conexión con uno mismo. Es una herramienta valiosa para aliviar el estrés, mejorar la salud y encontrar un sentido de serenidad en medio de las demandas de la vida moderna.</p>
        },
        {
            title: "Meditación",
            image: meditacion,
            info: <p>
                La meditación es una práctica mental y espiritual que implica enfocar la atención de manera consciente en un objeto, pensamiento, o la propia respiración, con el propósito de calmar la mente, desarrollar la claridad mental y promover la relajación. Durante la meditación, se busca alcanzar un estado de tranquilidad interior, liberando la mente de distracciones y preocupaciones, lo que puede llevar a una mayor autoconciencia y una sensación de paz. A lo largo del tiempo, la meditación se ha utilizado en diversas tradiciones religiosas y culturas como una herramienta para reducir el estrés, mejorar la concentración y fomentar el bienestar emocional.
                </p>

        }, {
            title: "Medicina Tradicional China",
            image: china,
            info: <p>
                La medicina tradicional china es un sistema médico milenario que se ha desarrollado y perfeccionado a lo largo de miles de años en China. Se basa en un enfoque holístico de la salud, que considera el equilibrio y la armonía entre diferentes aspectos del cuerpo y la mente. La medicina tradicional china se centra en la energía vital, conocida como "qi," y en la teoría de los meridianos para diagnosticar y tratar enfermedades. Utiliza una variedad de prácticas, como la acupuntura, la fitoterapia, la dieta, el masaje (tui na) y la meditación (taichi), para restaurar y mantener la salud. Este enfoque integral y holístico es apreciado por su capacidad para tratar no solo los síntomas físicos, sino también los aspectos emocionales y mentales de la salud de una persona.
                </p>
        }, {
            title: "Reiki",
            image: reiki,
            info: <p>
                Reiki es una terapia de sanación holística que se basa en la canalización de energía universal para promover la armonía y el equilibrio en el cuerpo, la mente y el espíritu. Durante una sesión de Reiki, el terapeuta coloca sus manos sobre o cerca del cuerpo del receptor, permitiendo que la energía fluya, disipando bloqueos y restaurando la vitalidad. Esta técnica suave y no invasiva es conocida por aliviar el estrés, reducir la ansiedad, promover la relajación profunda y estimular la capacidad de autocuración del cuerpo. Descubre los beneficios transformadores de Reiki y experimenta una sensación renovada de bienestar.
            </p>
        }, {
            title: "Terapias Florales",
            image: terapiasflorales,
            info: <p>
                Las terapias florales son un enfoque holístico de bienestar que utiliza las esencias naturales de flores para promover la armonía emocional y el equilibrio en la vida de las personas. Estas esencias, obtenidas a partir de flores silvestres o cultivadas, se aplican con el propósito de abordar desafíos emocionales, estrés, ansiedad y otros aspectos del bienestar mental. A través de la terapia floral, se busca restaurar la salud emocional y fomentar una sensación de calma y serenidad en un enfoque suave y no invasivo. Experimenta la belleza y el poder curativo de la naturaleza a través de nuestras terapias florales, diseñadas para nutrir tu mente, cuerpo y espíritu.
            </p>
        },
    ];

    return (
        <>
            <div className={
                app.Box
            }>
                <Container fluid
                    style={
                        {
                            paddingLeft: 0,
                            paddingRight: 0
                        }
                }>
                    <div className={app.LightGreen}>
                    <h2>Servicios</h2>
                    </div>
                    {/* Resto del contenido */}
                    {
                    serviciosData.map((servicio, index) => (
                        <Row className={
                                `${
                                    styles.Margin
                                } ${
                                    index % 2 === 1 ? styles.ReverseOrder : ''
                                }`
                            }
                            key={index}>
                            
                            <Col>
                                <div className={
                                    styles.Box
                                }>
                                    <div className={
                                        styles.BioText
                                    }>
                                        <h4>{
                                            servicio.title
                                        }</h4>
                                        <img src={
                                        servicio.image
                                    }
                                    alt={
                                        `Imagen ${
                                            servicio.title
                                        }`
                                    }
                                    className={`${styles.ServicioImage} ${styles.MobileImage}`}
                                    loading="lazy"
                                    />
                                        {
                                        servicio.info
                                    } </div>
                                </div>
                            </Col>
                            <Col lg={4}
                                md={4}
                                sm={12}
                                xs={12}
                                >
                                <img src={
                                        servicio.image
                                    }
                                    alt={
                                        `Imagen ${
                                            servicio.title
                                        }`
                                    }
                                    className={
                                        styles.ServicioImage
                                    }
                                    loading="lazy"
                                    />
                            </Col>
                        </Row>
                    ))
                } </Container>
            </div>
        </>
    );
}

export default Servicios;
