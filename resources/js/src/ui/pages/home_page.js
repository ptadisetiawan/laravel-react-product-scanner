import React from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from '../../../assets/img/welcome.png';

const HomePage = () => {
    const history = useHistory();
    const handleClick = () => history.push('/pindai');
    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col className="text-center">
                    <div style={{height:'30%'}}></div>
                    <Image src={logo} rounded width={'80%'} />
                    <div className="fixed-bottom mb-4 mx-2 text-center">
                    <h3>Selamat Datang</h3>
                    <p>
                        Tekan tombol scan untuk mendapatkan <br></br>
                        informasi harga
                    </p>
                    <Button style={{backgroundColor: '#F2994A', borderColor: '#F2994A'}} className="w-75" onClick={handleClick}>SCAN</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
