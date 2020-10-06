import React from'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();
    const handleClick = () => history.push('/scanner');
   return (
    <Container>
    <Row>
        <Col>
        <Card style={{ width: '100%' }}>
        <Card.Body>
            <Card.Title>Cek harga sekarang bisa melalui website</Card.Title>
            <Card.Text>
                Cek harga akan menggunakan kode QR, tekan tombol dibawah untuk membuka kamera anda. <br/>
                <strong>Jika muncul permintaan ijin untuk menggunakan kamera, tekan IZINKAN.</strong>
            </Card.Text>
            <Button className="float-right btn btn-success" onClick={handleClick}>Mulai pindai kode QR</Button>
        </Card.Body>
        </Card>
        </Col>
    </Row>
</Container>
   );
};

export default HomePage;
