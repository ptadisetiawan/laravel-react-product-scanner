import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import API from '../../services/Api';
function ResultPage(){
    let {kode} = useParams();
    const inititalProduct = {
        id: null,
        nama: null,
        imageUrl: null,
        harga: null
    }
    const [loading, setloading] = useState(false)
    const  [product, setProduct] = useState(inititalProduct);
    const ContainerStyle = {
        height: '150px',
        position: 'relative'
    }
    useEffect(() => {
        setloading(true)
        console.log(kode)
        API.get(`product-json.php`)
      .then(res => {
        setProduct(res.data)
        setloading(false)
      })
      },[kode, setloading]);
    return(
        <Container>
            <Row>
                <Col className="text-center">
                <Card style={{ width: '100%' }}>
                {!loading ?
                <Card.Img variant="top" src={product.imageUrl} />
                :
                <div className="text-center" style={ContainerStyle}>
                <Spinner style={{position: 'absolute',
            top: '50%'
            }} animation="border" /></div>
                }

                <Card.Body>
                <Card.Title>Rp. {product.harga}</Card.Title>
                    <Card.Text>
                     {product.nama}
                    </Card.Text>
                </Card.Body>
                </Card>
                <Link to="/scanner">Pindai lagi</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default ResultPage;
