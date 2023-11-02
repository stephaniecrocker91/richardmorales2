import React from 'react';
import app from '../App.module.css';
import styles from '../styles/Servicios.module.css';
import {Container, Row, Col, Card} from 'react-bootstrap';
import china from '../images/china.jpg';
import meditacion from '../images/meditacion.png';
import yoga from '../images/yoga.png';
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
            <p>El <em>Tai Chi Chuan</em> es un arte marcial que practican millones de personas en todo el mundo debido a los múltiples beneficios que ofrece, tanto a nivel corporal, mental y emocional. Estos beneficios se hacen evidentes en poco tiempo, pues aunque se trata de un ejercicio que se realiza lentamente y de forma suave, con él se pueden trabajar todos los músculos del cuerpo, y además se tienen en cuenta otros factores como la fuerza, la flexibilidad y el equilibrio.</p>
            <p>De este modo, el Tai Chi Chuan es efectivo en la mejora de la condición física, en el tratamiento de enfermedades circulatorias e incluso a la hora de retrasar el envejecimiento. La particularidad de esta disciplina consiste en combinar de forma armónica los tres fundamentos en los que se sustenta, y que son el movimiento corporal, la concentración mental y la realización de una respiración consciente.</p>
            <p>Toda la teoría del Tai Chi Chuan está basada en fundamentos de la filosofía Taoísta, el Yin y Yang, opuestos complementarios y en la  alternancia de estás dos fuerzas.</p>
        </>
        },
        {
            title: "Chi Kung",
            image: chikung,
            info: <>
            <p>El <em>Chi Kung</em>, que se basa en una observación minuciosa de las leyes de la naturaleza, está relacionado con la filosofía taoísta y la concepción china del cuerpo humano.</p>
            <p>Según estos principios filosóficos todos los fenómenos del universo se pueden clasificar según aspectos Yin y aspectos Yang. Son Yin (femenino, reposo, frío, interior,....); mientras que son Yang (masculino, movimiento, calor, exterior,…).</p>
            <p>La MTC considera que en el cuerpo humano hay un sistema energético formado por una red de canales por los que fluye el Chi. La enfermedad es la manifestación de un estancamiento o interrupción de esta energía interna que no puede circular libremente por este circuito energético.</p>
            <p>El objetivo del Chi Kung consiste en retornar al organismo el estado de equilibrio energético Yin-Yang que se ha perturbado, ya que el estado de salud se caracteriza por el equilibrio dinámico de estas dos fuerzas.</p>
        </>
        },
        {
            title: "Yoga",
            image: yoga,
            info: <p>El <em>yoga</em> es una antigua disciplina física, mental y espiritual que se originó en la India. Se centra en la armonía entre el cuerpo, la mente y el espíritu. Su objetivo es alcanzar un estado de equilibrio y bienestar integral. A través de la práctica de posturas físicas, técnicas de respiración y meditación entre otras, el yoga promueve la flexibilidad, la fuerza y la relajación, al tiempo que fomenta la paz interior y la conexión con uno mismo y con el Todo. Es una herramienta valiosa para aliviar el estrés, mejorar la salud y encontrar un sentido de serenidad en medio de las demandas de la vida moderna.</p>
        },
        {
            title: "Meditación",
            image: meditacion,
            info: <>
            <p>La <em>meditación</em> es una práctica mental y espiritual que implica enfocar la atención de manera consciente y para ello se basa en diferentes técnicas.</p>
            <p>Se busca desarrollar la claridad mental y promover la relajación. Durante la meditación, se busca alcanzar un estado de tranquilidad interior, liberando la mente de distracciones y preocupaciones, lo que puede llevar a una mayor autoconciencia y una sensación de paz.</p>
            <p>A lo largo del tiempo, la meditación se ha utilizado en diversas tradiciones religiosas y culturas como una herramienta para reducir el estrés, mejorar la concentración y fomentar el bienestar emocional.</p>
            </>

        }, {
            title: "Medicina Tradicional China",
            image: china,
            info: <>
            <p>La <em>Medicina Tradicional China</em> es un sistema  milenario que se ha desarrollado y perfeccionado a lo largo de miles de años en China. Se basa en un enfoque global del Ser y de la salud, que considera el equilibrio y la armonía entre diferentes aspectos del cuerpo, las emociones y la mente. La Medicina Tradicional China se centra en la energía vital, conocida como "Chi", la teoría del Yin y Yang y los 5 Reinos Mutables. </p>
            <p>La energía circula por meridianos, cuando el Chi se estanca o se bloquea se  produce un desequilibrio en el Ser. Para lograr la vuelta a ese equilibrio se utiliza una variedad de prácticas, como la acupuntura, la moxibustión, el masaje (tui na), las ventosas y otras y de esa forma restaurar y mantener la salud. Este enfoque integral y holístico es apreciado por su capacidad para tratar no solo los síntomas físicos, sino también los aspectos emocionales y mentales de la salud de una persona.</p>
            </>
        }, {
            title: "Reiki",
            image: reiki,
            info: <p>
                <em>Reiki</em> es una terapia de sanación holística que se basa en la canalización de energía universal para promover la armonía y el equilibrio en el cuerpo, la mente y el espíritu. Durante una sesión de Reiki, el terapeuta coloca sus manos sobre o cerca del cuerpo del receptor, permitiendo que la energía fluya, disipando bloqueos y restaurando la vitalidad. Esta técnica suave y no invasiva es conocida por aliviar el estrés, reducir la ansiedad, promover la relajación profunda y estimular la capacidad de autocuración del cuerpo. Descubre los beneficios transformadores de Reiki y experimenta una sensación renovada de bienestar.
            </p>
        }, {
            title: "Terapias Florales",
            image: terapiasflorales,
            info: <p>
                Las <em>terapias florales</em> son un enfoque holístico de bienestar que utiliza las esencias naturales de flores para promover la armonía emocional y el equilibrio en la vida de las personas. Estas esencias, obtenidas a partir de flores silvestres o cultivadas, se aplican con el propósito de abordar desafíos emocionales, estrés, ansiedad y otros aspectos del bienestar mental. A través de la terapia floral, se busca restaurar la salud emocional y fomentar una sensación de calma y serenidad en un enfoque suave y no invasivo. Experimenta la belleza y el poder curativo de la naturaleza a través de nuestras terapias florales, diseñadas para nutrir tu mente, cuerpo y espíritu.
            </p>
        },
    ];

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
                    <h2>Servicios</h2>
                    </div>
                    {/* Resto del contenido */}
                    {
                    serviciosData.map((servicio, index) => (
                        <Row className={
                                `${
                                    styles.Margin
                                } ${app.PaddingLeftRight} ${
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
                                        <h4 className={app.GreenFont}>{
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
                                    <div className={app.Margin}>
                                        {
                                        servicio.info
                                    } </div>
                                    </div>
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
