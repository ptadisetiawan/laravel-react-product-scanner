import React from 'react';
import { Button, Col } from 'react-bootstrap';
import DTable from '../../components/table';
import Panel from './panel';


function ImportPage() {
    const products = [
        { id: 1, name: 'George', animal: 'Monkey' },
        { id: 2, name: 'Jeffrey', animal: 'Giraffe' },
        { id: 3, name: 'Alice', animal: 'Giraffe' },
        { id: 4, name: 'Foster', animal: 'Tiger' },
        { id: 5, name: 'Tracy', animal: 'Bear' },
        { id: 6, name: 'Joesph', animal: 'Lion' },
        { id: 7, name: 'Tania', animal: 'Deer' },
        { id: 8, name: 'Chelsea', animal: 'Tiger' },
        { id: 9, name: 'Benedict', animal: 'Tiger' },
        { id: 10, name: 'Chadd', animal: 'Lion' },
        { id: 11, name: 'Delphine', animal: 'Deer' },
        { id: 12, name: 'Elinore', animal: 'Bear' },
        { id: 13, name: 'Stokes', animal: 'Tiger' },
        { id: 14, name: 'Tamara', animal: 'Lion' },
        { id: 15, name: 'Zackery', animal: 'Bear' }
    ];

    const columns = [
        { dataField: 'id', text: 'Id', sort: true },
        { dataField: 'name', text: 'Name', sort: true },
        { dataField: 'animal', text: 'Animal', sort: true }
    ];

    const defaultSorted = [{
        dataField: 'name',
        order: 'desc'
    }];

    return (
        <Panel>
            <Button className="my-2" >Import dari Jeking</Button>
            <DTable products={products} columns={columns}
             defaultSorted={defaultSorted}
              />
        </Panel>
    );
}

export default ImportPage;
