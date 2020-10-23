import React, { useState, useContext, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { productContext } from '../../../context/product_context';
import ImportModal from '../../components/import_modal';
import DTable from '../../components/table';
import Panel from './panel';


function ImportPage() {
    const { productList, fetchProductApi, loading } = useContext(productContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const columns = [
        { dataField: 'kode', text: 'Kode', sort: true },
        { dataField: 'name', text: 'Name', sort: true },
        { dataField: 'harga', text: 'Harga', sort: true }
    ];

    const defaultSorted = [{
        dataField: 'name',
        order: 'asc'
    }];

    // const fetchData = () => {

    // }
    useEffect(() => {
        fetchProductApi()
    }, [])

    return (
        <Panel>
            <Button onClick={handleShow} className="my-2" >Import dari Jeking</Button>
            {(loading) ? (<div style={{
                width: "100%",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}><Spinner animation="border" className="text-center" /></div>) : (
                    <DTable products={productList} columns={columns}
                        defaultSorted={defaultSorted}
                    />
                )}
            <ImportModal show={show} handleClose={handleClose} />
        </Panel>
    );


}

export default ImportPage;
