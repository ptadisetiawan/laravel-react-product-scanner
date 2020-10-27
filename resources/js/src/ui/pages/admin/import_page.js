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
        { dataField: 'unit', text: 'Unit', sort: true },
        { dataField: 'harga', text: 'Harga', sort: true },
        { dataField: 'partai_1', text: 'Partai 1', sort: true },
        { dataField: 'harga_partai_1', text: 'Harga Partai 1', sort: true },
        { dataField: 'partai_2', text: 'Partai 2', sort: true },
        { dataField: 'harga_partai_2', text: 'Harga Partai 2', sort: true }
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
