import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { Card } from 'react-bootstrap';

function DTable(props) {


    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            // console.log('page', page);
            // console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            // console.log('page', page);
            // console.log('sizePerPage', sizePerPage);
        }
    });

    const { SearchBar, ClearSearchButton } = Search;
    return (
        <Card className="shadow-sm" >
            <Card.Body>
            <ToolkitProvider
        bootstrap4
        keyField='id'
        data={props.products}
        columns={props.columns}
        search
      >
        {
          data => (
            <div >
                <div className="float-right">
              <SearchBar {...data.searchProps} />
              <ClearSearchButton {...data.searchProps} />
              </div>
              <BootstrapTable
                defaultSorted={props.defaultSorted}
                pagination={pagination}
                {...data.baseProps}
              />
            </div>
          )
        }
      </ToolkitProvider>
      </Card.Body>
        </Card>
    );
}

export default DTable;
