import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useRef, useState } from 'react';

function NavBar() {
    const [expanded, setExpanded]= useState(false)
    const ref = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)){
                setExpanded(false)
            }
        }
        document.addEventListener('mouseup', handleClickOutside)
        return () => {
            document.removeEventListener('mouseup', handleClickOutside)
        }
    }, [ref])

    return (
        <>
        <div className={styles.Green}>
        <Navbar expanded={expanded} fixed="top" expand="lg"
            className={
                `bg-body-tertiary ${
                    styles.NavBar
                }`
        }>
            <Container fluid>
                <NavLink exact="true" to="/" className={ 
                                styles.Link
                        }>
                    <Navbar.Brand className={styles.Logo}>Richard Morales</Navbar.Brand>
                    </NavLink>
                <Navbar.Toggle onClick={()=> setExpanded(!expanded)} ref= {ref} aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className={
                            `me-auto my-2 my-lg-0 ${
                                styles.Links
                            }`
                        }

                        style={
                            {maxHeight: '100px'}
                        }
                        navbarScroll>
                        <NavLink exact="true" to="/"
                            className={
                                styles.Link
                        }>Home</NavLink>
                        <NavLink exact="true" to="/richardmorales"
                            className={
                                styles.Link
                        }>Biografía</NavLink>
                        <NavLink to="/servicios"
                            className={
                                styles.Link
                        }>Servicios</NavLink>
                        {/*<NavLink exact="true" to="/blog"
                            className={
                                styles.Link
                        }>Blog</NavLink> */}
                        <NavLink exact="true" to="/contacto"
                            className={
                                styles.Link
                        }>Contacto</NavLink>
                    </Nav>
                    <div className="d-flex">
                        <a className={
                                styles.Social
                            }
                            href="https://www.facebook.com/Termerg"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a className={
                                styles.Social
                            }
                            href='https://www.instagram.com/richardmorales1612/'
                            target="_blank"
                            rel="noopener noreferrer">
                            <i class="fa-brands fa-square-instagram"></i>
                        </a>
                        <a className={
                                styles.Social
                            }
                            href="mailto:morales.r51@gmail.com">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                        <a 
                        className={
                            styles.Social
                        }
                        href="https://wa.me/+59895783566"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i class="fa fa-whatsapp whatsapp-icon"></i>
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        </div>
        </>
    );
}

export default NavBar;
