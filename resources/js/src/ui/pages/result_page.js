import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Card, Spinner, Image, Alert } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { productContext } from '../../context/product_context';
import NumberFormat from 'react-number-format';
function ResultPage() {
    let { kode } = useParams();
    const { product, showProductApi, loading, error } = useContext(productContext);
    const ContainerStyle = {
        height: '150px',
        position: 'relative'
    }
    useEffect(() => {
        showProductApi(kode)
    }, [kode]);
    return (
        <Container>
            <Row>
                <Col className="text-center">

                    {(error) ? (<Alert variant="error">{error}</Alert>) : (<>
                    <Image src={product.imageUrl} width={'80%'}/>
                    <Card style={{ width: '100%', border: 'none' }}>
                    <Card.Body>
                    <Card.Title className="text-left" >{product.name}</Card.Title>
                    <Card.Title className="mb-2 text-muted text-left"><NumberFormat value={product.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></Card.Title>
                    </Card.Body>
                    </Card>
                    </>)}
                    <br/>
                    <Link style={{backgroundColor: '#F2994A', borderColor: '#F2994A', color: '#FFFFFF', padding: '50px', borderRadius: 500}} className="btn" to="/pindai">
                        <div style={{
                            height: '100px',
                            width: '100px',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                             fontSize: '18px'
                        }}>
                            <strong>
                        SCAN LAGI</strong></div></Link>
                </Col>
            </Row>
        </Container>
    );
}

export default ResultPage;
