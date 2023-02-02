import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AiOutlineGoogle, FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../assets/brands/Brand1.png';
import Brand2 from '../../assets/brands/Brand2.png';

const RightSightNav = () => {
    return (
        <div>
            <div>
                <ButtonGroup vertical>
                    <Button className='mt-2 mb-2' variant='outline-primary'><FaGoogle></FaGoogle> Login with Google</Button>
                    <Button variant='outline-primary'><FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>
                <div className='mt-4'>
                    <h5> Find us On</h5>
                    <ListGroup>
                        <ListGroup.Item className='mb-2 mt-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> FaWhatsApp</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> FaTwitter</ListGroup.Item>

                    </ListGroup>
                </div>
                <div>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Brand1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Brand2}
                                alt="Second slide"
                            />

                          

                            <Carousel.Caption>
                               
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default RightSightNav;